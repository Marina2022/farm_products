import "./styles";
import Title from "../Title/Title";
import {FeatureCardHeader, FeatureCardTitleWrapper, StyledFeatureCard} from "./styles";
import {P} from "../../styledElements";

const FeatureCard = ({title, owner, isNegative, image, about}) => {
  return (
    <StyledFeatureCard isNegative={isNegative}>
      <FeatureCardHeader>
        <img src={image} alt="title"/>
        <FeatureCardTitleWrapper>
          <span>{owner}</span>
          <Title size="small">{title}</Title>
        </FeatureCardTitleWrapper>
      </FeatureCardHeader>
      <P dangerouslySetInnerHTML={{__html: about}}>
      </P>
    </StyledFeatureCard>
  )
}
export default FeatureCard



