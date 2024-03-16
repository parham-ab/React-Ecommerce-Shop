import { useDispatch } from "react-redux";
import notify from "utils/notify";
import { useNavigate } from "react-router-dom";
import { clearCart } from "features/cartSlice";
import { checkoutCart } from "features/cartSlice";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
} from "@nextui-org/react";
const ShopCardInfo = ({ selectedItems, totalPay, count }) => {
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
    <Card className="max-w-[300px] flex m-auto">
      <CardHeader className="flex items-center justify-between gap-1 z-0">
        <p className="text-md">Total Items:</p>
        <span className="text-small text-gray-400 font-bold">{count}</span>
      </CardHeader>
      <Divider />
      <CardBody>
        <div className="flex items-center justify-between gap-1">
          <p>Total Payment:</p>
          <span className="text-small text-gray-400 font-bold">
            $ {totalPay}
          </span>
        </div>
      </CardBody>
      <CardFooter className="flex items-center justify-between">
        <Button
          color="success"
          className={`${
            !selectedItems?.length ? "opacity-55 cursor-not-allowed" : ""
          }`}
          onClick={checkOutHandler}
          disabled={!selectedItems?.length}
        >
          Checkout
        </Button>
        <Button
          color="danger"
          variant="light"
          className={`${
            !selectedItems?.length ? "opacity-55 cursor-not-allowed" : ""
          }`}
          onClick={clearCartHandler}
          disabled={!selectedItems?.length}
        >
          Clear
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ShopCardInfo;
