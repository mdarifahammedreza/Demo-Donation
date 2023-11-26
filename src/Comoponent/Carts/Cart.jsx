import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const Cart = ({ cart }) => {
  const { ID, type, BG_Color, Button_color, Text_color, Title, img } = cart;
  const cartstyle = `${BG_Color} card card-compact w-80  shadow-md `;
  const buttonstyle = `rounded-md w-20 font-medium p-1 text-sm text-center ${Button_color}`;
  const textStyle = `text-xl font-semibold ${Text_color}`;

  return (
    <div>
      <Link to={`/Cartdetails/${ID}`}>
        {" "}
        <div
          className={cartstyle}
          style={{
            backgroundColor: `${BG_Color}`,
            color: `${Text_color}`,
          }}>
          <figure>
            <img className="" src={img} alt="Cloth" />
          </figure>
          <div className="card-body">
            <p
              className={buttonstyle}
              style={{
                backgroundColor: `${Button_color}`,
              }}>
              {type}
            </p>
            <p className={textStyle}>{Title}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};
Cart.propTypes = {
  cart: PropTypes.object.isRequired,
};
export default Cart;
