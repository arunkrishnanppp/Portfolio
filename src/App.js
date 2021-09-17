import React, { useEffect } from "react";
import Portfolio from "./Pages/Portfolio";

function App() {
  useEffect(() => {
    document.addEventListener("contextmenu", (e) => {
      //  e.preventDefault();
    });
  }, []);
  return (
    <div>
      <Portfolio />
    </div>
  );
}

export default App;
