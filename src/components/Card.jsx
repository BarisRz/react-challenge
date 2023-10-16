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
        <p>
          <p>{element.price}€</p>
          <button onClick={() => handlePanier(element)}>
            Ajouter au Panier
          </button>
        </p>
      </div>
    </>
  );
}

export default Card;
