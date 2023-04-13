import {LeftPanel, MainWrapper} from "./orderStyles";
import Choose from "./Choose/Choose";
import MakeOrder from "./MakeOrder/MakeOrder";
import ProductSlider from "./ProductSlider/ProductSlider";
import {useState} from "react";

const Order = ({products}) => {
  const [chosenProducts, setChosenProducts] = useState([]);
  const [swiperRef, setSwiperRef] = useState(null);

  return (
    <div>
      <MainWrapper>
        <LeftPanel>
          <Choose products={products} chosenProducts={chosenProducts} setChosenProducts={setChosenProducts} swiperRef={swiperRef}/>
          <MakeOrder products={products} chosenProducts={chosenProducts} />
        </LeftPanel>
        <ProductSlider products={products} setSwiperRef={setSwiperRef}/>
      </MainWrapper>
    </div>
  );
};

export default Order;
