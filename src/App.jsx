import { useState } from "react";
import { v4 as uuid } from "uuid";
import "./App.css";
import HeroSection from "./components/HeroSection/HeroSection";
import Navbar from "./components/Navigation/NavBar/Navbar";
import ProductDetails from "./components/Product/ProductDetails/ProductDetails";

function App() {
  const [counter, setCounter] = useState(0);
  const [shoppingCartArray, setShoppingCartArray] = useState([]);

  // object that store the data we would like to add to the array
  const shoeData = {
    productName: "Fall Limited Edition Sneakers",
    price: 125.0,
  };

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  // id is coming from the shoppingCartArray in the productDetails page and we passing the id from that array to this function
  const handleDecrement = (id) => {
    if (counter > 0) {
      setCounter(counter - 1);
      handleDelete(id);
    } else {
      return;
    }
  };

  // add item to the array
  const handleAddItem = () => {
    if (counter > 0) {
      setShoppingCartArray([
        ...shoppingCartArray,
        {
          id: uuid(),
          productName: shoeData.productName,
          price: shoeData.price,
        },
      ]);
    } else {
      return;
    }
  };

  // delete function
  const handleDelete = (id) => {
    const deleted = shoppingCartArray.filter((item) => item.id !== id);
    setShoppingCartArray(deleted);
  };

  console.log(`shoppingCartArray:`, shoppingCartArray);

  return (
    <>
      <Navbar />
      <HeroSection />
      <ProductDetails
        handleIncrement={handleIncrement}
        counter={counter}
        handleDecrement={handleDecrement}
        handleAddItem={handleAddItem}
        shoppingCartArray={shoppingCartArray}
      />
    </>
  );
}

export default App;
