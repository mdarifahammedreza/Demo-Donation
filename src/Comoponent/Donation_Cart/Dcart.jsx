import PropTypes from "prop-types";
const Dcart = ({ dcart }) => {
  return (
    <div
      className="flex mt-20 mx-10 gap-5 rounded-xl"
      style={{
        backgroundColor: `${dcart.BG_Color}`,
        color: `${dcart.Text_color}`,
      }}>
      <div>
        <img src={dcart.Dimg} alt="" />
      </div>
      <div>
        <p
          className="px-2 text-center rounded-md mt-4 w-20"
          style={{
            backgroundColor: `${dcart.Button_color}`,
          }}>
          {dcart.type}
        </p>
        <p className="font-medium text-xl my-4">{dcart.Title}</p>
        <p className="font-medium mb-2">${dcart.Price}</p>
        <button
          className="text-white rounded-lg px-3 py-2"
          style={{
            backgroundColor: `${dcart.Text_color}`,
          }}>
          View Details
        </button>
      </div>
    </div>
  );
};

Dcart.propTypes = {
  dcart: PropTypes.object.isRequired,
};
export default Dcart;
