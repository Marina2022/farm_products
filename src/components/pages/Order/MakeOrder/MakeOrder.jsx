import {MakeOrderWrapper, PriceText, PriceValue, StyledButton, StyledInput, StyledTitle} from "./makeOrderStyles";
import {useState} from "react";

const MakeOrder = ({products, chosenProducts}) => {
  const [value, setValue] = useState('');

  const resultPrice = chosenProducts.reduce((acc, chosenProduct) => {
    return acc + products.find(product => product.id === chosenProduct).price
  }, 0)

  const onBuyClick = (e) => {
    e.preventDefault();

    const productList = chosenProducts.reduce((acc, chosenProduct) => {
      const currentProduct = products.find(product => product.id === chosenProduct);
      return acc + `${currentProduct.name} - ${currentProduct.price} руб.,
    `
    }, ``)
    const message = `Спасибо за заказ, вы купили:
    ${productList}
    Итого: ${resultPrice} руб.
    Доставка по адресу: ${value}`;
    alert(message);
  }

  return (
    <MakeOrderWrapper>
      <StyledTitle size="small">
        Сделать заказ
      </StyledTitle>
      <StyledInput placeholder="Введите адрес доставки" value={value} onChange={(e) => setValue(e.target.value)}/>
      <PriceText>Цена</PriceText>
      <PriceValue>{resultPrice} руб.</PriceValue>
      <StyledButton disabled={value === ''} onClick={onBuyClick}>Купить</StyledButton>

    </MakeOrderWrapper>
  );
};

export default MakeOrder;
