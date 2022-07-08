/* eslint-disable prettier/prettier */
/* eslint-disable import/no-unresolved */
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import AdminLogin from "@pages/AdminLogin";
import Accueil from "@pages/Accueil";
import Methode from "@pages/Methode";
import Upload from "@pages/Upload";
import Produit from "@pages/Produits";
import Propos from "@pages/Propos";
import Preorder from "@pages/Preorder";
import Contact from "@pages/Contact";
import AdminHome from "@pages/AdminHome";
import AdminPopup from "@pages/AdminPopup";
import ResetPassword from "@pages/ResetPassword";
import Error404 from "@pages/Error404";
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
        <Route path="/preorder" element={<Preorder />} />
        <Route path="/reset" element={<ResetPassword />} />
        <Route exact path="/admin" element={<AdminLogin setAdm={setAdm} />} />
        {adm.email && (
          <div>
            <Route path="/admin/log" element={<AdminHome />} />
          </div>
        )}
        <Route path="/admin/popup" element={<AdminPopup />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
  );
}

export default App;
