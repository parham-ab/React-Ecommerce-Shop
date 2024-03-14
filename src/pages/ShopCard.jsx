import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Button,
} from "@nextui-org/react";
import notify from "utils/notify";
import { checkoutCart, clearCart } from "../features/cartSlice";

const ShopCard = () => {
  const { count, totalPay, selectedItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const clearCartHandler = () => {
    dispatch(clearCart());
    notify("colored", 3000, "success", "Card cleared");
  };
  const checkOutHandler = () => {
    dispatch(checkoutCart());
    notify("colored", 3000, "success", "Checked out successfully!");
    setTimeout(() => {
      navigate("/");
    }, 3000);
  };

  return (
    <div>
      <Card className="max-w-[300px] flex m-auto">
        <CardHeader className="flex items-center justify-between gap-1">
          <p className="text-md">Total Items:</p>
          <span className="text-small text-gray-400 font-bold">{count}</span>
        </CardHeader>
        <Divider />
        <CardBody>
          <div className="flex items-center justify-between gap-1">
            <p>Total Payment: </p>
            <span className="text-small text-gray-400 font-bold">
              {" "}
              $ {totalPay}
            </span>
          </div>
        </CardBody>
        <CardFooter className="flex items-center justify-between">
          <Button
            color="success"
            className={`${
              !selectedItems.length ? "opacity-55 cursor-not-allowed" : ""
            }`}
            onClick={checkOutHandler}
            disabled={!selectedItems.length}
          >
            Checkout
          </Button>
          <Button
            color="danger"
            variant="light"
            className={`${
              !selectedItems.length ? "opacity-55 cursor-not-allowed" : ""
            }`}
            onClick={clearCartHandler}
            disabled={!selectedItems.length}
          >
            Clear
          </Button>
        </CardFooter>
      </Card>
      {/*  */}
      <Card className="my-14">
        <CardBody>
          <p>Make beautiful websites regardless of your design experience.</p>
        </CardBody>
      </Card>
    </div>
  );
};

export default ShopCard;
