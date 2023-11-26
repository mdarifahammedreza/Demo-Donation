import { GetID } from "../javascript/funtion";
import Dcart from "./Dcart";

const DCarts = () => {
  const ArrayData = GetID();
  const Data = JSON.parse(ArrayData);
  if (Data) {
    return (
      <div className="grid grid-cols-3">
        {Data.map((dcart) => (
          <Dcart key={dcart.ID} dcart={dcart}></Dcart>
        ))}
      </div>
    );
  } else {
    return (
      <div>
        <p>Noting is added on Donation</p>
      </div>
    );
  }
};

export default DCarts;
