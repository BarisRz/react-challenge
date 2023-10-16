import Card from "./Card";
function CardList({
  tableau,
  filter,
  prix,
  setPrix,
  nombrePanier,
  setNombrePanier,
}) {
  return (
    <>
      <div className="container">
        {filter === "Tous"
          ? tableau.map((element) => (
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
