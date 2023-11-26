import Cart from "./Cart";
import PropTypes from "prop-types";
const Carts = ({ Info }) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 justify-items-center gap-16 md:mx-20">
      {Info?.map((cart) => (
        <Cart key={cart.ID} cart={cart}></Cart>
      ))}
    </div>
  );
};
Carts.propTypes = {
  Info: PropTypes.array.isRequired,
};
export default Carts;
