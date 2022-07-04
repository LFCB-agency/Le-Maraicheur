/* eslint-disable import/no-extraneous-dependencies */
import LeftSlide from "@components/Leftslide";
import Topslide from "@components/Topslide";

export default function AdminHome() {
  return (
    <section className="background-home">
      <LeftSlide />
      <Topslide />
      <div className="position-admin--editor">
        <div className="hello">Mon text</div>
      </div>
    </section>
  );
}
