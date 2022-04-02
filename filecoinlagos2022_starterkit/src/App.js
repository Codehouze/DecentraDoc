import "./App.css";
import React, { useEffect } from "react";
import { MyEditor } from "./components/MyEditor";

// Custom overrides for "code" style.
function App() {
  // useEffect(() => setupSocketIo(), []);

  return (
    <div className="App">
      <MyEditor />
    </div>
  );
}

export default App;
