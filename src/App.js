import { useContext } from "react";
import "./App.css";
import Characters from "./Components/Characters";
import Header from "./Components/Header";
import { contexto } from "./Context/UseContext";

function App() {
  const { darkMode } = useContext(contexto);

  return (
    <div className={`App ${darkMode ? "dark" : "light"} `}>
      <div className="theme">
        <Header />
        <Characters />
      </div>
    </div>
  );
}

export default App;
