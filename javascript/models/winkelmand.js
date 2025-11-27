export class Winkelmandje {
  constructor() {
    this.items = JSON.parse(localStorage.getItem("winkelmandje")) || [];
  }

  voegToe(product) {
    if (!product) return;
    this.items.push(product);
    this.save();
    this.updateCartCount();
  }

  verwijder(index) {
    this.items.splice(index, 1);
    this.save();
    this.toonMandje();
    this.updateCartCount();
  }

  save() {
    localStorage.setItem("winkelmandje", JSON.stringify(this.items));
  }

  updateCartCount() {
    let count = document.getElementById("cart-count");
    if (count) count.textContent = this.items.length;
  }

  toonMandje() {
    let container = document.getElementById("cart-items");
    if (!container) return;

    if (this.items.length === 0) {
      container.innerHTML = "<p>Je winkelmandje is leeg.</p>";
      return;
    }

    let totaal = 0;
    let html = "";

    this.items.forEach((p, i) => {
      totaal += p.prijs;
      html += `
        <div class="winkelrij">
          <img class="mandjefoto" src="${p.afbeelding}"> 
          <h3> ${p.naam} - €${p.prijs.toFixed(2)} </h3>
          <button class="verwijderknop" data-id="${i}">🗑️</button>
        </div>`;
    });

    html += `<p id="totaal"><strong>Totaal: €${totaal.toFixed(2)}</strong></p>`;
    container.innerHTML = html;
  }
}