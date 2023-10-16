import "./App.scss";
import { useState } from "react";
import Navbar from "./components/Navbar";
import CardList from "./components/CardList";
import tableau from "./data/data.json";
import Footer from "./components/Footer";
const category = ["Tous", "Jeuxvideo", "Manga", "Anime"];
function App() {
  const [filter, setFilter] = useState(0);
  function handleClick(name) {
    setFilter(name);
  }
  console.log(filter);
  return (
    <>
      <Navbar />
      <div className="filtre">
        {category.map((element) => (
          <button key={element} onClick={() => handleClick(element)}>
            {element}
          </button>
        ))}
      </div>
      <CardList tableau={tableau} filter={filter} />
      <Footer />
    </>
  );
}

export default App;
