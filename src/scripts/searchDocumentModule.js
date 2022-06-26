import { createNewElement } from "..";

const body = document.querySelector("body");
const searchBody = document.querySelector(".mainSearchText");
let searchString = "";

//  makes either an ok or cancel button
function createButton(id) {
  const btn = createNewElement("button");
  btn.id = `module${id}`;
  btn.textContent = `${id}`;
  return btn;
}

//  makes ok button and adds its listener
function okButton() {
  const btn = createButton("Ok");
  btn.addEventListener("click", clickedOk);
  return btn;
}

// event listener for clicking ok button
function clickedCancel() {
  const moduleBackground = document.querySelector(".moduleBackground");
  body.removeChild(moduleBackground);
}

// event listener for clicking ok button
function clickedOk() {
  searchString = "";
  const searchTextArea = document.getElementById("search").value;
  searchString = searchTextArea;
  searchBody.textContent = searchString;
  // ***********************************more here?***************************
  clickedCancel();
}

//  makes cancel button and adds its listener
function cancelButton() {
  const btn = createButton("Cancel");
  btn.addEventListener("click", clickedCancel);
  return btn;
}

//  renders the module to enter keywords.
function renderModuleSearch() {
  const moduleBackground = createNewElement("div", "moduleBackground", "");
  const module = createNewElement(
    "div",
    "module-search",
    `<textarea name="search" id="search" placeholder="paste document to search in here and press OK"></textarea>`
  );
  const buttons = createNewElement("div", "buttons", "");
  buttons.appendChild(okButton());
  buttons.appendChild(cancelButton());
  module.appendChild(buttons);
  moduleBackground.appendChild(module);
  body.appendChild(moduleBackground);
}

export { renderModuleSearch, searchString };
