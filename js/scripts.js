function hideResultsAndError() {
  document.getElementById("error-message").setAttribute("class", "hidden");
  document.getElementById("swings").setAttribute("class", "hidden");
  document.getElementById("coaster").setAttribute("class", "hidden");
  document.getElementById("tower").setAttribute("class", "hidden");
  document.getElementById("sorry").setAttribute("class", "hidden");
}

window.onload = function() {
  document.querySelector("form").onsubmit = function(e) {
    e.preventDefault();
    hideResultsAndError();
    const age = parseInt(document.querySelector("input#age").value);
    const height = parseInt(document.querySelector("input#height").value);

    if (!age && !height) {
      document.getElementById("error-message").removeAttribute("class");
    } else {
    //tower of doom requirements
      if (age >= 12 && height >= 60) {
        document.getElementById("swings").removeAttribute("class");
        document.getElementById("coaster").removeAttribute("class");
        document.getElementById("tower").removeAttribute("class");
      //coaster requirements
      } else if (age >= 12 || height >= 48) { 
        document.getElementById("swings").removeAttribute("class");
        document.getElementById("coaster").removeAttribute("class");
      //swing requirements
      } else if (age >= 6) {
        document.getElementById("swings").removeAttribute("class");
        //catch all else: too short and young
      } else {
        document.getElementById("sorry").removeAttribute("class");
      }
    }
  };
};