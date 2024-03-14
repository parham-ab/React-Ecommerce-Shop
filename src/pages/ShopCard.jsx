import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
  Button,
} from "@nextui-org/react";
import { useSelector } from "react-redux";

const ShopCard = () => {
  const { count, totalPay } = useSelector((state) => state.cart);

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
          <Button color="success">Checkout</Button>
          <Button color="danger" variant="light">
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
