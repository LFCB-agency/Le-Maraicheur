import LeftSlide from "@components/Leftslide";
import MarketPost from "@components/MarketPost";
import Topslide from "@components/Topslide";

export default function AdminMarket() {
  return (
    <section className="background-home">
      <LeftSlide />
      <Topslide />
      <div className="position-admin--editor">
        <div className="background-texteditor">
          <MarketPost />
        </div>
      </div>
    </section>
  );
}
