import Button from "./Button.js";

export default class ListButton extends Button {
  #ListButtonData;
  constructor(data, callback) {
    super(null, callback);
    this.#ListButtonData = data;

    const divElement = document.createElement("div");

    const template = document.querySelector(".list-item");
    const clone = template.content.cloneNode(true);

    clone.querySelector("label").innerText = this.#ListButtonData.name;

    divElement.appendChild(clone);
    this.setElement(divElement.children[0]);

    const iconsContainer = divElement.querySelector(".toggle");
    if (data.type === "folder") {
      iconsContainer.children[0].style.display = "initial";
    }
  }
}
