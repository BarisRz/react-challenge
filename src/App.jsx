import "./App.scss";
import { useState } from "react";
import Navbar from "./components/Navbar";
import CardList from "./components/CardList";
import tableau from "./data/data.json";
import Footer from "./components/Footer";
const category = ["Tous", "Jeuxvideo", "Manga", "Anime"];
function App() {
  const [filter, setFilter] = useState("");
  return (
    <>
      <Navbar />
      <div className="filtre">
        {category.map((element) => (
          <button>{element}</button>
        ))}
      </div>
      <CardList tableau={tableau} />
      <Footer />
    </>
  );
}

export default App;
