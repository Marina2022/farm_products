import {P} from "../../../styledElements";
import styled from "styled-components/macro";

import bg1 from "../../../../assets/man.svg"
import bg2 from "../../../../assets/circle.svg"

export const AboutSection = styled.div`  
    padding: 183px 90px;
    background: url(${bg1}) no-repeat bottom 0 right 200px,
    url(${bg2}) no-repeat center right 100px;
    background-color: #D8ECFE;
  
`
export const AboutContent = styled.div`
  max-width: 540px;`


export const AboutText = styled(P)`
  margin-top: 24px;
`

