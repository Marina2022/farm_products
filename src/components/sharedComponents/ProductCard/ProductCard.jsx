import {
  CardContent,
  CardPrice,
  CardText,
  ImgWrapper,
  ProductCardWrapper,
  SpecName, SpecWrapper,
  StyledTitle,
  Tab
} from "./productCardStyles";
import {Img} from "../../styledElements/img";
import {Li, Ul} from "../../styledElements";
import {useState} from "react";

const ProductCard = ({productData}) => {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = ['Описание', 'Характеристики', 'Свойства']
  return (
    <ProductCardWrapper>
      <ImgWrapper>
        <Img width="248" height="248" src={productData.image} alt=""/>
      </ImgWrapper>
      <CardContent>
        <StyledTitle>{productData.name}</StyledTitle>
        <Ul inline>
          {
            tabs.map((tab, index) =>
              <Li key={index}>
                <Tab active={index === activeTab} onClick={() => setActiveTab(index)}>
                  {tab}
                </Tab>
              </Li>
            )
          }

        </Ul>
        <CardText>
          {
            activeTab === 0 ? productData.description
              : activeTab === 1 ?
                <>
                  {
                    productData.specifications.map((item, index) =>
                      <SpecWrapper key={index}>
                        <SpecName>{item.property}: </SpecName>
                        {item.value}
                      </SpecWrapper>
                    )
                  }
                </> :
                <>
                  {
                    productData.structure.map((item, index) =>
                      <SpecWrapper key={index}>
                        <SpecName>{item.property}: </SpecName>
                        {item.value}
                      </SpecWrapper>
                    )
                  }

                </>

          }
        </CardText>

        <CardPrice>
          {productData.price} руб. / {productData.weight} гр.

        </CardPrice>

      </CardContent>


    </ProductCardWrapper>
  );
};

export default ProductCard;
