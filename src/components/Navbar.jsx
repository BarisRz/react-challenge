import logo from "../assets/goatLogo.svg";
import cart from "../assets/cart-shopping.svg";
import PropTypes from "prop-types";
function Navbar({ prix, nombrePanier }) {
  return (
    <>
      <nav>
        <img src={logo} alt="logo" className="logo" />
        <div>
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
        </div>
      </nav>
    </>
  );
}
Navbar.propTypes = {
  prix: PropTypes.number,
  nombrePanier: PropTypes.number,
};
export default Navbar;
