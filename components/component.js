export default class component {
  #element;
  constructor(elementID) {
    this.#element = document.querySelector(elementID);
  }
}
