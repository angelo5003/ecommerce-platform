import "./ProductDetails.css";
import minusIcon from "../../../assets/images/icon-minus.svg";
import plusIcon from "../../../assets/images/icon-plus.svg";
import { BsCart3 } from "react-icons/bs";
import product from "../../../data/productData";
import {
  handleIncrementPropTypes,
  handleDecrementPropTypes,
  handleAddItemPropTypes,
} from "../../../utils/PropTypes/PropTypes";

const ProductDetails = ({
  handleIncrement,
  counter,
  handleDecrement,
  handleAddItem,
  shoppingCartArray,
}) => {
  return (
    <article className="product_details_container">
      <header className="product_info_container">
        <h5 id="product_brand">{product.brandName.toUpperCase()}</h5>
        <h2 id="product_name">{product.productName}</h2>
      </header>

      <p id="product_detail_info">{product.info}</p>

      <ul className="product_price_container">
        <li id="product_price">${product.price.toFixed(2)}</li>
        <li id="product_discount">{product.discount}%</li>
        <li id="product_old_price">${product.oldPrice.toFixed(2)}</li>
      </ul>

      <div className="product_outer_btn_container">
        <div className="product_inner_btn_container">
          <button
            className="product_btn"
            onClick={() => handleDecrement(shoppingCartArray[0].id)}
          >
            <img src={minusIcon} alt="decrement-icon" />
          </button>

          <span id="product_amount">{counter}</span>
          <button className="product_btn" onClick={handleIncrement}>
            {" "}
            <img src={plusIcon} alt="increment-icon" />
          </button>
        </div>
        {counter > 0 && (
          <button id="product_add_item" onClick={handleAddItem}>
            {" "}
            <BsCart3 id="product_cart_icon" /> Add to cart
          </button>
        )}
      </div>
    </article>
  );
};

ProductDetails.propTypes = handleIncrementPropTypes;
ProductDetails.propTypes = handleDecrementPropTypes;
ProductDetails.propTypes = handleAddItemPropTypes;

export default ProductDetails;
