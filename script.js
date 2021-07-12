// Author: Jordan Muturi

// Global UI Variables
let canvasDiv;
let canvas;
let textDiv;
let textP;
let textP2;

//Global ML Variables
let soundClassifier;

function setup() {
  canvasDiv = createDiv();
  canvas = createCanvas(640, 480);
  canvas.parent(canvasDiv);
  textDiv = createDiv();
  textP = createP("Model loading, please wait...");
  textP.parent(textDiv);
  textP2 = createP();
  textP2.parent(textDiv);
  //only shows 95%< confident options
  let options = {
    probabiltiyTreshhold: 0.95;
  }
  //load model = "model = ml5.model.featureExtractor"
  soundClassifier = ml5.soundClassifier("SpeechCommands18w", options, modelReady);
}

function draw() {
  let label = textP.html();
  if(label.includes("up")) {
    background(0, 255, 0);
  } else if(label.includes("down")) {
    background(255, 0, 0)
  } else if(label.includes("down"))
}

function modelReady() {
  textP.html("Model Ready. Say any of the commands below");
  textP2.html("<b>Commads</b>: Digits 0-9, up, down, left, right, go, stop, yes, no");
  soundClassifier.classify(gotResults);
}

function gotResults(error, results) {
  if(error) {
    console.error(error);
  } else {
    // Complete the code below
    let label = results[0].label;
    let confidence = round(results[0].confidence, 2); * 100;
    textP.html(label + ": " + confidence + "%");

  }
}
