import { Route, Routes } from "react-router-dom";
import AdminLogin from "@pages/AdminLogin";
import Upload from "@pages/Upload";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/admin" element={<AdminLogin />} />
        <Route path="/upload" element={<Upload />} />
      </Routes>
    </div>
  );
}

export default App;
