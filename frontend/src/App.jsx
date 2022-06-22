import { Route, Routes } from "react-router-dom";
import Home from "@pages/Home";
import MenuBurger from "@components/MenuBurger";
import Upload from "@pages/Upload";
import "./App.css";

function App() {
  return (
    <div className="App">
      <MenuBurger />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/upload" element={<Upload />} />
      </Routes>
    </div>
  );
}

export default App;
