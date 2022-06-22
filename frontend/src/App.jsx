import { Route, Routes } from "react-router-dom";
import Home from "@pages/Home";
import Navbar from "@components/Navbar";
import Upload from "@pages/Upload";
import Login from "@pages/Login";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
