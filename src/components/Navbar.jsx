import { useEffect, useState } from "react";
import Logo from "./logo";
import Modal from "./modal";
import { Navigation } from "./modalChildren";
import "../css/Navbar.css";
import { BiMenuAltRight } from "react-icons/bi";

const NavBar = () => {
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    let prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
      let currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        document.getElementsByTagName("header")[0].style.top = "0";
      } else {
        document.getElementsByTagName("header")[0].style.top = "-127px";
      }
      prevScrollpos = currentScrollPos;
    };
  }, []);

  return (
    <>
      <header>
        <Logo />
        <div
          onClick={() => {
            setOpenModal(true);
          }}
        >
          <BiMenuAltRight size={36} />
        </div>
      </header>
      <Modal openModal={openModal} setOpenModal={setOpenModal}>
        <Navigation />
      </Modal>
    </>
  );
};

export default NavBar;
