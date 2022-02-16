import React, { useState } from 'react';


function App() {
  const htmlTitle = document.querySelector("title");
  htmlTitle.innerText = '이렇게 하면 안 되나';
  return (
    <div className="App">
      <h1>HELLO</h1>
    </div>
  );
}

export default App;
