import React, { useState, useEffect } from "react";

function SelectAssistant({ assistant, setCommand, command }) {
  const [value, setValue] = useState("");

  useEffect(() => {
    setTimeout(() => {
      const textInput = document.getElementById("text-input");
      textInput.focus();
      textInput.placeholder = "type here...";
    }, 2000);
  }, []);

  function onSubmitHandler() {
    // Init SpeechSynth API
    const synth = window.speechSynthesis;

    const textInput = document.getElementById("text-input");

    setCommand(value);

    // Speak
    const speak = () => {
      // Check if speaking
      if (synth.speaking) {
        console.error("Already speaking...");
        return;
      }
      if (value !== "") {
        // textInput.value = va === "" ? "Please, select an assistant." : textInput.value;

        const speakText = new SpeechSynthesisUtterance(`${assistant}, ${value}`);

        // Speak end
        speakText.onend = e => {
          console.log("Done speaking...");
        };

        // Speak error
        speakText.onerror = e => {
          console.error("Something went wrong");
        };

        // Selected voice
        // const selectedVoice = voiceSelect.selectedOptions[0].getAttribute("data-name");

        //Loop through voices
        // voices.forEach(voice => {
        //   if (voice.name === selectedVoice) {
        //     speakText.voice = voice;
        //   }
        // });

        //checking if iOS
        let iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
        // console.log(iOS);

        // speakText.voice = iOS ? voices[7] : voices[2];

        // Set pitch and rate
        speakText.rate = iOS ? 0.8 : 0.7;
        speakText.pitch = 1;
        // Speak
        synth.speak(speakText);
      }

      textInput.focus();
    };

    speak();
  }

  return (
    <div className="row">
      <div className="col-md-6 mx-auto">
        <form className="mb-5" onSubmit={onSubmitHandler}>
          <div className="form-group">
            <input onChange={e => setValue(e.target.value)} value={value} name="" id="text-input" className="form-control form-control-lg mt-5 input-custom" placeholder="" />
          </div>

          <button className="btn btn-primary btn-lg btn-block">COMMUNICATE</button>
        </form>

        <button className="btn btn-default btn-lg btn-block mb-5 negative-margin" id="favoritesButton" data-toggle="modal" data-target="#favorites">
          <i className="far fa-star"></i> FAVORITES
        </button>
        <a href="#">
          <button className="btn btn-success btn-lg btn-block negative-margin" id="saveButton">
            Save
          </button>
        </a>
      </div>
    </div>
  );
}

export default SelectAssistant;
