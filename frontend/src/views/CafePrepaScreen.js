import { parseRequestUrl } from "../util.js";

const CafePrepaScreen ={
   
       
       render:()=>{
        
        const {id} =  parseRequestUrl();
        console.log(id);
        return`<div class="homepage">
        <div class="cafehead">
            <img src="./images/americano.jpg" alt="americano" style="width:55px"/>
            <h2>CAFE BONHEUR</h2>
        </div>
        <p>VOTRE MEILLEUR CAFE PAR EXCELLENCE!!!!!</p>
        <div class="commandeTB">
           <div class="cHeadP">
           </div>
           <div class="Ch4">
                <form class="Ch4f" action="#commande/:id">
                    
                    <div class="btnFP">
                        <progress>Valider</progress>
                    </div>
                    <div class="btnP">
                        <button class="val"></button>
                        <button class="An"></button>
                        <button class="An"></button>
                        <button class="An"></button>
                        <button class="An"></button>
                    </div>
                </form>
           </div>
          
            
        </div>
</div>`
    }
}
export default CafePrepaScreen;