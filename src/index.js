import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { AuthContextProvider } from "./context/AuthContext";
const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </React.StrictMode>
);


const app = express();
const port = 3001;

app.use(bodyParser.json());

app.post('/submitFormData', (req, res) => {
  const formData = req.body;

  // Write form data to JSON file
  fs.writeFile('contect/Data.json', JSON.stringify(formData), (err) => {
    if (err) {
      console.error('Error writing to JSON file:', err);
      res.status(500).json({ error: 'Error writing to JSON file' });
    } else {
      console.log('Form data written to formData.json');
      res.json({ message: 'Form data saved successfully' });
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
