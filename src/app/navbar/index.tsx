import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";

import Logo from "../../../public/assets/logo/ransaini.png";
function Navbar() {
  return (
    <header className=" overflow-hidden">
      <div className="header__container flex items-center mx-4 justify-around border-border-yellow-600 bottom-2 mb-1 ">
        <div className="w-24 py-2">
          <Image src={Logo} alt={"Technical Ranasaini Logo"} />
        </div>
        <nav className=" invisible ">
          <a className="nav-font" href="#">
            home
          </a>
          <a className="nav-font" href="#">
            services
          </a>
          <a className="nav-font" href="#">
            contact
          </a>
          <a className="nav-font" href="#">
            about
          </a>
          <button className="">Build with us</button>
        </nav>
        <div>
          <GiHamburgerMenu className="h-4 w-4" />
        </div>
      </div>
      <div className="mobile-nav flex flex-col gap-4 bg-header  items-center text-[0.875rem] leading-[1.7]">
        <a className="text" href="#">
          home
        </a>
        <a href="#">services</a>
        <a href="#">contact</a>
        <a href="#">about</a>
        <div className="w-[90%]">
          <button className="text-center text-white rounded-md w-full bg-body-color px-2 py-2 text-xl font-bold uppercase">
            Build with us
          </button>
        </div>
      </div>
    </header>
  );
}
export default Navbar;
