import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import SelectAssistant from "./components/SelectAssistant";

function App() {
  const [assistant, setAssistant] = useState("");

  return (
    <div className="App">
      <Header assistant={assistant} setAssistant={setAssistant} />
      <SelectAssistant assistant={assistant} />
    </div>
  );
}

export default App;
