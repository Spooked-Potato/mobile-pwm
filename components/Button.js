import Component from "./Component.js";

export default class Button extends Component {
  constructor(elemID, callback) {
    super(elemID, callback);

    if (this.element) this.element.onclick = () => this.callback();
  }

  setElement(element) {
    super.setElement(element);
    this.element.onclick = () => this.callback();
  }

  get Text() {
    return this.element.querySelector("label").innerText;
  }

  set Text(value) {
    this.element.querySelector("label").innerText = value;
  }

  get color() {
    return this.element.querySelector("label").style.color;
  }

  set color(value) {
    this.element.querySelector("label").style.color = value;
  }
}
