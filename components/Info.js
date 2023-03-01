import Component from "./Component.js";
import ToggleButton from "./ToggleButton.js";

export default class Info extends Component {
  #infoContainer;
  #infoButton;
  #isOpen = false;
  constructor(elemID, callback) {
    super(elemID, callback);

    this.#infoContainer = this.element.querySelector("#info-container");

    this.#infoButton = new ToggleButton("#info-button", (value) => {
      this.#isOpen ? this.close() : this.open();
      this.callback(this.#isOpen);
    });
  }

  open() {
    if (this.#isOpen) return;
    this.#infoContainer.style.transform = "scaleY(1)";
    this.#infoButton.toggle(1);
    this.#isOpen = true;
  }

  close() {
    if (!this.#isOpen) return;
    this.#infoContainer.style.transform = "scaleY(0)";
    this.#infoButton.toggle(0);
    this.#isOpen = false;
  }

  update(data) {
    this.#infoButton.text = data.name;
    this.#infoButton.color =
      data.type === "error" ? "var(--error-color)" : "var(--primary-color)";
  }
}
