import React, {useState} from "react";
import Form from "./Form";
import Container from "./Container"
export default function Columns() {
  //https://www.pluralsight.com/guides/handling-multiple-inputs-with-single-onchange-handler-react
  const [details, setDetails] = useState({
    firstName: '',
    lastName: '',
    jobTitle:'',
    department:'',
    companyName:'',
    email:'',
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
        <div className="absolute inset-0 py-6 px-4 sm:px-6 lg:px-8">
        <Container 
          firstName={details.firstName}
          lastName={details.lastName}
          jobTitle={details.jobTitle}
          department={details.department}
          companyName={details.companyName}
          email={details.email}
        />

          <div className="h-full rounded-lg border-2 border-dashed border-gray-200" />
        </div>
        {/* End main area */}
      </main>
      <aside className="relative hidden w-96 flex-shrink-0 overflow-y-auto border-r border-gray-200 xl:order-first xl:flex xl:flex-col">
        {/* Start secondary column (hidden on smaller screens) */}
        <div className="absolute inset-0 py-6 px-4 sm:px-6 lg:px-8">
          <Form 
            onChange={handleChange}
          />
          <div className="h-full rounded-lg border-2 border-dashed border-gray-200" />
        </div>
        {/* End secondary column */}
      </aside>
    </div>
  );
}
