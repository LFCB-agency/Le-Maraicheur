import LeftSlide from "@components/Leftslide";
import MethodeEditor from "@components/MethodeEditor";
import Topslide from "@components/Topslide";
import Upload from "./Upload";

export default function AdminMethode() {
  return (
    <section className="background-home">
      <LeftSlide />
      <Topslide />
      <div className="position-admin--editor">
        <div className="background-texteditor">
          <MethodeEditor />
          <Upload />
        </div>
      </div>
    </section>
  );
}
