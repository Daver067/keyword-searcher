import { createNewElement } from "..";

const body = document.querySelector("body");
const metaBody = document.querySelector(".metaDescriptionText");
let metaDescriptionString;

//  makes either an ok or cancel button
function createButton(id) {
  const btn = createNewElement("button");
  btn.id = `module${id}`;
  btn.textContent = `${id}`;
  return btn;
}

// event listener for clicking ok button
function clickedCancel() {
  const moduleBackground = document.querySelector(".moduleBackground");
  body.removeChild(moduleBackground);
}

// event listener for clicking ok button
function clickedOk() {
  metaDescriptionString = "";
  metaDescriptionString = document.getElementById("meta").value;
  metaBody.textContent = metaDescriptionString;

  clickedCancel();
}

//  makes cancel button and adds its listener
function cancelButton() {
  const btn = createButton("Cancel");
  btn.addEventListener("click", clickedCancel);
  return btn;
}

//  makes ok button and adds its listener
function okButton() {
  const btn = createButton("Ok");
  btn.addEventListener("click", clickedOk);
  return btn;
}

//  renders the module to enter keywords.
function renderModuleMetaDescription() {
  const moduleBackground = createNewElement("div", "moduleBackground", "");
  const module = createNewElement(
    "div",
    "module-meta",
    `<textarea name="meta" id="meta" placeholder="paste Meta Description here and press OK"></textarea>`
  );
  const buttons = createNewElement("div", "buttons", "");
  buttons.appendChild(okButton());
  buttons.appendChild(cancelButton());
  module.appendChild(buttons);
  moduleBackground.appendChild(module);
  body.appendChild(moduleBackground);
}

export { renderModuleMetaDescription, metaDescriptionString };
