import { useSelector } from "react-redux";
import { Card, CardBody } from "@nextui-org/react";
import NoProducts from "components/NoProducts";
import ShopCardInfo from "components/ShopCardInfo";
import ShopCardItems from "components/ShopCardItems";
const ShopCard = () => {
  const state = useSelector((state) => state.cart);
  const { count, totalPay, selectedItems } = state;

  return (
    <div className="min-h-screen">
      <ShopCardInfo
        count={count}
        selectedItems={selectedItems}
        totalPay={totalPay}
      />
      {selectedItems?.length ? (
        <Card className="m-14">
          <CardBody>
            {selectedItems?.map((item) => (
              <ShopCardItems key={item?.id} {...item} state={state} />
            ))}
          </CardBody>
        </Card>
      ) : (
        <NoProducts />
      )}
    </div>
  );
};

export default ShopCard;
