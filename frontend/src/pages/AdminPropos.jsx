import LeftSlide from "@components/Leftslide";
import AproposEditor from "@components/AproposEditor";
import Topslide from "@components/Topslide";

export default function AdminMethode() {
  return (
    <section className="background-home">
      <LeftSlide />
      <Topslide />
      <div className="position-admin--editor">
        <div className="hello">
          <AproposEditor />
        </div>
      </div>
    </section>
  );
}
