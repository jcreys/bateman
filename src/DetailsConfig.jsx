import React from "react";
import Form2 from './Form2'
export default function DetailsConfig(props) {
    const onChange=props.onChange
  return (

      <aside className="relative hidden w-96 flex-shrink-0 overflow-y-auto border-r border-gray-200 xl:order-first xl:flex xl:flex-col">
        {/* Start secondary column (hidden on smaller screens) */}
        <div className="absolute inset-0 py-6 px-4 sm:px-6 lg:px-8">
          <Form2 
            onChange={onChange} 
            firstName={props.firstName}
            lastName={props.lastName}
            jobTitle={props.jobTitle}
            department={props.department}
            companyName={props.companyName}
            email={props.email}
            phoneNumber={props.phoneNumber}
            address={props.address}
          />
          <div className="h-full rounded-lg border-2 border-dashed border-gray-200" />
        </div>
        {/* End secondary column */}
      </aside>

  );
}
