import React from "react";
import Form2 from './Form2'
export default function DetailsConfig(props) {
    const onChange=props.onChange
    const items = [
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 },
        { id: 5 },
        // More items...
      ]
  return (

    <aside className="relative hidden w-96 flex-shrink-0 overflow-y-auto border-r border-gray-200 xl:order-first xl:flex xl:flex-col">
    {/* Start secondary column (hidden on smaller screens) */}
    <div className="absolute inset-0 py-6 px-4 sm:px-6 lg:px-8">
    <ul role="list" className="space-y-3">
      {items.map((item) => (
        <li key={item.id} className="overflow-hidden rounded-md bg-white px-6 py-4 shadow">
          {/* Your content */}
        </li>
      ))}
    </ul>
      <div  />
    </div>
    {/* End secondary column */}
  </aside>

  );
}
