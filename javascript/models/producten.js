import { Sampledata } from "./sampleproducten.js";

export class Product {
  constructor(data) {
    this.Id = data.Id;
    this.naam = data.naam;
    this.prijs = data.prijs;
    this.afbeelding = data.afbeelding;
  }
}

export function toonAlleProducten() {
  let sample = new Sampledata();
  let producten = sample.producten;

  let list = document.getElementById("product-list");
  if (!list) return;

  producten.forEach(p => {
    let item = document.createElement("div");
    item.className = "product";
    item.innerHTML = `
      <img src="${p.afbeelding}" alt="${p.naam}">
      <h3>${p.naam}</h3>
      <p>€${p.prijs.toFixed(2)}</p>
      <button onclick="window.winkelmandje.voegToe(${JSON.stringify(p)})">
        Toevoegen aan mandje
      </button>
    `;
    list.appendChild(item);
  });
}