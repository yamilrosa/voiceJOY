import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import SelectAssistant from "./components/SelectAssistant";

function App() {
  const [assistant, setAssistant] = useState("Alexa");
  const [command, setCommand] = useState("");

  return (
    <div className="App">
      <Header assistant={assistant} setAssistant={setAssistant} />
      <SelectAssistant assistant={assistant} command={command} setCommand={setCommand} />
    </div>
  );
}

export default App;
