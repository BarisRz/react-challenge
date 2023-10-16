import logo from "../assets/goatLogo.svg";
function Navbar({ prix, nombrePanier }) {
  return (
    <>
      <nav>
        <img src={logo} alt="logo" className="logo" />
        <ul>
          <li>Panier: {nombrePanier} </li>
          <li>
            {nombrePanier !== 1 && nombrePanier !== 0 ? "Articles" : "Article"}{" "}
            {prix}€
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
