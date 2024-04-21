import React from 'react';
import { useState } from 'react';
import { RentToOwnContext } from '../../context/RentToOwnContext';

const Dashboard = () => {

    const [property, setproperty]=useState([]);

    const {
       fetchPropertyById,
       rentProperty,
       approveTenant,
       adjustRent,
       cancelAgreement,
       landlordCancelAgreement,
       getTenant,
       getTotalPaid,
    } = RentToOwnContext();

    

    const fetchProperty = useCallback(async () => {
		try {
            const propertyindex = window.location.pathname.split("/")[2];
			const company = await fetchPropertyById(propertyindex);
			setproperty(company);

		} catch (err) {
			console.log(err);
		}
	});


    return(
        <>
        <div>
        <h1>Properties Listed :</h1>
        <img ></img>

        </div>
        <div>
        <h1>Properties Rented :</h1>
        </div>


        </>

    )
}