import {ProductSliderWrapper, StyledSwiper, StyledSwiperSlide} from "./productSliderStyles";
import ProductCard from "../../../sharedComponents/ProductCard/ProductCard";

import SwiperCore,  { Scrollbar} from "swiper/core";
import 'swiper/css';
import 'swiper/css/scrollbar';
import {Mousewheel} from "swiper";

const ProductSlider = ({products, setSwiperRef}) => {

  SwiperCore.use([Scrollbar, Mousewheel]);

  return (
    <StyledSwiper
      spaceBetween={12}
      slidesPerView="auto"
      onSwiper={(swiper) => setSwiperRef(swiper)}
      direction="vertical"
      scrollbar={{ draggable: true }}
      mousewheel
      loop
    >

      <ProductSliderWrapper>
        {
          products.map((productData) => <StyledSwiperSlide key={productData.id}><ProductCard key={productData.id} productData={productData}/></StyledSwiperSlide>)
        }
      </ProductSliderWrapper>

    </StyledSwiper>
  );
};

export default ProductSlider;
