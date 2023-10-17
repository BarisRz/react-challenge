import Card from "./Card";
function CardList({
  tableau,
  filter,
  prix,
  setPrix,
  nombrePanier,
  setNombrePanier,
  setFilter,
  filter2,
}) {
  return (
    <>
      <div className="container">
        {filter === "Tous"
          ? tableau
              .filter((element) =>
                element.title.toLowerCase().includes(filter2)
              )
              .map((element) => (
                <Card
                  key={element.id}
                  element={element}
                  prix={prix}
                  setPrix={setPrix}
                  nombrePanier={nombrePanier}
                  setNombrePanier={setNombrePanier}
                />
              ))
          : tableau
              .filter((element) => element.category.includes(filter))
              .map((element) => (
                <Card
                  key={element.id}
                  element={element}
                  prix={prix}
                  setPrix={setPrix}
                  nombrePanier={nombrePanier}
                  setNombrePanier={setNombrePanier}
                />
              ))}
      </div>
    </>
  );
}

export default CardList;
