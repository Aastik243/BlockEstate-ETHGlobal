import React from 'react';
import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';


import "./ListPage.css";

const ListPage = () => {

  const [name, setname] = useState("");
  const [location, setlocation] = useState("");
  const [price, setprice] = useState(0);
  const [bhk, setbhk] = useState(0);
  const [rent, setrent] = useState(0);
  const [carpet, setcarpet] = useState(0);
  const [contact, setcontact] = useState(0);
  const [description, setdescription] = useState("");
  const [furnished, setfurnished] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "") {
      toast.error("Name Is Required");
    } else if (location === "") {
      toast.error("Location Is Required");
    } else if (price === 0) {
      toast.error("Price is Required");
    } else if (bhk === 0) {
      toast.error("Number of bedrooms is Required");
    } else if (rent === 0) {
      toast.error("Rent is Required");
    } else if (carpet === 0) {
      toast.error("Carpet-area is Required");
    } else if (contact === 0) {
      toast.error("Contact Number is Required");
    } else if (description == "") {
      toast.error("Description of property required");
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
    <div className="wrapper">
      <h1>Post your Property</h1>
      <form>
        <div>Name
          <input
            value={name}
            onChange={(e) => setname(e.target.value)} type="text" />
        </div>
        <div>Location
          <input value={location}
            onChange={(e) => setlocation(e.target.value)} type="text" />
        </div>
        <div>Price
          <input value={price}
            onChange={(e) => setprice(e.target.value)} type="number" />
        </div>
        <div>Carpet_area(in sq.ft)
          <input value={carpet}
            onChange={(e) => setcarpet(e.target.value)} type="number" />
        </div>
        <div>Number of Bedrooms
          <input value={bhk}
            onChange={(e) => setbhk(e.target.value)} type="number" />
        </div>
        <div>Furnished
          <input type="checkbox" /><span>Yes</span>
          <input type="checkbox" checked /><span>No</span>


        </div>
        <div>Rent Price
          <input value={rent}
            onChange={(e) => setrent(e.target.value)} type="number" />
        </div>
        <div>Contact Number
          <input value={contact}
            onChange={(e) => setcontact(e.target.value)} type="number" />
        </div>
        <div>Description of Property
          <input value={description}
            onChange={(e) => setdescription(e.target.value)} type="text" />
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