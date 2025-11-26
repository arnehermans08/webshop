import { Winkelmandje } from "./models/winkelmand.js";
import { toonAlleProducten } from "./models/producten.js";

window.winkelmandje = new Winkelmandje();
winkelmandje.updateCartCount();

toonAlleProducten();

if (document.getElementById("cart-items")) {
  winkelmandje.toonMandje();
}