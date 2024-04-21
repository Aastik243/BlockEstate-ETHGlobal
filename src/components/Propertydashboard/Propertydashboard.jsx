import React from 'react'
import { useAuth } from '../../context/AuthContext'
import { RentToOwnContext } from '../../context/RentToOwnContext'
const PropertyDashboard = () => {
    const { currentAccount } = useAuth();
    const { getAllProperties, getTenant, payRent, fetchPropertyById, landlordCancelAgreement, getTotalPaid, approveTenant } = RentToOwnContext();
    const HandlePayRent = async (propertyindex) => {
        try {
            const { rent } = await fetchPropertyById(propertyindex);
            const receipt = await payRent(propertyindex, rent);
            console.log("Rent Paid Successfully", receipt)
        } catch (err) {
            console.log(err);
            alert("Error Occurred while paying rent");
        }

    };
    const HandlelandlordCancelAgreement = async (propertyindex) => {
        if (!window.confirm('Are you sure you want to cancel the agreement')) return;
        try {
            const receipt = await landlordCancelAgreement(propertyindex);
            console.log(receipt);
        } catch (err) {
            console.log("error cancelling")
        }
    }
    const HandleCancelAgreement = async (propertyindex) => {
        try {
            const receipt = await cancelAgreement(propertyindex);
            console.log(receipt);
        } catch (err) {
            console.log(err);
        }
    }
    const HandleApproveTenant = async (propertyindex) => {
        try {
            const receipt = await approveTenant(propertyindex, getTenant(propertyindex));
            console.log(receipt);
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <>

            {(currentAccount && getAllProperties) ? getAllProperties.map((property, _) => {
                if (property.owner === currentAccount) {
                    return (
                        <>
                            <h1>Listed Properties</h1>
                            <div key={_} className='d-flex'>
                                <div className="propertyimage">
                                    <img src={property.image[0]} alt="" />
                                </div>
                                <div className="property_name">
                                    {property.name}
                                </div>
                            </div>
                        </>

                    )
                }
            }) : null}


            {(currentAccount && getAllProperties) ? getAllProperties.map((property, _) => {
                if ((property.owner === currentAccount || property.owned === true)) {
                    return (<>
                        <h1>Rented Properties</h1>
                        <div key={_} className='d-flex'>
                            <div className="propertyimage">
                                <img src={property.image[0]} alt="" />
                            </div>
                            <div className="property_name">
                                {property.name}
                            </div>
                            <div className="cancel-agreement">
                                <button className="btn btn-danger" onClick={HandlelandlordCancelAgreement(property.propertyindex)}>Cancel Aggrement</button>
                            </div>
                            <div className="approve-tenant">
                                <button className="btn btn-primary" onClick={HandleApproveTenant(property.propertyindex)}>Approve Tenant</button>
                            </div>
                        </div>
                    </>

                    )
                }
            }) : null}

            {(currenAccount && getAllProperties) ? getAllProperties.map((property, _) => {
                if (property.owned === true || getTenant(property.propertyindex) === currentAccount) {
                    return (
                        <>
                            <h1>Your Properties</h1>
                            <div key={_} className='d-flex'>
                                <div className="propertyimage">
                                    <img src={property.image[0]} alt="" />
                                </div>
                                <div className="property_name">
                                    {property.name}
                                </div>
                                <div className="pay-rent">
                                    <button className="btn btn-primary pay-rent-button" onClick={HandlePayRent(property.propertyindex)}> Pay rent </button>
                                </div>
                                <div className="cancel-tenant-agreement">
                                    <button className='btn btn-danger' onClick={HandleCancelAgreement(property.propertyindex)}> Cance Agreement </button>
                                </div>
                                <div className="totalpaid">
                                    Total Paid: {getTotalPaid(property.propertyindex)}
                                </div>
                                <div className="getattestation">
                                    <button className="btn btn-primary" onClick={HandleAttestation()}>Get Attestation</button>
                                </div>

                            </div>
                        </>
                    )
                }
            }) : null}
        </>
    )
}

export default PropertyDashboard
