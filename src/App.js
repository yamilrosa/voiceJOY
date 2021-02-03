import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import SelectAssistant from "./components/SelectAssistant";
import Modal from "./components/Modal";

function App() {
  const [assistant, setAssistant] = useState("Alexa");
  const [command, setCommand] = useState("");
  const [modal, setModal] = useState(false);

  return (
    <div className="App">
      <Header assistant={assistant} setAssistant={setAssistant} />
      <SelectAssistant assistant={assistant} command={command} setCommand={setCommand} setModal={setModal} />
      {/* {modal === true ? <Modal /> : ""} */}
      <Modal />
    </div>
  );
}

export default App;
