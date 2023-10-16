import Card from "./Card";
function CardList({ tableau, filter }) {
  return (
    <>
      <div className="container">
        {filter === "Tous"
          ? tableau.map((element) => (
              <Card key={element.id} element={element} />
            ))
          : tableau
              .filter((element) => element.category.includes(filter))
              .map((element) => <Card key={element.id} element={element} />)}
      </div>
    </>
  );
}

export default CardList;
