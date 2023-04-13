import styled from "styled-components/macro";
import {ReactComponent as LogoImg} from "../../../assets/logo.svg";

export const LogoWrapper = styled.div`
  display: flex;
  text-align: center;

  a {
    margin-left: 24px;
    font-size: 28px;
    font-weight: 700;
    line-height: 44px;
  }
`

export const StyledLogoImg = styled(LogoImg)`
  width: 44px;
  height: 44px;
`
