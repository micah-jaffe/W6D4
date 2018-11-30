const DOMNodeCollection = require("./dom_node_collection.js");

document.addEventListener("DOMContentLoaded", function() {
  test();
  window.$l = $l;
});

function $l(selector) {
  if (typeof selector === "string") {
    let collection = document.querySelectorAll(selector);
    return new DOMNodeCollection(Array.from(collection));
  } else if (selector instanceof HTMLElement) {
    return new DOMNodeCollection([selector]);
  }
}

function test() {
  const testDiv = document.getElementById("test1");
  console.log(testDiv);
  testDiv.innerText = "WE'RE INSIDE THE DIV";
}
