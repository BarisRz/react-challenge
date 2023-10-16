function Card({ element, prix, setPrix, nombrePanier, setNombrePanier }) {
  function handlePanier(item) {
    setNombrePanier(nombrePanier + 1);
    setPrix(Math.round((prix + item.price) * 100) / 100);
  }
  return (
    <>
      <div className="card">
        <p className="card-image"></p>
        <p>{element.title}</p>
        <p>{element.description}</p>
        <p>{element.price}€</p>
        <p>{element.category}</p>
        <button onClick={() => handlePanier(element)}>Ajouter au Panier</button>
      </div>
    </>
  );
}

export default Card;
