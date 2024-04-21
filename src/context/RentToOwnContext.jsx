import React, { useState, useEffect, useContext } from "react";
import { ethers } from "ethers";
// import Wenb3Model from "web3modal";
import { JsonRpcProvider } from "ethers/providers";
import {createClient} from "urql/core";
// import { useAuth } from "./AuthContext";



import {
    activeChainId,
    PurchasingABI,
    PurchasingAddress,
    propertyRegistryABI,
    propertyRegistryAddress
} from "./constants.js";
import { useAuth } from "./AuthContext";
// import axios from "axios";
// import { ApolloClient, InMemoryCache, gql } from "@apollo/client";



const fetchContract = (signerOrProvider) =>
    new ethers.Contract(PurchasingAddress, PurchasingABI, signerOrProvider);

const fetchContract1 = (signerOrProvider) =>
    new ethers.Contract(propertyRegistryAddress, propertyRegistryABI, signerOrProvider);

export const RentToOwnContext = React.createContext();

export const useRentToOwnContext = () => useContext(RentToOwnContext);

export const RentToOwnProvider = ({ children }) => {
    const { currentAccount } = useAuth();

   

    
    const connectingWithSmartContract = async () => {
        try {
            // const web3Modal = new Wenb3Model();
            // const connection = await web3Modal.connect();
            // const provider = new ethers.providers.Web3Provider(connection);
            const provider = new JsonRpcProvider();
            const signer = provider.getSigner();
            console.log(signer)
            const contract = fetchContract(signer);
            console.log(contract);
            return contract;
        } catch (error) {
            console.log("Something went wrong while connecting with contract!");
        }
    };
    const connectingWithPropertyRegistry = async () => {
        try {
            // const web3Modal = new Wenb3Model;
            // const connection = await web3Modal.connect();
            // const provider = new ethers.providers.Web3Provider(connection);
            const provider = new JsonRpcProvider();
            const signer = provider.getSigner();
            console.log(signer)
            const contract = fetchContract1(signer);
            console.log(contract);
            return contract;
        } catch (error) {
            console.log("Something went wrong while connecting with contract!");
        }
    };

    const registerProperty = async (
        name,
        location,
        price,
        carpetArea,
        bhk,
        furnished,
        rent,
        amenities,
        images,
        ownerContact
    ) => {
        try {
            const contract = await connectingWithPropertyRegistry();
            const account = currentAccount; // Assuming the user's account is the first one

            const transaction = await contract.methods.registerProperty(
                name,
                location,
                price,
                carpetArea,
                bhk,
                furnished,
                rent,
                amenities,
                images,
                ownerContact
            ).send({ from: account });
            const receipt = await transaction.wait();


            console.log('Transaction hash:', transaction.transactionHash);

            // Emit an event to indicate that the property has been successfully added
            console.log('Property added successfully!');
            return receipt;
        } catch (error) {
            console.error('Error:', error);
        }
    };


    const fetchPropertyById = async (propertyIndex) => {
        try {
            const contract = await connectingWithPropertyRegistry();
            const propertyDetails = await contract.methods.getProperty(propertyIndex).call();
            console.log('Property Details:', propertyDetails);
            return propertyDetails;
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const getPropertyCount = async () => {
        try {
            const contract = await connectingWithPropertyRegistry();
            const count = await contract.methods.getPropertiesCount().call();
            console.log('Number of Properties:', count);
            return count;
        } catch (error) {
            console.error('Error:', error);
        }
    };
    

    // Function to rent a property
    const rentProperty = async (propertyIndex, numberOfYears, buyIntention) => {
        try {
            const contract = await connectingWithSmartContract();

            const accounts = currentAccount;

            // Call the RentProperty function on the contract
            const transaction = await contract.methods.RentProperty(propertyIndex, numberOfYears, buyIntention).send({ from: currentAccount });
            const receipt = await transaction.wait();
            console.log('Transaction hash:', transaction.transactionHash);
            console.log('Property rented successfully!');
            console.log('Receipt:', receipt);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    // Function to approve a tenant
    const approveTenant = async (propertyIndex, tenantAddress) => {
        try {
            const contract = await connectingWithSmartContract();

            const accounts = currentAccount;

            // Call the ApproveTenant function on the contract
            const transaction = await contract.methods.ApproveTenant(propertyIndex, tenantAddress).send({ from: currentAccount });
            const receipt = await transaction.wait();


            console.log('Transaction hash:', transaction.transactionHash);
            console.log('Tenant approved successfully!');
            return receipt;
        } catch (error) {
            console.error('Error:', error);
        }
    };


    // Function to pay rent
    const payRent = async (propertyIndex, amount) => {
        try {
            const contract = await connectingWithSmartContract();

            const accounts = currentAccount;

            // Call the payRent function on the contract
            const transaction = await contract.methods.payRent(propertyIndex).send({ from: currentAccount, value: amount });
            const receipt = await transaction.wait();
            console.log('Transaction hash:', transaction.transactionHash);
            console.log('Rent paid successfully!');
            return receipt;
        } catch (error) {
            console.error('Error:', error);
        }
    };

    // Function to adjust rent
    const adjustRent = async (newRentAmount, propertyIndex) => {
        try {
            const contract = await connectingWithSmartContract();

            const accounts = currentAccount;

            // Call the adjustRent function on the contract
            const transaction = await contract.methods.adjustRent(newRentAmount, propertyIndex).send({ from: currentAccount });
            const receipt = await transaction.wait();
            console.log('Rent adjusted successfully!');
            return receipt;
        } catch (error) {
            console.error('Error:', error);
        }
    };

    // Function to cancel agreement
    const cancelAgreement = async (propertyIndex) => {
        try {
            const contract = await connectingWithSmartContract();

            const accounts = currentAccount;

            // Call the cancelAgreement function on the contract
            const transaction = await contract.methods.cancelAgreement(propertyIndex).send({ from: currentAccount });
            const receipt = await transaction.wait();
            console.log('Agreement cancelled successfully!');
            return receipt;
        } catch (error) {
            console.error('Error:', error);
        }
    };

    // Function to landlord cancel agreement
    const landlordCancelAgreement = async (propertyIndex) => {
        try {
            const contract = await connectingWithSmartContract();

            const accounts = currentAccount;

            // Call the landlordCancelAgreement function on the contract
            const transaction = await contract.methods.landlordCancelAgreement(propertyIndex).send({ from: currentAccount });
            const receipt = await transaction.wait();


            console.log('Agreement cancelled by landlord successfully!');
            return receipt;
        } catch (error) {
            console.error('Error:', error);
        }
    };

    // Function to check if payment is due
    const checkPaymentDue = async (propertyIndex) => {
        try {
            const contract = await connectingWithSmartContract();

            // Call the checkPaymentDue function on the contract
            const isPaymentDue = await contract.methods.checkPaymentDue(propertyIndex).call();

            console.log('Is payment due:', isPaymentDue);
            return isPaymentDue;
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const getTenant = async (propertyIndex) => {
        try {
            const contract = await connectingWithSmartContract();

            // Call the getTenant function on the contract
            const tenantAddress = await contract.methods.getTenant(propertyIndex).call();

            console.log('Tenant address:', tenantAddress);
            return tenantAddress;
        } catch (error) {
            console.error('Error:', error);
        }
    };

    // Function to get total paid amount
    const getTotalPaid = async (propertyIndex) => {
        try {
            const contract = await connectingWithSmartContract();

            // Call the getTotalPaid function on the contract
            const totalPaidAmount = await contract.methods.getTotalPaid(propertyIndex).call();

            console.log('Total paid amount:', totalPaidAmount);
            return totalPaidAmount;
        } catch (error) {
            console.error('Error:', error);
        }
    };

    // Function to get number of payments
    const getNumberOfPayments = async (propertyIndex) => {
        try {
            const contract = await connectingWithSmartContract();

            // Call the getNumberOfPayments function on the contract
            const numberOfPayments = await contract.methods.getNumberOfPayments(propertyIndex).call();

            console.log('Number of payments:', numberOfPayments);
            return numberOfPayments;
        } catch (error) {
            console.error('Error:', error);
        }
    };

    // Function to get last payment timestamp
    const getLastPayment = async (propertyIndex) => {
        try {
            const contract = await connectingWithSmartContract();

            // Call the getLastPayment function on the contract
            const lastPaymentTimestamp = await contract.methods.getLastPayment(propertyIndex).call();

            console.log('Last payment timestamp:', lastPaymentTimestamp);
            return lastPaymentTimestamp;
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const setSPInstance = async (instanceAddress, ownerAddress) => {
        try {
            const contract = await connectingWithSmartContract();

            const accounts = currentAccount;
            const currentAccount = accounts[0]; // Assuming the owner's account is the first one

            // Check if the caller is the owner
            if (currentAccount.toLowerCase() !== ownerAddress.toLowerCase()) {
                console.error('Only the owner can set the SPInstance address.');
                return;
            }

            // Call the setSPInstance function on the contract
            const transaction = await contract.methods.setSPInstance(instanceAddress).send({ from: currentAccount });
            const receipt = await transaction.wait();

            console.log('Transaction hash:', transaction.transactionHash);
            console.log('SPInstance address set successfully!');
            return receipt;

        } catch (error) {
            console.error('Error:', error);
        }
    };

    // Function to set the schema ID
    const setSchemaId = async (schemaId, ownerAddress) => {
        try {
            const contract = await connectingWithSmartContract();

            const accounts = currentAccount;
            const currentAccount = accounts[0]; // Assuming the owner's account is the first one

            // Check if the caller is the owner
            if (currentAccount.toLowerCase() !== ownerAddress.toLowerCase()) {
                console.error('Only the owner can set the schema ID.');
                return;
            }

            // Call the setSchemaId function on the contract
            const transaction = await contract.methods.setSchemaId(schemaId).send({ from: currentAccount });
            const receipt = await transaction.wait();


            console.log('Transaction hash:', transaction.transactionHash);
            console.log('Schema ID set successfully!');
            return receipt;
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <RentToOwnContext.Provider
            value={{
                registerProperty,
                fetchPropertyById,
                getPropertyCount,
                rentProperty,
                approveTenant,
                payRent,
                adjustRent,
                cancelAgreement,
                landlordCancelAgreement,
                checkPaymentDue,
                getTenant,
                getTotalPaid,
                getNumberOfPayments,
                getLastPayment,
               // getAllProperties,
                setSPInstance,
                setSchemaId


            }}>
            {children}
        </RentToOwnContext.Provider>
    );
};









// Usage examples:
// getTenant(0); // Get tenant address for property index 0
// getTotalPaid(0); // Get total paid amount for property index 0
// getNumberOfPayments(0); // Get number of payments for property index 0
// getLastPayment(0); // Get last payment timestamp for property index 0
// adjustRent(2000, 0); // Adjust rent to 2000 for property index 0
// cancelAgreement(0); // Cancel agreement for property index 0
// landlordCancelAgreement(0); // Landlord cancels agreement for property index 0
// checkPaymentDue(0); // Check if payment is due for property index 0
// payRent(0, web3.utils.toWei('1', 'ether')); // Pay rent for property index 0 with 1 ether
// setSPInstance('0xSPInstanceAddress', '0xOwnerAddress');
// setSchemaId(123456, '0xOwnerAddress');
// rentProperty(0, 3, false); // Rent property index 0 for 3 years without intention to buy
// approveTenant(0, '0xTenantAddress'); // Approve tenant for property index 0

