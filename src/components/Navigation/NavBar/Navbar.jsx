import { useState } from "react";
import "./Navbar.css";
import Sidebar from "../SideBar/Sidebar";
import mobileMenu from "../../../assets/images/icon-menu.svg";
import shoppingCart from "../../../assets/images/icon-cart.svg";
import profileImg from "../../../assets/images/image-avatar.png";

const Navbar = () => {
  const [sideBar, setSideBar] = useState(false);

  const handleSideBar = () => {
    setSideBar(!sideBar);
  };
  return (
    <header>
      <nav>
        <ul className="menu_list">
          {sideBar ? (
            <Sidebar handleSideBar={handleSideBar} />
          ) : (
            <li className="menu_items">
              <button className="mobile_menu_btn" onClick={handleSideBar}>
                <img
                  src={mobileMenu}
                  alt="menu-btn"
                  className="mobile_menu_icon"
                />
              </button>
            </li>
          )}

          <li className="menu_items">
            <h2 className="mobile_menu_title">sneakers</h2>
          </li>
          <li className="menu_items">
            <button className="mobile_menu_btn">
              <img src={shoppingCart} alt="shopping-cart" />
            </button>
            {/* <p>{counter}</p> */}
          </li>
          <li className="menu_items">
            <img src={profileImg} alt="profile-pic" className="avatar_img" />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
