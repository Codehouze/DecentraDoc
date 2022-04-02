import "./App.css";
import { io } from "socket.io-client";
import React, { useEffect } from "react";
import { MyEditor } from "./components/MyEditor";

// Custom overrides for "code" style.
let socket = null;

const setupSocketIo = () => {
  const webSocketUrl = "https://decentradocbackend.herokuapp.com/";
  socket = io(webSocketUrl);
};
function App() {
  useEffect(() => setupSocketIo(), []);

  return (
    <div className="App">
      <MyEditor />
    </div>
  );
}

export default App;
