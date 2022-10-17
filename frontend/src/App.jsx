/* eslint-disable prettier/prettier */
/* eslint-disable import/no-unresolved */
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import AdminLogin from "@pages/AdminLogin";
import Accueil from "@pages/Accueil";
import Methode from "@pages/Methode";
import Upload from "@pages/Upload";
import Produit from "@pages/Produit";
import Amap from "@pages/Amap";
import Propos from "@pages/Propos";
import Contact from "@pages/ContactForm";
import AdminHome from "@pages/AdminHome";
import AdminPopup from "@pages/AdminPopup";
import AdminMethode from "@pages/AdminMethode";
import AdminPropos from "@pages/AdminPropos";
import AdminNews from "@pages/AdminNews";
import ResetPassword from "@pages/ResetPassword";
import Error404 from "@pages/Error404";
import "./App.css";
import AdminClient from "@pages/AdminClient";
import AdminProduits from "@pages/AdminProduits";
import axios from "axios";

function App() {
  const [adm, setAdm] = useState({ email: "", id: null });

  const checkConnection = async () => {
    try {
      const data = await axios
        .get(`${import.meta.env.VITE_BACKEND_URL}adm/refreshToken/1`, {
          withCredentials: true,
        })
        .then((result) => result.data);
      return setAdm(data);
    } catch (err) {
      // eslint-disable-next-line
      return alert(err);
    }
  };

  useEffect(() => {
    checkConnection();
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Accueil />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/methode" element={<Methode />} />
        <Route path="/produit" element={<Produit />} />
        <Route path="/amap" element={<Amap />} />
        <Route path="/propos" element={<Propos />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/reset" element={<ResetPassword />} />
        <Route exact path="/admin" element={<AdminLogin setAdm={setAdm} />} />
        {adm.email && (
          <>
            <Route path="/admin/home" element={<AdminHome />} />
            <Route path="/admin/popup" element={<AdminPopup />} />
            <Route path="/admin/methode" element={<AdminMethode />} />
            <Route path="/admin/produits" element={<AdminProduits />} />
            <Route path="/admin/apropos" element={<AdminPropos />} />
            <Route path="/admin/client" element={<AdminClient />} />
            <Route path="/admin/articles" element={<AdminNews />} />
          </>
        )}
        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
  );
}

export default App;
