import { Sampledata } from "./sampleproducten.js";

export class Product {
  constructor(data) {
    this.Id = data.Id;
    this.naam = data.naam;
    this.prijs = data.prijs;
    this.afbeelding = data.afbeelding;
  }

  render(i) {
    let item = document.createElement("div");
      item.className = "product";
      item.innerHTML = `
      <img src="${this.afbeelding}" alt="${this.naam}">
      <h3>${this.naam}</h3>
      <p>€${this.prijs.toFixed(2)}</p>
      <button class="aankoopknop" data-id="${i}">
        Toevoegen aan mandje
      </button>
    `;

    return item;
  }
}

