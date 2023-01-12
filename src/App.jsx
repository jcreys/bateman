import React, {useState} from 'react';
import Sidebar from './Sidebar'
import ConfigPanel from './ConfigPanel'
import Preview from './Preview'
// import Columns from './Columns'

export default function App() {
  const [showDetails, setOption] = useState(true);
  const [showTemplates, setShowTemplates] = useState(false);
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


  console.log(name);
  return (
    <>
      <div className="flex min-h-screen">
      <Sidebar />
      <div className="relative z-0 flex flex-1 overflow-hidden">
{      
      showDetails ?
      <ConfigPanel
        firstName={details.firstName}
        lastName={details.lastName}
        jobTitle={details.jobTitle}
        department={details.department}
        companyName={details.companyName}
        email={details.email}
        phoneNumber={details.phoneNumber}
        address={details.address}
      />
      : <Templates />
      
  }
      <Preview onChange={handleChange} />
    </div>
      </div>
      
    </>
    
  )
}
