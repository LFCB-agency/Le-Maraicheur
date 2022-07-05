import { Route, Routes, Navigate } from "react-router-dom";
import Accueil from "@pages/Accueil";
import Methode from "@pages/Methode";
import Upload from "@pages/Upload";
import Produit from "@pages/Produits";
import Propos from "@pages/Propos";
import Contact from "@pages/Contact";
import { useState } from "react";
import AdminLogin from "@pages/AdminLogin";
import AdminHome from "@pages/AdminHome";
import ResetPassword from "@pages/ResetPassword";

import "./App.css";

function App() {
  const [adm, setAdm] = useState({ email: "", id: null });

  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Accueil />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/methode" element={<Methode />} />
        <Route path="/produit" element={<Produit />} />
        <Route path="/propos" element={<Propos />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/reset" element={<ResetPassword />} />
        <Route exact path="/admin" element={<AdminLogin setAdm={setAdm} />} />
        {adm.email && <Route path="/admin/log" element={<AdminHome />} />}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
