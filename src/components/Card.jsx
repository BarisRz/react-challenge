import PropTypes from "prop-types";
function Card({ element, prix, setPrix, nombrePanier, setNombrePanier }) {
  function handlePanier(item) {
    setNombrePanier(nombrePanier + 1);
    setPrix(Math.round((prix + item.price) * 100) / 100);
  }
  return (
    <>
      <div className="card">
        <img className="card-image" src={element.image} />
        <p>{element.title}</p>
        <p>{element.description}</p>
        <p>{element.category}</p>
        <div>
          <p>{element.price}€</p>
          <button onClick={() => handlePanier(element)}>
            Ajouter au Panier
          </button>
        </div>
      </div>
    </>
  );
}
Card.propTypes = {
  element: PropTypes.object,
  prix: PropTypes.number,
  setPrix: PropTypes.func,
  nombrePanier: PropTypes.number,
  setNombrePanier: PropTypes.func,
};
export default Card;
