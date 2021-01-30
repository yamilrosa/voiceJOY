// Init SpeechSynth API
const synth = window.speechSynthesis;

// DOM Elements
const textForm = document.querySelector("form");
const textInput = document.querySelector("#text-input");
const voiceSelect = document.querySelector("#voice-select");
const rate = document.querySelector("#rate");
const rateValue = document.querySelector("#rate-value");
const pitch = document.querySelector("#pitch");
const pitchValue = document.querySelector("#pitch-value");
const body = document.querySelector("body");

//toggle button
const toggleText = document.querySelector("#toggle-text");
const footer = document.querySelector("footer");
const toggleMode = document.querySelector("#toggle-mode");

let darkMode = true;

//DOM ELEMENTS
const mainImage = document.getElementById("mainImage");

//choose Buttons elements
const buttonAlexa = document.getElementById("buttonAlexa");
const buttonGoogle = document.getElementById("buttonGoogle");
const buttonSiri = document.getElementById("buttonSiri");

//save button
const saveButton = document.getElementById("saveButton");
const faveModal = document.getElementById("faveModal");
const favButton = document.querySelectorAll(".favButton");
const favoritesButton = document.getElementById("favoritesButton");
//virtual assitant variable

let va = "Alexa,";

//VA toggle button event listeners
buttonAlexa.addEventListener("click", () => {
  //  mainImage.src="./assets/img/Alexa_main-01.png"
  va = "Alexa,";
  textInput.value = "";
});

buttonGoogle.addEventListener("click", () => {
  //  mainImage.src="./assets/img/Google_main-01-01.png"
  va = "Hey, Google,";
  textInput.value = "";
});
buttonSiri.addEventListener("click", () => {
  //  mainImage.src="./assets/img/Siri_main-01.png"
  va = "Siri,";
  textInput.value = "";
});

//text input fade in effect
setTimeout(() => {
  textInput.focus();
  textInput.placeholder = "type here...";
}, 2000);

// textInput.focus();

//Browser identifier
// Firefox 1.0+
var isFirefox = typeof InstallTrigger !== "undefined";

// Chrome 1+
var isChrome = !!window.chrome && !!window.chrome.webstore;

// Init voices array
let voices = [];

const getVoices = () => {
  voices = synth.getVoices();

  // Loop through voices and create an option for each one
  voices.forEach(voice => {
    // Create option element
    const option = document.createElement("option");
    // Fill option with voice and language
    option.textContent = voice.name + "(" + voice.lang + ")";

    // Set needed option attributes
    option.setAttribute("data-lang", voice.lang);
    option.setAttribute("data-name", voice.name);
    voiceSelect.appendChild(option);
  });
};

//Line 35, 36 causes voice list duplication
getVoices();
if (synth.onvoiceschanged !== undefined) {
  synth.onvoiceschanged = getVoices;
}

//Fix for duplication, run code depending on the browser
if (isFirefox) {
  getVoices();
}
if (isChrome) {
  if (synth.onvoiceschanged !== undefined) {
    synth.onvoiceschanged = getVoices;
  }
}

// Speak
const speak = () => {
  // Check if speaking
  if (synth.speaking) {
    console.error("Already speaking...");
    return;
  }
  if (textInput.value !== "") {
    // Add background animation
    // if(darkMode){
    // body.style.background = '#141414 url(./assets/img/wave.gif)';
    // body.style.backgroundRepeat = 'repeat-x';
    // body.style.backgroundSize = '100% 100%';
    // }

    // Get speak text
    // const speakText = event.target.id ? new SpeechSynthesisUtterance(`Alexa, ${event.target.id.innerText}`): new SpeechSynthesisUtterance(`Alexa, ${textInput.value}`) ;
    textInput.value = va === "" ? "Please, select an assistant." : textInput.value;

    const speakText = new SpeechSynthesisUtterance(`${va}, ${textInput.value}`);

    // Speak end
    speakText.onend = e => {
      console.log("Done speaking...");
      // if (darkMode) {
      //   body.style.background = "#141414";
      // }
    };

    // Speak error
    speakText.onerror = e => {
      console.error("Something went wrong");
    };

    // Selected voice
    const selectedVoice = voiceSelect.selectedOptions[0].getAttribute("data-name");

    //Loop through voices
    voices.forEach(voice => {
      if (voice.name === selectedVoice) {
        speakText.voice = voice;
      }
    });

    //checking if iOS
    let iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    console.log(iOS);

    speakText.voice = iOS ? voices[7] : voices[2];

    // Set pitch and rate
    speakText.rate = iOS ? 0.8 : 0.7;
    speakText.pitch = 1;
    // Speak
    synth.speak(speakText);
  }

  textInput.focus();
};

// EVENT LISTENERS

// Text form submit
textForm.addEventListener("submit", e => {
  e.preventDefault();
  speak();

  // textInput.focus();
});

// Rate value change
rate.addEventListener("change", e => (rateValue.textContent = rate.value));

// Pitch value change
pitch.addEventListener("change", e => (pitchValue.textContent = pitch.value));

// Voice select change
voiceSelect.addEventListener("change", e => speak());

//toggle dark/light mode
toggleText.addEventListener("click", e => {
  if (e.target.value === "true") {
    body.style.backgroundColor = "#eeeeee";
    footer.style.backgroundColor = "#eeeeee";
    toggleMode.innerText = "Light Mode";
    e.target.value = "false";
    darkMode = !darkMode;
  } else {
    e.target.value = "true";
    darkMode = !darkMode;
    body.style.backgroundColor = "#141414";
    footer.style.backgroundColor = "#141414";
    toggleMode.innerText = "Dark Mode";
  }
});

// save button event listener
saveButton.addEventListener("click", e => {
  if (textInput.value != "") {
    faveModal.innerHTML += `<button class="btn btn-primary btn-lg btn-block">${textInput.value}<span class="float-right" ><i class="far fa-trash-alt" id="delete"></i></span></button>`;

    const alertBox = document.getElementById("alertBox");
    alertBox.style.display = "";
    alertBox.innerHTML = `<h4>"${textInput.value}" has been saved to <i class="far fa-star"></i> Favorites.</h4>`;
    setTimeout(() => {
      alertBox.style.display = "none";
    }, 5000);
  }
  textInput.value = "";
});

//favorites button event listener
// favoritesButton.addEventListener('click', e =>{
//   let i= 0;
//   const favArray = favorites.map(item=>{
//     i++;
//     if(item.num){
//       return (
//         // `<button class="btn btn-primary btn-lg btn-block" id="favButton${i}">${item.text}<br/><span id="beKind">(Be kind, even to robots.) <i class="fas fa-robot""></i></span><span class="float-right"><i class="far fa-trash-alt" id="delete"></i></span></button>`)
//         `<button class="btn btn-primary btn-lg btn-block" id="favButton${i}">${item.text}<br/><span id="beKind">(Be kind, even to robots.) <i class="fas fa-robot""></i></span></button>`)
//     }
//    else{
//     return (
//       // `<button class="btn btn-primary btn-lg btn-block" id="favButton${i}">${item.text}<span class="float-right" ><i class="far fa-trash-alt" id="delete"></i></span></button>`
//       `<button class="btn btn-primary btn-lg btn-block" id="favButton${i}">${item.text}</button>`
//       )
//    }

//   })

//   faveModal.innerHTML = favArray.join(" ")
// })

//fav button speak/delete event
faveModal.addEventListener("click", e => {
  let targetInnerText = e.target.parentNode.parentNode.innerText;

  if (e.target.id === "beKind" || e.target.id === "favButton1") {
    textInput.value = "Thank you.";
    speak();
    textInput.value = "";
  } else {
    textInput.value = e.target.innerText;
    speak();
    textInput.value = "";
  }

  if (e.target.id === "delete") {
    e.target.parentNode.parentNode.remove();
  }
});
