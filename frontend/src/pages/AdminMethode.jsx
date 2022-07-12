import LeftSlide from "@components/Leftslide";
import MethodeEditor from "@components/MethodeEditor";
import Topslide from "@components/Topslide";

export default function AdminMethode() {
  return (
    <section className="background-home">
      <LeftSlide />
      <Topslide />
      <div className="position-admin--editor">
        <div className="hello">
          <MethodeEditor />
        </div>
      </div>
    </section>
  );
}
