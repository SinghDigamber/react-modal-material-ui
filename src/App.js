import React from 'react';
import './App.css';
import SimpleModal from "./components/simple-modal.component";
import AnimatedModal from "./components/animated-modal.component";

function App() {
  return (
    <div className="App">
      <SimpleModal /> <br />
      <AnimatedModal />
    </div>
  );
}

export default App;
