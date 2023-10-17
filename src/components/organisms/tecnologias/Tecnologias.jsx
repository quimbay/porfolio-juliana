
import React from "react";
import MiImagen from "../../../../public/tecnologiasImagen/next.svg"
//import Tecnologias from "../Tecnologias"
import "/Tecnologia.css"



export const Tecnologias = () =>{
  return( 
    <div> 
    <h1>Tecnologias</h1>
      <img src={MiImagen} alt="Mi Imagen"/>
    </div>
  )
}
//export default Tecnologias;