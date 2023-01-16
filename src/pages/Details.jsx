import React, { useState } from "react";

import DetailsConfig from "../DetailsConfig";
import Preview from "../Preview";
export default function Columns(props) {
  //https://www.pluralsight.com/guides/handling-multiple-inputs-with-single-onchange-handler-react
  console.log('props???', props)

  return (
    <div className="relative z-0 flex flex-1 overflow-hidden">
      <main className="relative z-0 flex-1 overflow-y-auto focus:outline-none xl:order-last">
        <div className="absolute inset-0 py-6 px-4 sm:px-6 lg:px-8 flex h-screen justify-center items-center "></div>
      </main>
      <DetailsConfig
        onChange={props.onChange}
        firstName={props.firstName}
        lastName={props.lastName}
        jobTitle={props.jobTitle}
        department={props.department}
        companyName={props.companyName}
        email={props.email}
        phoneNumber={props.phoneNumber}
        address={props.address}
      />
    </div>
  );
}
