import { parseRequestUrl } from "../util.js";

const CafeRejectScreen ={
    render:()=>{
        const {id} =  parseRequestUrl();
        return`<div class="homepage">
        <div class="cafehead">
            <img src="./images/americano.jpg" alt="americano" style="width:55px"/>
            <h2>CAFE BONHEUR</h2>
        </div>
        <p>VOTRE MEILLEUR CAFE PAR EXCELLENCE!!!!!</p>
        <div class="commandeReject">
           <div class="Ch4b">
                <h4>BIENTOT!!!!</h4>
           </div>
           <div class="vImg">
           </div>
           <div class="CafOk">
                <a href="/"> VOICI VOTRE ARGENT: <span class="CafeNumber">${id}</span> F</a>

           </div>
            
        </div>
</div>`
    }
}
export default CafeRejectScreen;