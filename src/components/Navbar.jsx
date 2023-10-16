import logo from "../assets/goatLogo.svg";
import cart from "../assets/cart-shopping.svg";
function Navbar({ prix, nombrePanier }) {
  return (
    <>
      <nav>
        <img src={logo} alt="logo" className="logo" />
        <p>
          <img src={cart} className="logo" />
          <ul>
            <li>Panier: {nombrePanier} </li>
            <li>
              {nombrePanier !== 1 && nombrePanier !== 0
                ? "Articles"
                : "Article"}{" "}
              {prix}€
            </li>
          </ul>
        </p>
      </nav>
    </>
  );
}

export default Navbar;
