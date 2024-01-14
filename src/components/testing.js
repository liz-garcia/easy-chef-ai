import { JSDOM } from "jsdom";

const recipeHTML = `<html><head></head><body><div><p></p></div></body></html>`;

// Create a virtual DOM using jsdom
const dom = new JSDOM(recipeHTML);
const tempContainer = dom.window.document.createElement("div");

// Set the HTML content to the recipe HTML string
tempContainer.innerHTML = recipeHTML;

// Extract the innerHTML of the temporary container
const strippedHTML = tempContainer.innerHTML;
console.log(strippedHTML);
