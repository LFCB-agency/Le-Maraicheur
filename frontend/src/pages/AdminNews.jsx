import LeftSlide from "@components/Leftslide";
import ArticlePost from "@components/ArticlePost";
import Topslide from "@components/Topslide";

export default function AdminNews() {
  return (
    <section className="background-home">
      <LeftSlide />
      <Topslide />
      <div className="position-admin--editor">
        <div className="background-texteditor">
          <ArticlePost />
        </div>
      </div>
    </section>
  );
}
