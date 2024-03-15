import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Button,
  Tooltip,
} from "@nextui-org/react";
import notify from "utils/notify";
import {
  addItem,
  checkoutCart,
  clearCart,
  decrease,
  removeItem,
} from "../features/cartSlice";
import { TiMinus } from "react-icons/ti";
import quantityCount from "../utils/quantityCount";
import { FaPlus, FaRegTrashAlt } from "react-icons/fa";
import titleSplit from "utils/titleSplit";

const ShopCard = () => {
  const state = useSelector((state) => state.cart);
  const { count, totalPay, selectedItems } = state;
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
  console.log(selectedItems);
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
      <Card className="my-14 bg-blue-300">
        <CardBody>
          {selectedItems?.map((item) => (
            <div key={item?.id} className="flex items-center justify-between">
              <div className="flex items-center gap-5">
                <img
                  src={item?.image}
                  alt={item?.id}
                  width={"80px"}
                  height={"80px"}
                  className="m-auto object-contain w-[80px] h-[80px]"
                />

                <div>
                  <Tooltip content={item?.title}>
                    <h3 className="text-sm font-bold">
                      {titleSplit(item?.title)}
                    </h3>
                  </Tooltip>
                  <span>$ {item?.price?.toLocaleString()}</span>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between my-5">
                  <Button
                    isIconOnly={!quantityCount(state, +item?.id) <= 0}
                    color="primary"
                    variant="shadow"
                    size="sm"
                    onClick={() =>
                      dispatch(
                        addItem({
                          id: item?.id,
                          title: item?.title,
                          image: item?.image,
                          price: item?.price,
                        })
                      )
                    }
                  >
                    {quantityCount(state, +item?.id) && <FaPlus />}
                  </Button>

                  <span
                    className={`bg-black flex items-center justify-center text-white ${
                      quantityCount(state, +item?.id) && "w-[33px] h-[33px]"
                    } rounded-full text-xs mx-2`}
                  >
                    {quantityCount(state, +item?.id)}
                  </span>

                  {quantityCount(state, +item?.id) === 1 && (
                    <Button
                      isIconOnly
                      color="danger"
                      aria-label="delete"
                      size="sm"
                      onClick={() => dispatch(removeItem({ id: item?.id }))}
                    >
                      <FaRegTrashAlt className="text-xl" />
                    </Button>
                  )}
                  {quantityCount(state, +item?.id) > 1 && (
                    <Button
                      isIconOnly
                      color="danger"
                      aria-label="decrease"
                      size="sm"
                      onClick={() =>
                        dispatch(decrease({ id: item?.id, price: item?.price }))
                      }
                    >
                      <TiMinus className="text-xl" />
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </CardBody>
      </Card>
    </div>
  );
};

export default ShopCard;
