import Card from "./Card";
import PropTypes from "prop-types";
function CardList({
  tableau,
  filter,
  prix,
  setPrix,
  nombrePanier,
  setNombrePanier,
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
CardList.propTypes = {
  tableau: PropTypes.array,
  filter: PropTypes.string,
  prix: PropTypes.number,
  setPrix: PropTypes.func,
  nombrePanier: PropTypes.number,
  setNombrePanier: PropTypes.func,
  filter2: PropTypes.string,
};
export default CardList;
