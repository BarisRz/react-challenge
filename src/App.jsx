import "./App.scss";
import CardList from "./components/CardList";
import Navbar from "./components/Navbar";
import tableau from "./data/data.json";
function App() {
  return (
    <>
      <Navbar />
      <CardList tableau={tableau} />
    </>
  );
}

export default App;
