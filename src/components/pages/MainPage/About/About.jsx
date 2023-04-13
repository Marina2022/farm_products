import "./styles"
import Title from "../../../sharedComponents/Title/Title";
import {AboutContent, AboutSection, AboutText} from "./styles";

const About = () => {
  return (
    <AboutSection>
      <AboutContent>
        <Title size="big">Магазин фермерских продуктов с&nbsp;доставкой</Title>
        <AboutText>
          Все продукты изготавливаются под заказ. Фермеры начинают готовить продукты за день до отправки заказа
          клиентам. Именно поэтому мы принимаем заказы заранее и доставляем продукты максимально свежими.
        </AboutText>
      </AboutContent>
    </AboutSection>
  );
};

export default About;
