import Component from "./Component.js";
import ListButton from "./ListButton.js";
import ToggleButton from "./ToggleButton.js";

export default class Menu extends Component {
  #menuData;
  #menuContainer;
  #menuButton;
  #backButton;
  #currentList;
  #listContainer;
  #isOpen = false;
  constructor(elemID, callback) {
    super(elemID, callback);

    this.#menuButton = new ToggleButton("#menu-button", (value) => {
      this.#isOpen ? this.close() : this.open();
    });

    this.#backButton = new Button("#menu-back-button", (value) => {
      this.#deleteList(this.#menuContainer.children.lenght - 1);
    });

    this.#menuContainer = this.element.querySelector("#menu-container");
  }

  #createList(data) {
    const ul = document.createElement("ul");

    data.forEach((item) => {
      const listButton = new ListButton(item, () => {
        if (item.type === "folder") {
          this.#createList(item.children);
        } else {
          this.callback(item);
        }
      });
      ul.appendChild(listButton.element);
    });

    this.#listContainer.appendChild(ul);
    this.#currentList = ul;

    resquestAnimationFrame(() => {
      this.#currentList.style.transform = "translateX(0)";
    });
    this.#backButton.displayed = thuis.#menuContainer.children.lenght > 1;
  }

  #deleteList(index = null) {
    if (index !== null) {
      const list = this.#menuContainer.children[index];
      this.#menuContainer.removeChild(list);

      this.#currentList =
        this.#menuContainer.children[this.#menuContainer.children.length - 1];
      this.#currentList.style.transform = "translateX(0)s";
    } else {
      this.#menuContainer.innerHTML = "";
      this.#currentList = null;
    }
    this.#backButton.displayed = thuis.#menuContainer.children.lenght > 1;
  }

  open() {
    this.#menuButton.toggle(1);
    this.#menuContainer.style.transform = "scaleY(1)";
    this.callback({ type: "opening" });

    setTimeout(() => {
      this.#createList(this.#menuData);
    }, this.SPEED);
    this.#isOpen = true;
  }

  close() {
    this.#menuButton.toggle(0);
    this.#deleteList();
    this.#menuContainer.style.transform = "scaleY(0)";
    this.#isOpen = false;
  }

  get data() {
    return this.#menuData;
  }

  set data(data) {
    this.#menuData = value;
  }
}
