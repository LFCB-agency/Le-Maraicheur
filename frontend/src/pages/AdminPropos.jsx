import LeftSlide from "@components/Leftslide";
import AproposEditor from "@components/AproposEditor";
import Topslide from "@components/Topslide";
import Upload from "./Upload";

export default function AdminMethode() {
  return (
    <section className="background-home">
      <LeftSlide />
      <Topslide />
      <div className="position-admin--editor">
        <div className="background-texteditor">
          <AproposEditor />
          <Upload />
        </div>
      </div>
    </section>
  );
}
