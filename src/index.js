/**
 * index.js - The main function lives here
 */
import "aframe";

import "./components/video-background";
import "./components/browser";
import "ar.js";

/**
 * main function:
 * initialize the webcam.
 */
function main() {
  var video = document.querySelector("#webcam");

  if (navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({ video: {facingMode: "environment"} })
      .then(function (stream) {
        video.srcObject = stream;
      })
      .catch(function (err0r) {
        console.log("Something went wrong!");
      });
  }
}
