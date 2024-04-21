import React, { useState, useEffect } from 'react'
import './FeaturedSpace.css'
import Displaycards from '../Displaycards/Displaycard'
// import { useRentToOwnContext } from '../../context/RentToOwnContext'
import {createClient} from "urql/core";

const FeaturedSpace = () => {
   // const { getAllProperties } = useRentToOwnContext()
   const [allproperties,setallproperties] =useState([]);
   const APIURL = "https://api.studio.thegraph.com/query/72175/blockestate-propertyregistry/version/latest";

   const query = `
        {
            propertyAddeds(first: 6){
              name
              bhk
              location
              carpet_area
              propertyindex
            }
          }
        `;
        const client=createClient({
            url : APIURL
        }); 

    useEffect(()=>{
    const getAllProperties = async () => {
        
       

        const {data} = await client.query(query).toPromise();
                setallproperties(data);
        
        // useEffect(()=>{
        //     const getProperties=async()=>{
        //         const {data}=await client.query(query).toPromise();
        //         setallproperties(data.propertyAddeds);
        //     }
        // })

        
        console.log(data);
        // if (data.propertyAddeds) {
        //     return data.propertyAddeds;
        // } else {
        //     return [];
        // }

    }
    getAllProperties();
},[]);


    console.log(allproperties);
    return (
        <div className='container container-fluid' >
            <div className="head-text-featurespace d-flex" style={{ "justify-content": "center" }} >
                Featured Space
            </div>
            <div className="properties d-flex">
                {/* {getAllProperties.map((property, _) => {
                    return (
                        <Displaycards key={property.property_index} property={property} />
                    )
                }
                )} */}
                



            </div>
        </div>
    )
}

export default FeaturedSpace
