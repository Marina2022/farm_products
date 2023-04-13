import {ChooseWrapper, ProductRow, StyledLabel, StyledTitle} from "./chooseStyles";
import Checkbox from "../../../sharedComponents/Checkbox/Checkbox";

const Choose = ({products, chosenProducts, setChosenProducts, swiperRef}) => {

  return (
    <ChooseWrapper>
      <StyledTitle size="small">Выберите продукты</StyledTitle>
      {
        products.map((product, ind) => {

          const checked = chosenProducts.includes(product.id);
          const onCheckClick = () => {
            if (!checked) {
              setChosenProducts((prev) => prev.concat(product.id));
              swiperRef.slideTo(ind);
            } else {
              setChosenProducts((prev) => {
                const index = prev.findIndex((item) => item === product.id);
                const newArr = [...prev];
                newArr.splice(index, 1);
                return newArr
              });
            }
          }

          return (
            <ProductRow key={product.id}>
              <div>{product.name}</div>
              <Checkbox checked={checked}
                        styledLabel={StyledLabel}
                        onClick={onCheckClick}
              />
            </ProductRow>
          )
        })
      }
    </ChooseWrapper>
  );
};

export default Choose;
