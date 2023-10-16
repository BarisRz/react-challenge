function Card({ element }) {
  return (
    <>
      <div className="card">
        <img src={element.image} />
        <p>{element.title}</p>
        <p>{element.description}</p>
        <p>{element.price}€</p>
        <p>{element.category}</p>
        <button>Ajouter au Panier</button>
      </div>
    </>
  );
}

export default Card;
