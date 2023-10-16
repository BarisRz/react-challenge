import Card from "./Card";
function CardList({ tableau }) {
  return (
    <>
      <div className="container">
        {tableau.map((element) => (
          <Card key={element.id} element={element} />
        ))}
      </div>
    </>
  );
}

export default CardList;
