import ProductCard from "components/common/ProductCard";
import { EffectCards, EffectCreative, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/effect-creative";

const ProductSlider = ({dataContent}) => {
  return (
    <div>
      <div className="block sm:hidden">
        <Swiper
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          effect={"cards"}
          grabCursor={true}
          modules={[Autoplay, EffectCreative]}
          className="mySwiper"
        >
          {dataContent?.map((item) => (
            <SwiperSlide key={item.id}>
              <ProductCard freeDelivery {...item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="hidden sm:block">
        <Swiper
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          effect={"cards"}
          grabCursor={true}
          modules={[Autoplay, EffectCards]}
          className="mySwiper"
        >
          {dataContent?.map((item) => (
            <SwiperSlide key={item.id}>
              <ProductCard freeDelivery {...item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ProductSlider;
