import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Details from "./pages/Details";
import Templates from "./pages/Templates";
import NotFound from "./pages/NotFound";
import Preview from "./Preview";
import Styles from "./pages/Styles";

import { BrowserRouter, Routes, Route } from "react-router-dom";
export default function App() {
  const [details, setDetails] = useState({
    firstName: "Joshua",
    lastName: "Reyes",
    jobTitle: "Software Developer",
    department: "Product",
    companyName: "Thales",
    email: "reyes.j15@gmail.com",
    phoneNumber: "416-240-9199",
    address: "212-2370 Keele St.",
  });
  function handleChange(event) {
    const value = event.target.value;
    setDetails({
      ...details,
      [event.target.name]: value,
    });
  }

  const [colour, setColour] = useState({
    themeColour: "FF8200",
    textColour: "000000",
    linkColour: "8BB8E1",
  });

  function handleColourChange(event) {
    const value = event.target.value;
    setColour({
      ...colour,
      [event.target.name]: value,
    });
  }
  return (
    <>
      <div className="flex min-h-screen" >
        <BrowserRouter>
          <Sidebar />
          <Routes>
            <Route
              path="/"
              element={
                <Details
                  onChange={handleChange}
                  firstName={details.firstName}
                  lastName={details.lastName}
                  jobTitle={details.jobTitle}
                  department={details.department}
                  companyName={details.companyName}
                  email={details.email}
                  phoneNumber={details.phoneNumber}
                  address={details.address}
                />
              }
            />
            <Route
              path="/Details"
              element={
                <Details
                  onChange={handleChange}
                  firstName={details.firstName}
                  lastName={details.lastName}
                  jobTitle={details.jobTitle}
                  department={details.department}
                  companyName={details.companyName}
                  email={details.email}
                  phoneNumber={details.phoneNumber}
                  address={details.address}
                />
              }
            />
            <Route path="/Templates" element={<Templates />} />
            <Route
              path="/Styles"
              element={<Styles 
                onChange={handleColourChange} 
                themeColour={colour.themeColour}
                textColour={colour.textColour}
                linkColour={colour.linkColour}
              />}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>

          <div className="relative z-0 "                 style ={{
                  backgroundColor: 'white',
                  display: 'flex',
                  // flexDirection: 'column',
                  // justifyContent:'center', 
                  // alignItems:'center',
                  width: "55.7%"
                }}> 
            <main className="relative z-0 flex-1 overflow-y-auto focus:outline-none xl:order-last" style ={{
              backgroundColor: 'white',
              display: 'flex',
              flexDirection: 'column',
              justifyContent:'center', 
              alignItems:'center', 
            }}>
              <Preview
                firstName={details.firstName}
                lastName={details.lastName}
                jobTitle={details.jobTitle}
                department={details.department}
                companyName={details.companyName}
                email={details.email}
                phoneNumber={details.phoneNumber}
                address={details.address}
                themeColour={colour.themeColour}
                textColour={colour.textColour}
                linkColour={colour.linkColour}

              />
            </main>
          </div>
        </BrowserRouter>
      </div>
    </>
  );
}
