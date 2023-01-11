import React from 'react';
import Form from './Form'
import Sidebar from './Sidebar'
import ConfigPanel from './ConfigPanel'

export default function App() {
  return (
    <>
      <div className="flex min-h-screen">
      <Sidebar />
      <ConfigPanel />
      </div>
      
    </>
    
  )
}
