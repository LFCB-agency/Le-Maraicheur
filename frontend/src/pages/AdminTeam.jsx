import LeftSlide from "@components/Leftslide";
import Topslide from "@components/Topslide";
import TeamEditor from "@components/TeamEditor";

export default function AdminTeam() {
  return (
    <section className="background-home">
      <LeftSlide />
      <Topslide />
      <div className="position-admin--editor">
        <div className="hello">
          <TeamEditor />
        </div>
      </div>
    </section>
  );
}
