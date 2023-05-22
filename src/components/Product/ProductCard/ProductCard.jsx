import "./ProductCard.css";
import { shoppingCartArrayPropTypes } from "../../../utils/PropTypes/PropTypes";
import { FaTrashAlt } from "react-icons/fa";

const ProductCard = ({ shoppingCartArray, counter }) => {
  const product = shoppingCartArray[0];

  console.log(`shoppingCartArray ProductCard:`, shoppingCartArray);

  let totalPrice;

  //! if the array.length is empty set the totalPrice to 0. This will make sure that the product.price object is set to 0 instead of undefined.
  if (shoppingCartArray.length === 0) {
    totalPrice = 0;
  } else {
    totalPrice = product.price * counter.toFixed(2);
  }

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
            <p>
              <strong>${totalPrice.toFixed(2)}</strong>
            </p>

            <FaTrashAlt id="cart_trash_icon" alt="trash-bin" />
          </div>
          <div id="cart_btn_container">
            <button id="cart_btn">Checkout</button>
          </div>
        </>
      )}
    </section>
  );
};

ProductCard.propTypes = shoppingCartArrayPropTypes;

export default ProductCard;
