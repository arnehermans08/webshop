import { Winkelmandje } from "./models/winkelmand.js";
import { Product } from "./models/product.js";
import { Sampledata } from "./models/sampleproducten.js";
class Winkel {

  producten = [];

  init() {
    // producten
    this.laadProducten();
    
    this.list = document.getElementById("product-list");
    if (this.list) {
      this.toonAlleProducten();
    }

    // winkelmandje
    this.winkelmandje = new Winkelmandje();
    this.winkelmandje.updateCartCount();

    this.mandje = document.getElementById("cart-items")
    if (this.mandje) {
     this.winkelmandje.toonMandje();

     this.winkelmandjeEventToevoegen()
    }
  }

  laadProducten() {
    let sampledata = new Sampledata()
    for(let i = 0; i < sampledata.producten.length; i++){
      let p = sampledata.producten[i];
      this.producten.push(new Product(p))
    }
  }

  toonAlleProducten() {

    this.producten.forEach((p, i) => {
      let item = p.render(i);
      this.list.appendChild(item);
    });

    this.productEventToevoegen();
  }

  productEventToevoegen() {

    this.list.addEventListener('click', (e) => {
      if(e.target.classList.contains('aankoopknop')){
        let pid = e.target.dataset.id;
        this.winkelmandje.voegToe(this.producten[pid]); 
      }
    });
  }

  winkelmandjeEventToevoegen() {

    this.mandje.addEventListener('click', (e) => {
      if(e.target.classList.contains('verwijderknop')){
        let pid = e.target.dataset.id;
        this.winkelmandje.verwijder(pid); 
      }
    });

  }

}

window.addEventListener('load', () => {
  let app = new Winkel();
  app.init();
})