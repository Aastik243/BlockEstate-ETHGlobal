import React from 'react';
import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';


import "./ListPage.css";

const ListPage = () => {

  const propertyindex=0;

  const [data, setdata] = useState({
    property_index : propertyindex,
    name : "",
    location : "",
    price : 0,
    bhk : 0,
    rent : 0,
    carpet : 0,
    contact :0,
    description : "",
    furnished : false
  });
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (data.name === "") {
      toast.error("Name Is Required");
    } else if (data.location === "") {
      toast.error("Location Is Required");
    } else if (data.price === 0) {
      toast.error("Price is Required");
    } else if (data.bhk === 0) {
      toast.error("Number of bedrooms is Required");
    } else if (data.rent === 0) {
      toast.error("Rent is Required");
    } else if (data.carpet === 0) {
      toast.error("Carpet-area is Required");
    } else if (data.contact === 0) {
      toast.error("Contact Number is Required");
    } else if (data.description.length > 10) {
      toast.error("Description of property must be more than 10 characters");
    }

    setdata(prevState => ({
      ...prevState,
      property_index : propertyindex

    }));
    propertyindex++;

    
  }

  // convert img
  const getBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onabort = (error) => reject(error);
      reader.readAsDataURL(file);
    });
  };
  //handle img
  const handleImg = (e) => {
    const file = e.target.files[0];
    getBase64(file).then((base64) => {
      localStorage["img"] = base64;
      console.debug("File Store", base64);
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setdata(prevState => ({
      ...prevState,
      [name]: value

    }))
  };


  return (
    <div className="wrapper">
      <h1>Post your Property</h1>
      <form>
        <div>Name
          <input
            value={data.name}
            onChange={handleChange} type="text" />
        </div>
        <div>Location
          <input value={data.location}
            onChange={handleChange} type="text" />
        </div>
        <div>Price
          <input value={data.price}
            onChange={handleChange} type="number" />
        </div>
        <div>Carpet_area(in sq.ft)
          <input value={data.carpet}
            onChange={handleChange} type="number" />
        </div>
        <div>Number of Bedrooms
          <input value={data.bhk}
            onChange={handleChange} type="number" />
        </div>
        <div>Furnished
          <input type="checkbox" /><span>Yes</span>
          <input type="checkbox" checked /><span>No</span>


        </div>
        <div>Rent Price
          <input value={data.rent}
            onChange={handleChange} type="number" />
        </div>
        <div>Contact Number
          <input value={data.contact}
            onChange={handleChange} type="number" />
        </div>
        <div>Description of Property
          <input value={data.description}
            onChange={handleChange} type="text" />
        </div>
        <div className="mb-3">
          <label htmlFor="formFile" className="form-label">
            Default file input example
          </label>
          <input
            className="form-control"
            type="file"
            onChange={handleImg}
            name="file"
            id="formFile"
          />
        </div>
        <div>
          <button
            type="submit"
            className="form__submit-btn"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </form>

    </div>
  );

};

export default ListPage;