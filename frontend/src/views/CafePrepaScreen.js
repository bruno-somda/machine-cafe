import { parseRequestUrl } from "../util.js";

const CafePrepaScreen ={
   
    after_render:()=>{
      
                const {id,ressource} =  parseRequestUrl();
                if(ressource ==="prepa"){
                    setTimeout( ()=>{document.location.hash="valider";}, id*1000);
                    
                }
               
              },
       render:()=>{
        return`<div class="homepage">
        <div class="cafehead">
            <img src="./images/americano.jpg" alt="americano" style="width:55px"/>
            <h2>CAFE BONHEUR</h2>
        </div>
        <p>VOTRE MEILLEUR CAFE PAR EXCELLENCE!!!!!</p>
        <div class="commandeTB">
            <div> <h4>VOTRE CAFE EST EN PREPARATION VEUILLEZ PATIENTER UN INSTANT S'IL VOUS PLAIT!!!</h4></div>
           <div class="cHeadP">
           </div>
           <div class="Ch4">
                <form class="Ch4f" action="#commande/:id">
                    
                    <div class="btnFP">
                        <progress>Valider</progress>
                    </div>
                   
                </form>
           </div>
          
            
        </div>
</div>`
    }
}
export default CafePrepaScreen;