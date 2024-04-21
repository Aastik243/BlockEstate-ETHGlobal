import React, { useEffect } from 'react'
import './FeaturedSpace.css'
import Displaycards from '../Displaycards/Displaycard'
import { useRentToOwnContext } from '../../context/RentToOwnContext'

const FeaturedSpace = () => {
    const { getAllProperties } = useRentToOwnContext()
    return (
        <div className='container container-fluid' >
            <div className="head-text-featurespace d-flex" style={{ "justify-content": "center" }} >
                Featured Space
            </div>
            <div className="properties d-flex">
                {getAllProperties.map((property, _) => {
                    return (
                        <Displaycards key={property.property_index} property={property} />
                    )
                }
                )}



            </div>
        </div>
    )
}

export default FeaturedSpace
