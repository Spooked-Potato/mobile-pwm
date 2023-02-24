import Button from "./components/Button.js";
import Menu from "./components/Menu.js";
import RangeBar from "./components/RangeBar.js";
import ToggleButton from "./components/ToggleButton.js";

window.onload = () => {
  setupLayout();
};

const setupLayout = () => {
  const volumeBar = new RangeBar("#volume");
  volumeBar.onChange((value) => {
    console.log("volume changed", value);
  });

  const previousButton = new Button("#previous-button");
  previousButton.onClick((value) => {
    console.log("previous button", value);
  });

  const nextButton = new Button("#next-button");
  nextButton.onClick((value) => {
    console.log("next button", value);
  });

  const button = new ToggleButton("#action-button");
  button.onClick((value) => {
    console.log("toggle button", value);
    button.toggle(1);
  });

  const infoButton = new ToggleButton("#info-button");
  infoButton.onClick((value) => {
    console.log("info button", value);
    infoButton.toggle();
  });

  const menu = new Menu("#menu");
};
