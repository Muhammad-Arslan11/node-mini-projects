import { useState } from 'react';
import Navbar from './components/Navbar';
import Tablelist from './components/Tablelist';
import clientsData from '../clientsData';
// import ModelForm from './components/ModelForm';


function App() {
  // console.log(clientsData);
 const [client, setClient] = useState(clientsData);
 const [isOpen, setIsOpen] = useState(false);
 const [modelMode, setModelMode] = useState("add");


  const handleOpen = (mode)=>{
    setModelMode(mode);
    setIsOpen(true);
  }
 const handleSubmit = ()=>{
  if(modelMode === "add"){
    console.log("model mode add");
  }
  else{
    console.log("model mode add");
  }
 }

  return (
    <>
     <Navbar onOpen ={()=>setIsOpen(true)} isOpen={isOpen} onClose={()=>setIsOpen(false)}/>
     <Tablelist client={client} isOpen={isOpen}  handleOpen={handleOpen}/>
    </>
  )
}

export default App
