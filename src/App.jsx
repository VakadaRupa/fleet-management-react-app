// src/App.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import Admin from "./pages/Admin";

const App = () => {
  return <Admin />;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

export default App;
