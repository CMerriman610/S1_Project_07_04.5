// Hands-On Project 04-5
// A: Christopher Merriman  D: 2.21.18
// F: km.js

var kilometersElement = document.getElementById("kValue");
// Only error was that it was missing a quotation character before the mValue
var milesElement = document.getElementById("mValue");
function convert() {
   var km = milesElement.value * 1.6;
   kilometersElement.innerHTML = km;
}

// add backward compatible event listener to Convert to Km button and clear form
var submitButton = document.getElementById("convertButton");
if (submitButton.addEventListener) {
   submitButton.addEventListener("click", convert, false); 
   window.addEventListener("load", function() {
      document.getElementById('mValue').value = ""; // clear last miles value on reload
      document.getElementById('kValue').innerHTML = ""; // clear previous results on reload 
   }, false);
} else if (submitButton.attachEvent)  {
   submitButton.attachEvent("onclick", convert);
   window.attachEvent("onload", function() {
      document.getElementById('mValue').value = ""; // clear last miles value on reload
      document.getElementById('kValue').innerHTML = ""; // clear previous results on reload 
   });
}
