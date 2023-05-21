import "./Modal.css";
import { handleShowModalPropTypes } from "../../utils/PropTypes/PropTypes";
import closeBtn from "../../assets/images/icon-close.svg";
import ProductCard from "../Product/ProductCard/ProductCard";

const Modal = ({
  showModal,
  handleShowModal,
  shoppingCartArray,

  counter,
}) => {
  return (
    <dialog className="modal_bg" open={showModal}>
      <header className="cart_title">
        <h3>Cart</h3>
        <button className="mobile_menu_btn" onClick={handleShowModal}>
          <img src={closeBtn} alt="close-btn" />
        </button>
        <ProductCard shoppingCartArray={shoppingCartArray} counter={counter} />
      </header>
    </dialog>
  );
};

Modal.propTypes = handleShowModalPropTypes;
export default Modal;
