import ClientList from "@components/ClientList";
import LeftSlide from "@components/Leftslide";
import Topslide from "@components/Topslide";
import React from "react";

const AdminClient = () => {
  return (
    <section className="background-home">
      <LeftSlide />
      <Topslide />
      <div className="position-admin--editor">
        <ClientList />
      </div>
    </section>
  );
};

export default AdminClient;
