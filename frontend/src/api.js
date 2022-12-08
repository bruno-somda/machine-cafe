import {data} from "../data.js"
import { setContainerCommande, setData } from "./storage.js";

export const sendCommande = async(id,coffeCommandes)=>{
 
   
  let water=0,milk=0,coffe=0,chocolate=0,cout=0,sucre=0,reste;
  let comandes= Object.keys(coffeCommandes)

  let typeCafes = comandes.map(d=> {return {cafe:data.typeCoffe.filter(x=>x.name===d)[0],qty:Number(coffeCommandes[d])}});

  typeCafes.map((quantity)=>{
            water += quantity.cafe.water?(quantity.cafe.water*quantity.qty):0;
            milk +=quantity.cafe.milk?(quantity.cafe.milk*quantity.qty):0;
            coffe += quantity.cafe.coffe?(quantity.cafe.coffe*quantity.qty):0;
            chocolate += quantity.cafe.chocolate?(quantity.cafe.chocolate*quantity.qty):0;
            sucre += quantity.cafe.sucre?(quantity.cafe.sucre*quantity.qty):0;
            cout += quantity.cafe.cout* quantity.qty;});

  if(data.water>=water || data.milk>=milk || data.sucre>=sucre|| data.chocolate>=chocolate||data.coffe>=coffe){
      if(id>=cout){
        data.water = data.water - water;
        data.milk = data.milk - milk;
        data.sucre = data.sucre - sucre;
        data.chocolate = data.chocolate - chocolate;
        data.coffe = data.coffe - coffe;
        data.coutTotal += cout;
        reste =id -cout;
        data.typeCoffe= data.typeCoffe.map(item=>{
         for(let i= 0; i<comandes.length;i++){
           if(item.name===comandes[i]){
             item.nombreCoffe += Number(coffeCommandes[comandes[i]])
             }
         }
         return item;
        
        });
        setData(data);
       }else{
       // document.location.hash=`commande`;
        return {Msg:"Votre solde est Inferieur a votre commandes"};
       }
    }else{
      document.location.hash=`resume`;
      return {Msg:"Insuffisance d'Ingredients"};
  }
  let nombre = comandes.length;
  setContainerCommande({reste,cout,nombre});
  document.location.hash=`prepa/${comandes.length}`;
  }
  