import "./styles"
import {features} from "../../../../mocks/feature-list";
import FeatureCard from "../../../sharedComponents/Feature-card/Feature-card";
import {FeaturesBtn, FeatureList, StyledFeatures, StyledFeaturesTitle} from "./styles";
import {AppRoute} from "../../../consts";

const Features = () => {
  return (
    <StyledFeatures >
      <StyledFeaturesTitle>
        Почему фермерские продукты лучше?
      </StyledFeaturesTitle>
      <FeatureList>
        {features.map((feature) => <li key={feature.id} style={{"marginBottom": 20}}><FeatureCard  {...feature} /></li>)}
      </FeatureList>
      <FeaturesBtn to={AppRoute.ORDER} />
    </StyledFeatures>
  );
};

export default Features;
