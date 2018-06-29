var song;
var button;
var fft;
var w;

function toggle() {
  if (song.isPlaying()) {
    song.pause();
  } else {
    song.play();
  }
}

function preload() {
  song = loadSound("Mississippi Fred McDowell - CC Rider.mp3");
}

function setup() {
  createCanvas(400, 400);
  colorMode(HSB);
  button = createButton('start / stop');
  button.mousePressed(toggle);
  //amp = new p5.Amplitude();
  fft = new p5.FFT(0, 256);
  w = width / 64;
}

function draw() {
  background(0);
  var spectrum = fft.analyze();
  //console.log(spectrum);
  //console.log(spectrum.length);
  for (var i = 0; i < spectrum.length; i++) {
    var amp = spectrum[i];
    var y = map(amp, 0, 256, height, 0);
    //stroke(255);
    noStroke();
    fill(i, 255, 255);
    rect(i*w, y, w - 2, height - y);
  }

}
