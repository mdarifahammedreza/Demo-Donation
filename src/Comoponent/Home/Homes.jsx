import Banner from "../banner/banner";
import Carts from "../Carts/Carts";
import { useEffect, useState } from "react";

const Homes = () => {
  const [Info, setData] = useState([]);
  useEffect(() => {
    fetch("Data_of_color.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  // console.log(Info);
  return (
    <div>
      <Banner></Banner>
      <Carts Info={Info}></Carts>
    </div>
  );
};

export default Homes;
