import { createNewElement } from "..";
import { theCompanyName } from "./keywordModule";
import { allKeywords } from "./keywordModule";
import { metaDescriptionString } from "./metaDescription";
import { searchString } from "./searchDocumentModule";

//  function to copy array and be able to alter the second array without altering the first.
function copy(aObject) {
  let bObject = Array.isArray(aObject) ? [] : {};
  let value;
  for (const key in aObject) {
    value = aObject[key];
    bObject[key] = typeof value === "object" ? copy(value) : value;
  }
  return bObject;
}

// if any keywords contain the same phrase as another keyword this function will subtract the extrta matches out.
function removeDuplicates(array) {
  let returnedArray = copy(array);
  let innerArrayIndex = 0;
  array.forEach((innerArray) => {
    if (innerArray === null) {
      return;
    }
    for (let i = 0; i < array.length; i++) {
      if (array[i] === null) {
        continue;
      }
      if (innerArray[0] !== array[i][0]) {
        const regEx = new RegExp(`${innerArray[0]}`, "gmi");
        if (regEx.test(array[i][0])) {
          let numToSplice = array[i].length;
          returnedArray[innerArrayIndex].splice(0, numToSplice);
        }
      }
    }
    innerArrayIndex++;
  });
  return returnedArray;
}

// updates keyword classes with proper number of matches
function addNumberOfMatchesToKeywordClasses(array) {
  let arrayIndex = 0;
  allKeywords.forEach((keyword) => {
    if (array[arrayIndex].length === undefined) {
      keyword.matches = 0;
    } else {
      keyword.matches = array[arrayIndex].length;
    }
    arrayIndex++;
  });
}

// searches for matches and returns an array with all the matches
function searchForKeywords() {
  const matches = [];
  allKeywords.forEach((element) => {
    const thisRegex = new RegExp(`${element.keyword}`, `gmi`);
    const newMatches = searchString.match(thisRegex);
    matches.push(newMatches);
  });
  let removedMatches = removeDuplicates(matches);
  addNumberOfMatchesToKeywordClasses(removedMatches);
}

// searches for matches of the company name
function searchForCompanyName() {
  const thisregEx = new RegExp(`${theCompanyName.name}`, "gmi");
  let matches = searchString.match(thisregEx);
  if (matches === null) {
    matches = 0;
  }
  return matches;
}

// word counting function
function wordCounter() {
  return searchString.match(/\b\S+\b/g || []).length;
}

// character counting function for meta description
function characterCounter(string) {
  const array = string.split("");
  return array.length;
}

// renders the results when the button is clicked
function renderResults() {
  searchForKeywords();
  let companyNameMatches = searchForCompanyName();
  const numOfWords = wordCounter();
  const metaCharLength = characterCounter(metaDescriptionString);
  const keywordArray = ["Keyword Used"];
  const keywordResultArray = ["Number of Times Used"];
  allKeywords.forEach((keyword) => {
    keywordArray.push(keyword.name);
    keywordResultArray.push(keyword.matches);
  });
  document.querySelector(".resultsParagraphKeywords").textContent =
    keywordArray.join("\r\n");
  document.querySelector(".resultsParagraphNumbers").textContent =
    keywordResultArray.join("\r\n");
  document.querySelector(
    ".resultsParagraphCompanyName"
  ).textContent = `Company Name: *${theCompanyName.name}* is used ${companyNameMatches.length} times`;
  document.querySelector(
    ".resultsParagraphWordCount"
  ).textContent = `WordCount for the document is: ${numOfWords}`;
  document.querySelector(
    ".resultsParagraphMetaChars"
  ).textContent = `The Meta Description contains: ${metaCharLength} characters.`;
}

// adds the event listener to the result button
function resultListener(btn) {
  btn.addEventListener("click", renderResults);
}

// export function to add the result button to the div it belongs in
function addResultsBtn() {
  const resultBtn = createNewElement(
    "button",
    "resultBtn",
    "Click me for the results!"
  );
  resultListener(resultBtn);
  document.querySelector(".resultBtnDiv").appendChild(resultBtn);
}

export { addResultsBtn };
