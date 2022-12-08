import { getContainerCommande } from "../storage.js";

const CafeOKScreen ={
    render:()=>{
       
        const container = getContainerCommande();
        if(Object.keys(container).length>0){
            return`<div class="homepage">
            <div class="cafehead">
                <img src="./images/americano.jpg" alt="americano" style="width:55px"/>
                <h2>CAFE BONHEUR</h2>
            </div>
            <p>VOTRE MEILLEUR CAFE PAR EXCELLENCE!!!!!</p>
            <div class="commandeOk">
               <div class="Ch4">
                    <h4>MERCI POUR VOTRE COMMANDE A BIENTOT!!!!</h4>
               </div>
               <div class="CImg">
               </div>
               <div class="CafOk">
                    <a href="/">VOTRE COMMANDE VOUS A COUTE: <span class="prodContainer">${container.cout}</span> F!!!! VOICI VOTRE MONEY : <span class="CafeNumber">${container.reste}</span> F</a>
               </div>
                
            </div>
           
        </div>`
        }
       
    }
}
export default CafeOKScreen;