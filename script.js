class Product {
  constructor(id, naam, prijs, afbeelding) {
    this.id = id;
    this.naam = naam;
    this.prijs = prijs;
    this.afbeelding = afbeelding;
  }
}



// Winkelmandje class
class Winkelmandje {
  constructor() {
    this.items = JSON.parse(localStorage.getItem("winkelmandje"));
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
    let html = "<ul>";
    this.items.forEach((p, i) => {
      totaal += p.prijs;
      html += `<li>${p.naam} - €${p.prijs.toFixed(2)} <button onclick="winkelmandje.verwijder(${i})">Verwijder</button></li>`;
    });
    html += `</ul><p><strong>Totaal: €${totaal.toFixed(2)}</strong></p>`;
    container.innerHTML = html;
  }
}



// sample data
let producten = [
  new Product(1, "Beta rr 50", 4000, "file:///C:/Users/ArneHermans/OneDrive%20-%20WICO%20vzw/Bureaublad/winkel%20ICT/beta%20rr%2050.webp"),
  new Product(2, "H2R", 60000, "file:///C:/Users/ArneHermans/OneDrive%20-%20WICO%20vzw/Bureaublad/winkel%20ICT/H2R.jpg"),
  new Product(3, "BMW S1K", 25000, "file:///C:/Users/ArneHermans/OneDrive%20-%20WICO%20vzw/Bureaublad/winkel%20ICT/s1krr.jpg")
];



// Winkelmandje
let winkelmandje = new Winkelmandje();
winkelmandje.updateCartCount();



// Productpagina
if (document.getElementById("product-list")) {
  let list = document.getElementById("product-list");
  producten.forEach(p => {
    let item = document.createElement("div");
    item.className = "product";
    item.innerHTML = `
      <img src="${p.afbeelding}" alt="${p.naam}">
      <h3>${p.naam}</h3>
      <p>€${p.prijs.toFixed(2)}</p>
      <button onclick="winkelmandje.voegToe(producten.find(prod => prod.id === ${p.id}))">Toevoegen aan mandje</button>`;
    list.appendChild(item);
  });
}



// Winkelmandje pagina
if (document.getElementById("cart-items")) {
  winkelmandje.toonMandje();
}



// Contactformulier
/*let form = document.getElementById("contact-form");
if  {
    alert("Bedankt voor je bericht! We nemen spoedig contact op.");
  };
*/