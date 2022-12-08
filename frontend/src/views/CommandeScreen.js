const CommandeScreen ={
    after_render:()=>{
        
        document.getElementById("An").addEventListener("click",()=>{
            document.getElementById("Ch4f").addEventListener("submit",async(e)=>{
                e.preventDefault();
            const price = document.querySelector('input[name=price ]').value;
               document.location.hash ="cafereject/"+ price;
            });
        });

        document.getElementById("val").addEventListener("click",()=>{
            document.getElementById("Ch4f").addEventListener("submit",async(e)=>{
                e.preventDefault();
                const price = document.querySelector('input[name=price ]').value;
                document.location.hash ="commande/"+ price;
            });
            
        });
    },
    render:()=>{
        return`<div class="homepage">
        <div class="cafehead">
            <img src="./images/americano.jpg" alt="americano" style="width:55px"/>
            <h2>CAFE BONHEUR</h2>
        </div>
        <p>VOTRE MEILLEUR CAFE PAR EXCELLENCE!!!!!</p>
        <div class="commandeTB">
           <div class="cHead">
           </div>
           <div class="Ch4">
                <h4>VEUILLEZ INSERER VOTRE ARGENT!!!!</h4>
                <form id="Ch4f" class="Ch4f">
                    <div class="Ch4fn">
                        <input type="number" placeholder="5000" min="50" name ="price" required max="5000"/>
                    </div>
                    <div class="btnF">
                        <button id="val" class="val" type="submit">Valider</button>
                        <button id="An" class="An">Annuler</button>
                    </div>
                </form>
           </div>
          
            
        </div>
</div>`
    }
}
export default CommandeScreen;