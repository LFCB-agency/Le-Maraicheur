import { Route, Routes } from "react-router-dom";

import Navbar from "@components/Navbar";
import Upload from "@pages/Upload";
import Login from "@pages/Login";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/upload" element={<Upload />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
