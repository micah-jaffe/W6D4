$( () => {
  const testDiv = document.getElementById("test");
  console.log(testDiv);
  testDiv.innerText = "WE'RE INSIDE THE DIV";
});

function $l(arg) {}
window.$l = $l;
