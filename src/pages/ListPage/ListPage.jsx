import React from 'react';
import {  useState } from "react";
import {  ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import "./ListPage.css";

const ListPage = () => {

  const [name,setname]=useState("");
  const [location,setlocation]=useState("");
  const [price,setprice]=useState("");
  const [bhk,setbhk]=useState("");
  const [rent,setrent]=useState("");
  const [carpet,setcarpet]=useState("");
  const [contact,setcontact]=useState("");
  const [description,setdescription]=useState("");
  const [furnished,setfurnished]=useState(false);
  var [propertyindex,setpropertyindex]=useState(0);


  
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name === "") {
      toast.error("Name Is Required");
    } else if (location === "") {
      toast.error("Location Is Required");
    } else if (price === "") {
      toast.error("Price is Required");
    } else if (bhk === "") {
      toast.error("Number of bedrooms is Required");
    } else if (rent === "") {
      toast.error("Rent is Required");
    } else if (carpet === "") {
      toast.error("Carpet-area is Required");
    } else if (contact === "") {
      toast.error("Contact Number is Required");
    } else if (description.length < 10) {
      toast.error("Description of property must be more than 10 characters");
    }
    
    else{

      setpropertyindex(++propertyindex);
      toast.success("Your property has been registered");

  }
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

  

  
  

  return (
    <>
    <ToastContainer
  position="top-right"
  autoClose={3000}
  hideProgressBar={false}
  newestOnTop={false}
  closeOnClick
  rtl={false}
  pauseOnFocusLoss
  draggable
  pauseOnHover
/>

   
    <div className="wrapper">


      <h3>Sell / Rent Your Property for Free</h3>
      <p>Fill all your property details to list your property to the world of blockchain.</p>


      <form onSubmit={handleSubmit}>
      <div className="form1">
        
        <div className="leftform">
        <div><label>Name of Property :</label>
          <input
            value={name}
            onChange={(e)=>setname(e.target.value)} placeholder="Name of property" type="text"/>
        </div>
        <div><label>Location of Property :</label>
          <input value={location}
            onChange={(e)=>setlocation(e.target.value)} placeholder="Location of property" type="text" />
        </div>
        <div><label>Price of Property(in USD) :</label>
          <input value={price}
            onChange={(e)=>setprice(e.target.value)} placeholder="Price of property" type="number" />
        </div>
        <div><label>Carpet_area(in sq.ft) :</label>
          <input value={carpet}
            onChange={(e)=>setcarpet(e.target.value)} placeholder="Carpet-area of property" type="number" />
        </div>
        
        <div><label>Number of Bedrooms :</label>
          <input value={bhk}
            onChange={(e)=>setbhk(e.target.value)} placeholder="Number of bedrooms" type="number" />
        </div>
        
        
        <div><label>Furnished(No by defualt) : </label>
          <input 
          value={furnished}
          onClick={(e)=>setfurnished(true)}
          type="checkbox" /><span>Yes</span>
        


        </div>

        </div>
        <div className="rightform"> 
        <div><label>Rent Price(in USD) :</label>
          <input value={rent}
            onChange={(e)=>setrent(e.target.value)} placeholder="Rent of property(in USD)" type="number" />
        </div>
        
        <div><label>Contact Number :</label>
          <input value={contact}
            onChange={(e)=>setcontact(e.target.value)} placeholder="Write your contact number" type="number" />
        </div>
        <div><label>Description of Property :</label>
          <textarea rows="4" value={description}
            onChange={(e)=>setdescription(e.target.value)} placeholder="Describe your property(in detail)" type="text" />
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
          <input
            className="form-control"
            type="file"
            onChange={handleImg}
            name="file"
            id="formFile"
          />
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
          >
            Submit
          </button>
          </div>
          </div>
          
      </form>

    </div>
    </>
  );
  

};

export default ListPage;