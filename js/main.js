const textArray = ["Designer", "Developer", "Freelancer", "Photograpjer"];
const typewriter = document.getElementById("typewriter");
let wordIndex = 0;
let letterIndex = 0;

function type() {
  if (letterIndex < textArray[wordIndex].length) {
    typewriter.textContent += textArray[wordIndex].charAt(letterIndex);
    letterIndex++;
    setTimeout(type, 100); 
  } else {
    setTimeout(erase, 1500); 
  }
}

function erase() {
  if (letterIndex > 0) {
    typewriter.textContent = textArray[wordIndex].substring(0, letterIndex - 1);
    letterIndex--;
    setTimeout(erase, 100); 
  } else {
    wordIndex++;
    if (wordIndex >= textArray.length) {
      wordIndex = 0;
    }
    setTimeout(type, 500); 
  }
}
type();