import { sendCommande } from "../api.js";
import { parseRequestUrl } from "../util.js";
import {data} from "../../data.js";

const CafeScreen = {

    after_render:()=>{
        
/************Annuler le choix des types de cafés****** */
        const {id} =  parseRequestUrl();
        document.getElementById("An").addEventListener("click",()=>{
        document
        .getElementById("commande-form")
        .addEventListener("submit",async(e)=>{
          e.preventDefault();
          document.location.hash ="cafereject/"+ id;
        });
        });
        /************Fin Annuler le choix des types de cafés****** */
/************Valider le choix des types de cafés****** */
        document.getElementById("val").addEventListener("click",()=>{
        document
        .getElementById("commande-form")
        .addEventListener("submit",async(e)=>{
          e.preventDefault();
          let dataFilter= {}
         let coffeCommande= { 
            mocha: document.getElementById("mocha").value,
            cafeViennoise: document.getElementById("cafeViennoise").value,
            latteMacchiato:  document.getElementById("latteMacchiato").value,
            cafeFrappe:  document.getElementById("cafeFrappe").value,
            cafeMokaccino:  document.getElementById("cafeMokaccino").value,
            americano: document.getElementById("americano").value,
            chocolatChaud: document.getElementById("chocolatChaud").value
        }
         for(let coffe in coffeCommande){
            if(coffeCommande[coffe]>0){
              dataFilter[coffe]= coffeCommande[coffe];
            }
          }
           // send commande client
         const data = await sendCommande(id,dataFilter);
           //end  send commande client
         
           let h2 = document.createElement("h2");
           h2.innerText = data.Msg;
           let divError = document.getElementById("error");
           divError.appendChild(h2)
        });
/************Fin Valider le choix des types de cafés****** */
            
        });
      },

    render:()=>{
       
        return`<div class="homepage">
                    <div class="cafehead">
                        <img src="./images/americano.jpg" alt="americano" style="width:55px"/>
                        <h2>CAFE BONHEUR</h2>
                    </div>
                    <p>VOTRE MEILLEUR CAFE PAR EXCELLENCE!!!!!</p>
                    <div class="cafeTB">
                        <div> <h4>BONJOUR!!!VEUILLEZ SELECTIONNER VOTRE CHOIX CAFE!!!</h4></div>
                        <div class="Ca">
                                <div id="error">
                                </div>
                                <form id="commande-form" class="Caf">
                                    ${
                                        data.typeCoffe.map(coffe=>(`<div class="input">
                                            <label>${coffe.name} </label>
                                            <input type="number" placeholder="0" class="inputChoice" value="0" name=${coffe.name} id=${coffe.name}>
                                            <img src=${coffe.image} alt=${coffe.name} style="width:45px"/>
                                            <h4>${coffe.cout} f</h4>
                                        </div>`)
                                       )
                                    }
                                    <div class="btnCaF">
                                        <button id="val" type="submit" class="val">Valider</button>
                                        <button id="An" class="An">Annuler</button>
                                    </div>
                                </form>
                        </div>
                    </div>
                </div>`
    }
}
export default CafeScreen;