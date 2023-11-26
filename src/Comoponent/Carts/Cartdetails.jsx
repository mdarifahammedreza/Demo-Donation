import toast, { Toaster } from "react-hot-toast";
import { useLoaderData, useParams } from "react-router-dom";
import { takeID } from "../javascript/funtion";

const Cartdetails = () => {
  const Data = useLoaderData();
  const { cartID } = useParams();
  const cart = Data.find((cart) => cart.ID === cartID);

  const handleButtonClick = () => {
    toast.success("Donate Successful", {});
    takeID(cart);
  };
  return (
    <div className="flex flex-col justify-items-center mx-10 mt-20">
      <div>
        <img className="w-2/3 h-1/3" src={cart.img} alt="donation image" />
        <div>
          <button
            onClick={handleButtonClick}
            className="bg-red-500 px-3 rounded-md py-1 relative bottom-12 -right-5 ">
            Donate ${cart.Price}
          </button>
        </div>
      </div>
      <p className="text-xl font-medium my-3">{cart.Title}</p>
      <p className="text-sm text-justify">{cart.Description}</p>
      <Toaster />
    </div>
  );
};

export default Cartdetails;
