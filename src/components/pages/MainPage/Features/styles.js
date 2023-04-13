import styled from "styled-components/macro";
import Button from "../../../sharedComponents/Button/Button";
import {Ul} from "../../../styledElements";
import Title from "../../../sharedComponents/Title/Title";


export const StyledFeatures = styled.section`
  padding: 100px 90px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 0px 1px rgba(0, 0, 0, 0.04);  
`

export const FeaturesBtn = styled(Button)`margin: 0 auto;`
export const StyledFeaturesTitle = styled(Title)`text-align: center;`

export const FeatureList = styled(Ul)`
  margin-top: 64px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 44px;

  li {
    width: 49%;
    @media (max-width: 768px) {
      .feature-list li {
        width: 100%;
      }
    }
  }
`
