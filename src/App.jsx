import React, {useState} from "react";
import Sidebar from "./Sidebar";
import Details from "./pages/Details";
import Templates from './pages/Templates'
import NotFound from './pages/NotFound'
import Preview from "./Preview";

import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  const [details, setDetails] = useState({
    firstName: "",
    lastName: "",
    jobTitle: "",
    department: "",
    companyName: "",
    email: "",
    phoneNumber: "",
    address: "",
  });  
  function handleChange(event) {
    const value = event.target.value;
    setDetails({
      ...details,
      [event.target.name]: value,
    });
  }
  return (
    <>
      <div className="flex min-h-screen">
        <Sidebar />
        <BrowserRouter>
          
          <Routes>
            <Route path='/' element={<Details onChange={handleChange}/>} />
            <Route path='/Templates' element={<Templates />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
          
          <div className="relative z-0 flex flex-1 overflow-hidden flex h-screen justify-center items-center ">
          <main className="relative z-0 flex-1 overflow-y-auto focus:outline-none xl:order-last">

          <Preview
            firstName={details.firstName}
            lastName={details.lastName}
            jobTitle={details.jobTitle}
            department={details.department}
            companyName={details.companyName}
            email={details.email}
            phoneNumber={details.phoneNumber}
            address={details.address}
          />

                </main>
          </div>
          
        </BrowserRouter>
      </div>
    </>
  );
}
