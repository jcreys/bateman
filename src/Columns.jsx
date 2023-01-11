import React, {useState} from "react";
import Form2 from "./Form2";
import Container3 from "./Container3"
import Preview from "./Preview"
export default function Columns() {
  //https://www.pluralsight.com/guides/handling-multiple-inputs-with-single-onchange-handler-react
  const [details, setDetails] = useState({
    firstName: '',
    lastName: '',
    jobTitle:'',
    department:'',
    companyName:'',
    email:'',
    phoneNumber:'',
    address: '',
  })
  function handleChange(event){
    const value = event.target.value;
    setDetails({
      ...details,
      [event.target.name]: value,
    })
  }
  console.log(name);
  return (
    <div className="relative z-0 flex flex-1 overflow-hidden">
      <main className="relative z-0 flex-1 overflow-y-auto focus:outline-none xl:order-last">
        {/* {name.firstName}
        {name.lastName} */}
        <div className="absolute inset-0 py-6 px-4 sm:px-6 lg:px-8 flex h-screen justify-center items-center ">

        <Container3
          firstName={details.firstName}
          lastName={details.lastName}
          jobTitle={details.jobTitle}
          department={details.department}
          companyName={details.companyName}
          email={details.email}
          phoneNumber={details.phoneNumber}
          address={details.address}


        />
        </div>
        {/* End main area */}
      </main>
      <Preview onChange={handleChange} />
    </div>
  );
}
