import "./Sidebar.css";
import { SideBarPropTypes } from "../../../utils/PropTypes/PropTypes";
import closeIcon from "../../../assets/images/icon-close.svg";

const Sidebar = ({ handleSideBar }) => {
  return (
    <aside className="sidebar_outer_container">
      <nav className="sidebar_inner_container">
        <button className="mobile_menu_btn" onClick={handleSideBar}>
          <img src={closeIcon} alt="sidebar-close-btn" className="close_icon" />
        </button>
        <ul className="sidebar_menu_items">
          <li className="sidebar_links">Collections</li>
          <li className="sidebar_links">Men</li>
          <li className="sidebar_links">Women</li>
          <li className="sidebar_links">About</li>
          <li className="sidebar_links">Contact</li>
        </ul>
      </nav>
    </aside>
  );
};

Sidebar.propTypes = SideBarPropTypes;

export default Sidebar;
