let myTitle;
let myButton;
let buttonPush;
let myParagraph;
let myInput;
let myString;
let myNewParagraph;
let mySelect;
let selectVal;
let mySlider;
let sliderVal;
let myHiddenDiv;

function setup() {
  noCanvas();
  myButton = select('#myButton');
  myButton.mousePressed(buttonPressed);

  myTitle = select('#myTitle');

  myInput = select('#myInput');

  myParagraph = select('#myParagraph');

  mySelect = select('#mySelect');
}

function draw() {
  myString = myInput.value();

  if (myString === "Yoo") {
    myTitle.html('hmph.');
    window.location.href = "second.html"

  }
}

function buttonPressed() {
  console.log('pressed');
  myTitle.html('Well?');
  myButton.hide();
  showInput();
}

function showInput() {
  myInput.show();
  myParagraph.show();
}
