
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
//import IconButton from "@mui/material/IconButton";
//import MenuIcon from '@mui/icons-material/Menu';
import "./MenuPorfolio.css"
//import Link from "next/link";
//import { useContext } from "react";
//import { AppContext } from "@/store/CurrentProvider";

export const MenuPorfolio = () => {


 // const {currentPage}= useContext(AppContext);

//const MenuPorfolio = (current) =>{
  //switch(current){
   // case 'Detail':
    //  return 'Detalle del hotel';
    //  case 'Home':
       // return 'Buscar Hotel';
      //  default:
       //   return 'Bienvenidos'





  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className="containerMenu">
        <Toolbar variant="dense" className="contentOptionMenu">
       
            <Typography
              variant="h6"
              color="inherit"
              component="div"
              className="labelMenu"
            >
            Sobre mì
            </Typography>
        
          <Typography
            variant="h6"
            color="inherit"
            component="div"
            className="labelMenu"
          >
           Tecnologias
          </Typography>

          <Typography
              variant="h6"
              color="inherit"
              component="div"
              className="labelMenu"
            >
               Proyectos
            </Typography>
        





        </Toolbar>
      </AppBar>
    </Box>
  );
};
