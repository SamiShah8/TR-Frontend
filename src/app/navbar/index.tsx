import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";

import Logo from "../../../public/assets/logo/ransaini.png";

function Navbar() {
  return (
    <header>
      <div className="header__container">
        <div className="w-12 h-12">
          <Image src={Logo} alt={"Technical Ranasaini Logo"} />
        </div>
        <nav>
          <a href="#">home</a>
          <a href="#">services</a>
          <a href="#">contact</a>
          <a href="#">about</a>
        </nav>
        <div>
          <button>Build with us</button>
        </div>
        <div>
          <GiHamburgerMenu />
        </div>
      </div>
    </header>
  );
}
export default Navbar;
