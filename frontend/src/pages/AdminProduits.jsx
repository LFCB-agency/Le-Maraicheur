import LeftSlide from "@components/Leftslide";
import ProduitsEditor from "@components/ProduitsEditor";
import Topslide from "@components/Topslide";
import React from "react";

const AdminProduits = () => {
  return (
    <section className="background-home">
      <LeftSlide />
      <Topslide />
      <div className="position-admin--editor">
        <div className="background-texteditor-produits">
          <ProduitsEditor />
        </div>
      </div>
    </section>
  );
};

export default AdminProduits;
