import React from 'react';
import Sidebar from './Sidebar'
import ConfigPanel from './ConfigPanel'
import Columns from './Columns'

export default function App() {
  return (
    <>
      <div className="flex min-h-screen">
      <Sidebar />
      <Columns />
      </div>
      
    </>
    
  )
}
