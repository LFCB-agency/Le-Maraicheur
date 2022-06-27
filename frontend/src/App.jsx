import { Route, Routes, Navigate } from "react-router-dom";
import { useState } from "react";
import AdminLogin from "@pages/AdminLogin";
import Upload from "@pages/Upload";

import "./App.css";

function App() {
  const [adm, setAdm] = useState({ email: "", id: null });

  return (
    <div className="App">
      <Routes>
        <Route exact path="/admin" element={<AdminLogin setAdm={setAdm} />} />
        <Route path="/upload" element={<Upload />} />
        {adm.email && adm.email === "antoine@debray.com" && (
          <Route path="/admin/log" element={<Upload />} />
        )}
        <Route path="*" element={<Navigate to="/upload" />} />
      </Routes>
    </div>
  );
}

export default App;
