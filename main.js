import Button from "./components/Button.js";
import Controller from "./components/Controller.js";
import Menu from "./components/Menu.js";
import RangeBar from "./components/RangeBar.js";
import ToggleButton from "./components/ToggleButton.js";

let appData;

window.onload = async () => {
  const req = await fetch("app_data.json");
  appData = await req.json();

  setupLayout();
};

const setupLayout = () => {
  const info = new info("#info", (value) => {
    console.log("info", value);
  });

  const controller = new Controller("#controller", (value) => {
    console.log("controller", value);
  });

  const volumeBar = new RangeBar("#volume", (value) => {
    console.log("volume", value);
  });

  const menu = new Menu("#menu", (value) => {
    console.log("controller", value);
  });

  menu.data = appData;
};
