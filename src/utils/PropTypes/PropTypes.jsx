import PropTypes from "prop-types";

//! we are importing PropTypes from the prop-types library and defining handleSideBar as a function that is required using the .isRequired method. This tells ESLint and other developers that handleSideBar must be a function and should not be left undefined.

export const SideBarPropTypes = {
  handleSideBar: PropTypes.func.isRequired,
};
export const handleIncrementPropTypes = {
  handleIncrement: PropTypes.func.isRequired,
};

export const handleDecrementPropTypes = {
  handleDecrement: PropTypes.func.isRequired,
};

export const handleAddItemPropTypes = {
  handleAddItem: PropTypes.func.isRequired,
};

export const handleShowModalPropTypes = {
  showModal: PropTypes.bool.isRequired,
};

export const showModalPropTypesFunc = {
  handleShowModal: PropTypes.func.isRequired,
};

export const shoppingCartArrayPropTypes = {
  shoppingCartArray: PropTypes.array.isRequired,
};
