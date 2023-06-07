import logo from "./logo.svg";
import "./App.css";
import Todos from "./Todos";
import { Route, Routes } from "react-router-dom";
import User from "./User";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Todos />} />
        <Route path="/user/:id" element={<User />} />
      </Routes>
    </div>
  );
}

export default App;
