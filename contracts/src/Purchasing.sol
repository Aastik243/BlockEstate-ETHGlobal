//SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "./propertyRegistry.sol";
import { ISP } from "../lib/sign-protocol-evm/src/interfaces/ISP.sol";
import { Ownable } from "../lib/openzeppelin-contracts/contracts/access/Ownable.sol"; 
import { Attestation } from "../lib/sign-protocol-evm/src/models/Attestation.sol";
import { DataLocation } from "../lib/sign-protocol-evm/src/models/DataLocation.sol";

contract RentToOwn is PropertyRegistry, Ownable{



    ISP public spInstance;
    uint64 public schemaId;
    mapping(address tenant=>address landlord) public tenantLandlordAgreement;

    error ConfirmationAddressMismatch();

    constructor() Ownable(msg.sender){ }




    uint256 public SECONDS_IN_MONTH = 2629056;
    uint256 public cancellationPenalty = 5; // cancellation penalty in percentage

    mapping(uint256 a =>address b) public tenant;
    mapping(uint256 a =>uint256 b) public numberOfYears;
    mapping(uint256 a =>uint256 b) public monthlyemi;
    mapping(uint256 a =>uint256 b) public totalPaid;
    mapping(uint256 a =>uint256 b) public numberOfPayments;
    mapping(uint256 a =>uint256 b) public lastPayment;
    mapping(uint256 a =>bool b) public buyintention;
 
    event PaymentMade(
        address from,
        uint256 amount
    );

    event OwnershipTransferredtoTenant(address previousOwner, address newOwner);

    event RentAdjusted(uint256 propertyIndex, uint256 newRentAmount);

    event AgreementCancelled(uint256 propertyIndex, address canceller);



    event TenantApproved(address landlord, address tenant, uint64 attestationid);

    function RentProperty(uint256 property_index, uint256 numberofyears, bool _buyintention) external{
        require(properties[property_index].owned == false, "Property is already occupied");

        if(_buyintention==false){
            tenantLandlordAgreement[msg.sender]=properties[property_index].owner;
            buyintention[property_index]=false;

        }
        else{
        require(numberOfYears[property_index]<=8, "Number of years can't be more than 8");
                numberOfYears[property_index]=numberofyears;
                buyintention[property_index]=true;

        tenantLandlordAgreement[msg.sender]=properties[property_index].owner;
        }

       

    }

    function ApproveTenant(uint256 property_index, address _tenant) external returns (uint64){
        bytes[] memory recipients = new bytes[](2);
        recipients[0]= abi.encode(_tenant);
        recipients[1]= abi.encode(msg.sender);
        
        if(tenantLandlordAgreement[_tenant]== msg.sender){

        tenant[property_index]=_tenant;
        properties[property_index].owned == true;
        numberOfPayments[property_index]=0;

        if(buyintention[property_index]==false){
            monthlyemi[property_index]=0;
        }
        else{
        if(numberOfYears[property_index]<=3){
            monthlyemi[property_index]=(110*properties[property_index].price)/(100*numberOfYears[property_index]*12);
        }
        else if(numberOfYears[property_index]>3 && numberOfYears[property_index]<6 ){
            monthlyemi[property_index]=(115*properties[property_index].price)/(100*numberOfYears[property_index]*12);

        }
        else{
            monthlyemi[property_index]=(120*properties[property_index].price)/(100*numberOfYears[property_index]*12);

        }
        }

        Attestation memory a = Attestation({
            schemaId: schemaId,
            linkedAttestationId: 0,
            attestTimestamp: 0,
            revokeTimestamp: 0,
            attester: address(this),
            validUntil: 0,
            dataLocation: DataLocation.ONCHAIN,
            revoked: false,
            recipients: recipients,
            data: ""

        });

        uint64 attestationID = spInstance.attest(a,"","","");

        emit TenantApproved(msg.sender, tenant[property_index], attestationID);

        return attestationID;




        }
        else{
            revert ConfirmationAddressMismatch();
        }

    }


    function payRent(uint256 property_index) public payable {
        require(
            msg.sender == tenant[property_index],
            "Only the tenant can make payments."
        );
        require(
            msg.value >= properties[property_index].rent + monthlyemi[property_index],
            "Must pay at least the rent amount."
        );
        require(
            properties[property_index].owned == true,
            "No tenant currently"
        );
        
        uint excessAmount = msg.value - properties[property_index].rent - monthlyemi[property_index];
        if (excessAmount > 0) {
            // Refund excess payment
            payable(msg.sender).transfer(excessAmount);
        }
        
        totalPaid[property_index] += monthlyemi[property_index];
        numberOfPayments[property_index] += 1;

    payable(properties[property_index].owner).transfer(properties[property_index].rent + monthlyemi[property_index]);
        
        lastPayment[property_index] = block.timestamp;

        emit PaymentMade(msg.sender, properties[property_index].rent + monthlyemi[property_index]);


        if(numberOfPayments[property_index]==numberOfYears[property_index]*12 && buyintention[property_index]){

            address prevowner=properties[property_index].owner;

            properties[property_index].owner=msg.sender;
            totalPaid[property_index] = 0;
            numberOfPayments[property_index] = 0;
            properties[property_index].owned = false;

            emit OwnershipTransferredtoTenant(prevowner,msg.sender);

            

        }
        
    }

    function adjustRent(uint256 _newRentAmount, uint256 property_index ) public {
        // Checks that the sender is the landlord
        require(
            msg.sender == properties[property_index].owner,
            "Only the landlord can adjust the rent."
        );
        // Checks that the new rent isn't more than 10% higher than the old rent
        require(
            _newRentAmount <= properties[property_index].rent * 110 / 100,
            "Cannot increase rent by more than 10%."
        );

        
        properties[property_index].rent = _newRentAmount;

        emit RentAdjusted(property_index, _newRentAmount);
    }

    function cancelAgreement(uint256 property_index) public {
        // Checks that the sender is the tenant
        require(
            msg.sender == tenant[property_index],
            "Only the tenant can cancel the agreement."
        );
        
        // Calculates the refund amount (total paid minus the cancellation penalty)
        uint refundAmount = totalPaid[property_index] * (100 - cancellationPenalty) / 100;
        
        // Return the refund amount to the tenant
        payable(tenant[property_index]).transfer(refundAmount);
        
        // Reset the state of the contract
        totalPaid[property_index] = 0;
        numberOfPayments[property_index] = 0;
        properties[property_index].owned= false;

        emit AgreementCancelled(property_index, msg.sender);
    }

 
    function checkPaymentDue(uint256 property_index) public view returns (bool) {
        return block.timestamp > lastPayment[property_index] + SECONDS_IN_MONTH ;
    }


    function landlordCancelAgreement(uint256 property_index) public {
        // Checks that the sender is the landlord
        require(
            msg.sender == properties[property_index].owner,
            "Only the landlord can cancel the agreement."
        );
        // Checks that a payment is due
        require(
            checkPaymentDue(property_index),
            "Cannot cancel if payment is not due."
        );

        // The tenant forfeits a percentage of what they've paid
        uint refundAmount = totalPaid[property_index] * (100 - cancellationPenalty) / 100;

        // Return the refund amount to the tenant
        payable(tenant[property_index]).transfer(refundAmount);

        // Reset the state of the contract
        totalPaid[property_index] = 0;
        numberOfPayments[property_index] = 0;
        properties[property_index].owned = false;

        emit AgreementCancelled(property_index, msg.sender);
    }



    function setSPInstance(address instance) external onlyOwner{
        spInstance=ISP(instance);
    }


    function setSchemaId(uint64 _schemId) external onlyOwner{
        schemaId=_schemId;
    }

    function getTenant(uint256 propertyIndex) external view returns (address) {
    return tenant[propertyIndex];
    }

    function getTotalPaid(uint256 propertyIndex) external view returns (uint256) {
    return totalPaid[propertyIndex];
    }

   function getNumberOfPayments(uint256 propertyIndex) external view returns (uint256) {
    return numberOfPayments[propertyIndex];
    }

    function getLastPayment(uint256 propertyIndex) external view returns (uint256) {
    return lastPayment[propertyIndex];
    }

}

    


    
