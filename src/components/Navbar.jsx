import Logo from "./logo";
import "../css/Navbar.css";

const NavBar = () => {
  const navList = ["Home", "About", "Features", "Contact"];
  return (
    <header>
      <Logo />
      <ul>
        {navList.map((navItem) => (
          <a href="/">
            <li>{navItem}</li>
          </a>
        ))}
      </ul>
      <div>
        <a href="/" style={{ margin: "0 35px", color: "#313131" }}>
          Login
        </a>
        <button
          style={{
            color: "white",
            backgroundColor: "#0ac05e",
            padding: "15px 42px",
            fontSize: "16px",
            fontWeight: "400",
            lineHeight: "27px",
            fontFamily: "Poppins",
            border: "0",
            cursor: "pointer",
            borderRadius: "8px",
            boxShadow:
              "0px 20px 13px rgba(10, 192, 94, 0.03), 0px 8.14815px 6.51852px rgba(56, 56, 56, 0.0392593), 0px 1.85185px 3.14815px rgba(56, 56, 56, 0.0240741)",
          }}
        >
          Sign Up
        </button>
      </div>
    </header>
  );
};

export default NavBar;
