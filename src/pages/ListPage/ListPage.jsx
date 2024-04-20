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
    price : "",
    bhk : "",
    rent : "",
    carpet : "",
    contact :"",
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


      <h3>Sell / Rent Your Property for Free</h3>
      <p>Fill all your property details to list your property to the world of blockchain.</p>


      <form>
      <div className="form1">
        
        <div className="leftform">
        <div><label>Name of Property :</label>
          <input
            value={data.name}
            onChange={handleChange} placeholder="Name of property" type="text" />
        </div>
        <div><label>Location of Property :</label>
          <input value={data.location}
            onChange={handleChange} placeholder="Location of property" type="text" />
        </div>
        <div><label>Price of Property(in USD) :</label>
          <input value={data.price}
            onChange={handleChange} placeholder="Price of property" type="number" />
        </div>
        <div><label>Carpet_area(in sq.ft) :</label>
          <input value={data.carpet}
            onChange={handleChange} placeholder="Carpet-area of property" type="number" />
        </div>
        
        <div><label>Number of Bedrooms :</label>
          <input value={data.bhk}
            onChange={handleChange} placeholder="Number of bedrooms" type="number" />
        </div>
        
        
        <div><label>Furnished : </label>
          <input type="checkbox" /><span>Yes</span>
          <input type="checkbox" defaultChecked/><span>No</span>


        </div>

        </div>
        <div className="rightform"> 
        <div><label>Rent Price(in USD) :</label>
          <input value={data.rent}
            onChange={handleChange} placeholder="Rent of property(in USD)" type="number" />
        </div>
        
        <div><label>Contact Number :</label>
          <input value={data.contact}
            onChange={handleChange} placeholder="Write your contact number" type="number" />
        </div>
        <div><label>Description of Property :</label>
          <textarea rows="4" columns="100" value={data.description}
            onChange={handleChange} placeholder="Describe your property(in detail)" type="text" />
        </div>
        <div className="mb-3">
          <label htmlFor="formFile" className="form-label">
            Upload Photos : 
          </label>
          <input
            className="form-control"
            type="file"
            onChange={handleImg}
            name="file"
            id="formFile"
          />
        </div>
        
        
          <button
            type="submit"
            className="form__submit-btn"
            onClick={handleSubmit}
          >
            Submit
          </button>
          </div>
          </div>
          
      </form>

    </div>
  );

};

export default ListPage;