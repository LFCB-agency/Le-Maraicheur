/* eslint-disable import/no-extraneous-dependencies */
import ClientList from "@components/ClientList";
import LeftSlide from "@components/Leftslide";
import Topslide from "@components/Topslide";

export default function AdminPopup() {
  return (
    <section className="background-home">
      <LeftSlide />
      <Topslide />
      <div className="position-admin--editor">
        <div className="hello">
          <ClientList />
        </div>
      </div>
    </section>
  );
}
