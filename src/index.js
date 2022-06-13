import "./style.scss";
import { renderModule } from "./scripts/keywordModule";

const display = document.getElementById("display");
function openModuleAddKeywords() {
  renderModule();
}

function moduleBtnEventListener(Btn) {
  Btn.addEventListener("click", openModuleAddKeywords);
}
function createNewElement(type, addClass, innerHTML) {
  const domElement = document.createElement(type);
  domElement.classList.add(addClass);
  domElement.innerHTML = innerHTML;
  return domElement;
}

function addModuleBtn() {
  const moduleBtn = createNewElement(
    "button",
    "moduleBtn",
    "Click me to add keywords!"
  );
  moduleBtnEventListener(moduleBtn);
  display.appendChild(moduleBtn);
}

export { createNewElement };

addModuleBtn();
