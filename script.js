const colors = [
    "rgb(0, 0, 255)",
    "rgb(0, 255, 255)",
    "rgb(255, 255, 127)",
    "rgb(0, 255, 0)",
    "rgb(255, 255, 255)",
    "rgb(255, 0, 255)",
    "rgb(255, 255, 0)",
    "rgb(255, 0, 0)",
    "rgb(0, 127, 255)",
  ]

 //class
  class Squares {
    constructor (boxes, colors) {
      // constructor assigns an event listener for each box
      this.addClickHandler(boxes, colors);
    }

   changeNumber (i, boxes) {
      console.log("Runnig function changeNumber");
      for(var k = i; k >= 0; k--) {
        const j = parseInt(boxes[k].innerText) + 1;
        boxes[k].innerText = (j > 9)? 1 : j;
      }
    }

   changeColor (i, boxes, colors) {
      console.log("Runnig function changeColor");
      for(var k = i; k >= 0; k--) {
        let style = window.getComputedStyle(boxes[k]);
        let index = colors.indexOf(style.backgroundColor);
        boxes[k].style.backgroundColor = (index > 7)? colors[0] : colors[index + 1];
        console.log(style.backgroundColor, index);
      }
    }

   addClickHandler (boxes, colors) {
      boxes.forEach((box, i) => {
        box.addEventListener("click", e => {
          this.changeNumber(i, boxes);
          this.changeColor(i, boxes, colors);
        })
      })
    }
  }

  const boxes = document.querySelectorAll(".col");
  const squares = new Squares(boxes, colors);

 //  boxes with fixed values
  boxes.forEach((el, i) => {
    el.innerText = i + 1;
    el.style.backgroundColor = colors[i];
  });