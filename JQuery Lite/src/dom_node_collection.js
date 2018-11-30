class DOMNodeCollection {
  constructor(array){
    this.elements = array;
  }

  html(...restArgs) {
    if (restArgs.length === 0) {
      return this.elements[0].innerHTML;
    } else if (restArgs.length === 1) {
      const newHtml = restArgs[0];
      for (let i = 0; i < this.elements.length; i++) {
        this.elements[i].innerHTML = newHtml;
      }
      return this;
    }
  }

  empty() {
    for (let i = 0; i < this.elements.length; i++) {
      this.elements[i].innerHTML = "";
    }
  }

  append(args) {
    if (this.elements.length === 0) return;

    if (args instanceof HTMLElement){

    } else if (typeof args === "string") {
      this.elements.forEach( (node) => {
        node.innerHTML += args;
      });
    } else if (args instanceof DOMNodeCollection) {
      this.elements.forEach( (node) => {
        args.forEach( (arg) => {
          node.appendChild(arg);
        });
      });
    }
  }

}

module.exports = DOMNodeCollection;
