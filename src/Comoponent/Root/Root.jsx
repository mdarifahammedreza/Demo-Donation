import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Carts from "../Carts/Carts";

const Root = () => {
  return (
    <div>
      <Navbar>S</Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
