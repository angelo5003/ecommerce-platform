import "./ProductCard.css";
import { shoppingCartArrayPropTypes } from "../../../utils/PropTypes/PropTypes";
import { FaTrashAlt } from "react-icons/fa";

const ProductCard = ({ shoppingCartArray, counter }) => {
  const product = shoppingCartArray[0];
  console.log(`shoppingCartArray ProductCard:`, shoppingCartArray);
  const totalPrice = product.price * counter.toFixed(2);

  return (
    <section className="cart_product_container">
      {product && (
        <>
          <div className="cart_product_details" key={product.id}>
            <img
              src={product.productPhoto}
              alt="product-image"
              id="cart_product_thumb"
            />
            <p>{product.productName}</p>
          </div>
          <div className="cart_price_container">
            <p>${product.price.toFixed(2)}</p>

            <span>x</span>
            <p>{counter}</p>
            {totalPrice ? (
              <p>
                <strong>${totalPrice.toFixed(2)}</strong>
              </p>
            ) : (
              <p>0</p>
            )}
            <FaTrashAlt id="cart_trash_icon" alt="trash-bin" />
          </div>
          <div id="cart_btn_container">
            <button id="cart_btn">Checkout</button>
          </div>
        </>
      )}
      {/* <div className="cart_product_details">
        <img src="" alt="product-image" id="cart_product_thumb" />
        <p>product name</p>
      </div>
      <div className="cart_price_container">
        <p>$125</p>
        <span>x</span>
        <p>1</p>
        <p>$300</p>
        <FaTrashAlt id="cart_trash_icon" alt="trash-bin" />
      </div>
      <div id="cart_btn_container">
        <button id="cart_btn">Checkout</button>
      </div> */}
    </section>
  );
};

ProductCard.propTypes = shoppingCartArrayPropTypes;

export default ProductCard;
