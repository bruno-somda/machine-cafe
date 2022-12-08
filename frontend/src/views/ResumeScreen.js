import {data} from "../../data.js";
const ResumeScreen ={
    render:()=>{
        return`<div class="homepage">
        <div class="cafehead">
            <img src="./images/americano.jpg" alt="americano" style="width:55px"/>
            <h2>CAFE BONHEUR</h2>
        </div>
        <p>VOTRE MEILLEUR CAFE PAR EXCELLENCE!!!!!</p>
        <div class="products">
            <h1>RESUME DES DONNEES</h1>
            <div>
                <ul>
                    <li><span class="prodContainer">${data.water}</span> L d'eau</li>
                    <li><span class="prodContainer">${data.sucre}</span> kg de sucre</li>
                    <li><span class="prodContainer">${data.milk}</span> kg de poudre de lait</li>
                    <li><span class="prodContainer">${data.coffe}</span> kg de poudre de café</li>
                    <li><span class="prodContainer">${data.chocolate}</span> kg de poudre de chocolat</li>
                    <li>Total encaisser: <span class="prodContainer">${data.coutTotal}</span> F</li>
                </ul>
                <ul>
                    ${data.typeCoffe.map((coffe)=>{
                        return(`<li>${coffe.name}: <span class="CafeNumber">${coffe.nombreCoffe}</span></li>`)})}
                </ul>
            </div>
        </div>
</div>`
    }
}
export default ResumeScreen;