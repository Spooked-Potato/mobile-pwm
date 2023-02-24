import Component from "./component.js";

export default class Button extends Component {
  constructor(elemID) {
    super(elemID);
  }

  get onClick() {}
  set onClick(callback) {
    console.log("asdasda");
    this.element.onclick = (e) => {
      callback("button clicked");
    };
  }
}
