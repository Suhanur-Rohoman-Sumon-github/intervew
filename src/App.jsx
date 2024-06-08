import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import IncrementAndDecrement from "./page/IncrementAndDecrement";
import Palette from "./page/color/Palette";

function App() {
  return (
    <>
      <IncrementAndDecrement />
      <Palette />
    </>
  );
}

export default App;
