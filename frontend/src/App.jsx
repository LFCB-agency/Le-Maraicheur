import { Route, Routes } from "react-router-dom";
import Accueil from "@pages/Accueil";
import Methode from "@pages/Methode";
import Navbar from "@components/Navbar";
import Upload from "@pages/Upload";
import Produit from "@pages/Produits";
import Propos from "@pages/Propos";
import Contact from "@pages/Contact";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Accueil />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/methode" element={<Methode />} />
        <Route path="/produit" element={<Produit />} />
        <Route path="/propos" element={<Propos />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
