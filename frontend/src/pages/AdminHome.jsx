/* eslint-disable import/no-extraneous-dependencies */
import LeftSlide from "@components/Leftslide";
import TextEditor from "@components/TextEditor";
import Topslide from "@components/Topslide";
import Upload from "./Upload";

export default function AdminHome() {
  return (
    <section className="background-home">
      <LeftSlide />
      <Topslide />
      <div className="position-admin--editor">
        <div className="hello">
          <TextEditor />
          <Upload />
        </div>
      </div>
    </section>
  );
}
