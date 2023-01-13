import React from "react";
import StylesConfig from "../StylesConfig";
export default function Styles(props) {


  return (
    <div className="relative z-0 flex flex-1 overflow-hidden">
      <main className="relative z-0 flex-1 overflow-y-auto focus:outline-none xl:order-last">

        <div className="absolute inset-0 py-6 px-4 sm:px-6 lg:px-8 flex h-screen justify-center items-center ">
          {/* <Preview /> */}
        </div>
      </main>
      <StylesConfig onChange={props.onChange}/>
    </div>
  );
}
