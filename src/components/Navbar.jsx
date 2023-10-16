import logo from "../assets/goatLogo.svg";
function Navbar() {
  return (
    <>
      <nav>
        <img src={logo} alt="logo" className="logo" />
        <p className="texte">
          Le coin <span>GOAT</span>esque
        </p>
        <p>Panier</p>
      </nav>
    </>
  );
}

export default Navbar;
