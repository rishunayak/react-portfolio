
import "./Navigator.css"
import {  useState } from 'react'
import Scrollspy from "react-scrollspy"

function Navigator()
{

   

    const [showNavList, setShowNavList] = useState(false)

    const toggleNavList = () => setShowNavList(!showNavList)


    return(<div id="nav">

     <Scrollspy items={["top","about","skills","project","contact"]} currentClassName="active">

      <a href="#top" onClick={toggleNavList} >  <button ></button> </a>  
      <a href="#about" onClick={toggleNavList} >  <button ></button> </a>  
      <a href="#skills" onClick={toggleNavList} >  <button ></button> </a>  
      <a href="#projects" onClick={toggleNavList} >  <button ></button> </a>  
      <a href="#contact" onClick={toggleNavList} >  <button ></button> </a>  
     </Scrollspy>
    </div>)

}

export default Navigator