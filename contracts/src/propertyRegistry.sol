//SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract PropertyRegistry {
    uint256 public property_index=0;
    struct Property {
        string name;
        string location;
        uint256 price;
        uint256 carpet_area;
        uint256 bhk;
        bool furnished;
        uint rent;
        string[] amenities;
        string[] images;
        uint256 owner_contact;
        uint256 propertyindex;
        address owner;
        bool owned;    }

    Property[] public properties;

    event propertyAdded(
        string name,
        string location,
        uint256 price,
        uint256 carpet_area,
        uint256 bhk,
        bool furnished,
        uint rent,
        string[] amenities,
        string[] images,
        uint256 owner_contact,
        uint256 propertyindex,
        address indexed owner,
        bool owned

    );

    
    function registerProperty(
        string memory _name,
        string memory _location,
        uint256 _price,
        uint256 _carpet_area,
        uint256 _bhk,
        bool _furnished,
        uint _rent,
        string[] memory _amenities,
        string[] memory _images,
        uint256 _owner_contact

    ) public {
        Property memory newProperty = Property({
            name: _name,
            location: _location,
            price: _price,
            owner: msg.sender,
            carpet_area: _carpet_area,
            bhk: _bhk,
            furnished: _furnished,
            rent: _rent,
            amenities: _amenities,
            images: _images,
            owner_contact: _owner_contact,
            propertyindex: property_index,
            owned: false
        });

        properties.push(newProperty);
        property_index++;

        emit propertyAdded(
        _name,
        _location,
        _price,
        _carpet_area,
        _bhk,
        _furnished,
        _rent,
        _amenities,
        _images,
        _owner_contact,
        property_index-1,
        msg.sender,
        false);
    }

    function getPropertiesCount() public view returns (uint256) {
        return properties.length;

    }

    function getProperty(uint256 _index)
        public
        view
        returns (
            string memory,
            string memory,
            uint256,
            uint256,
            uint256,
            bool,
            uint,
            string[] memory,
            string[] memory,
            uint256,
            address
            
        )
    {
        Property storage property = properties[_index];
        return (property.name, property.location, property.price, property.carpet_area, property.bhk,
         property.furnished, property.rent, property.amenities, property.images, property.owner_contact,
          property.owner);
    }

}
