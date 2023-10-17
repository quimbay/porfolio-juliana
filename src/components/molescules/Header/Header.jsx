
import { Button } from "@mui/material";
import "./Header.css"

export const Header = () => {
  const numeroWhatsApp = "3005190155"; // Reemplaza con tu número de WhatsApp
  const mensajeWhatsApp = "¡Hola! Estoy interesado en contactarte desde tu portafolio.";

  const enlaceWhatsApp = `https://api.whatsapp.com/send?phone=${numeroWhatsApp}&text=${encodeURIComponent(
    mensajeWhatsApp
  )}`;


  return (

<section className="container">
      <h1 className="name">
        Soy <span>Juliana Quimbay Piñerez</span>
      </h1>
     
      <p className="bienvenida">Bienvenido a mi sitio web</p>


      <section className="button">
      <Button variant="contained" className="button">
        <a href={enlaceWhatsApp} target="_blank" rel="noopener noreferrer">
          Contactame
        </a>
      </Button>


      </section>
      
    </section>

    
  );
};
