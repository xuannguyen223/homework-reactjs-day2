import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import TryGlasses from "./TryGlasses/TryGlasses";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <TryGlasses />
    </>
  );
}

export default App;
