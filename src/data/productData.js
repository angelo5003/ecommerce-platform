import { v4 as uuid } from "uuid";

const productData = {
  id: uuid(),
  productImage: "/images/image-product-1-thumbnail.jpg",
  brandName: "Sneaker company",
  productName: "Fall Limited Edition Sneakers",
  info: "These low-profile sneakers are your perfect casual wear companion.\n Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
  price: 125.0,
  discount: 50,
  oldPrice: 250.0,
};

export default productData;
