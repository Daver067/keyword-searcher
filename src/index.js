import "./style.scss";
import { renderModule } from "./scripts/keywordModule";
import { renderModuleSearch } from "./scripts/searchDocumentModule";
import { addResultsBtn } from "./scripts/results";
import { renderModuleMetaDescription } from "./scripts/metaDescription";

const display = document.getElementById("display");
const buttonArea = document.querySelector(".commandBtns");

// renders the module to add keywords
function openModuleAddKeywords() {
  renderModule();
}
// renders the module to add search document
function openModuleSearchDocument() {
  renderModuleSearch();
}

// renders the module to add meta description
function openModuleMetaDescription() {
  renderModuleMetaDescription();
}

// adds event listener to open module to add keywords to said button
function moduleBtnEventListener(Btn) {
  Btn.addEventListener("click", openModuleAddKeywords);
}

// adds event listener to open module to add the document to search
function searchDocumentBtnListener(Btn) {
  Btn.addEventListener("click", openModuleSearchDocument);
}
// adds event listener to open module to add meta description
function metaDescriptionBtnListener(Btn) {
  Btn.addEventListener("click", openModuleMetaDescription);
}

// function to easily create new elements with classes and inner HTML
function createNewElement(type, addClass, innerHTML) {
  const domElement = document.createElement(type);
  domElement.classList.add(addClass);
  domElement.innerHTML = innerHTML;
  return domElement;
}

// creates the add module button for keywords
function addModuleBtn() {
  const moduleBtn = createNewElement(
    "button",
    "moduleBtn",
    "Click me to add keywords!"
  );
  moduleBtnEventListener(moduleBtn);
  buttonArea.appendChild(moduleBtn);
}

// creates the add module button for document to search through
function addModuleBtnSearchDocument() {
  const moduleBtn = createNewElement(
    "button",
    "moduleBtn",
    "Click me to add text to search!"
  );
  searchDocumentBtnListener(moduleBtn);
  buttonArea.appendChild(moduleBtn);
}

// creates the add meta description button
function addModuleBtnMetaDescription() {
  const moduleBtn = createNewElement(
    "button",
    "moduleBtn",
    "Click me to add the Meta Description!"
  );
  metaDescriptionBtnListener(moduleBtn);
  buttonArea.appendChild(moduleBtn);
}

export { createNewElement };

addModuleBtn();
addModuleBtnSearchDocument();
addResultsBtn();
addModuleBtnMetaDescription();
