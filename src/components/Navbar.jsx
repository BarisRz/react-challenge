import logo from "../assets/goatLogo.svg";
function Navbar() {
  return (
    <>
      <nav>
        <img src={logo} alt="logo" className="logo" />
        <p>
          Le coin <span>GOAT</span>esque
        </p>
      </nav>
    </>
  );
}

export default Navbar;
