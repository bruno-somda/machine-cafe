import {data} from "../data.js";
import Header from "./components/Header.js";
import { parseRequestUrl } from "./util.js";
import CafeOKScreen from "./views/CafeOKScreen.js";
import CafePrepaScreen from "./views/CafePrepaScreen.js";
import CafeRejectScreen from "./views/CafeRejectScreen.js";
import CafeScreen from "./views/CafeScreen.js";
import CommandeScreen from "./views/CommandeScreen.js";
import HomeScreen from "./views/HomeScreen.js";
import ResumeScreen from "./views/ResumeScreen.js";
import ValiderCommandeSceen from "./views/ValiderCommandeSceen.js";
const router =async()=>{
    // routes for main container
    const routes={
        '/': HomeScreen,
        '/resume': ResumeScreen,
        '/commande': CommandeScreen,
        '/commande/:id':CafeScreen,
        '/prepa/:id':CafePrepaScreen,
        '/valider': ValiderCommandeSceen,
        '/cafeok':CafeOKScreen,
        '/cafereject/:id':CafeRejectScreen
    }
    //End routes for main container
  
    let parseUrl = parseRequestUrl();
    const request =(parseUrl.ressource? `/${parseUrl.ressource}`:'/')+ (parseUrl.id? `/:id`:'') + (parseUrl.verb?`/${parseUrl.verb}/`:'');
    const screen = routes[request]?routes[request]:""
    
    const header = document.getElementById("header-container");
    header.innerHTML= await Header.render();
    // main container
    const main = document.getElementById("main-container");
    main.innerHTML = await screen.render();
    if(screen.after_render) await screen.after_render();
     // End main container
}
window.addEventListener("load",router);
window.addEventListener("hashchange",router);