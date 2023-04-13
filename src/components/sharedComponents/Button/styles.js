import styled from "styled-components/macro";
import {Link} from "react-router-dom";

export const Btn = styled(Link)`
  background: #FC9B27;
  color: #fff;
  width: 260px;
  height: 60px;
  font-weight: 700;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: #FC7427;
  }

  &:active {
    background: #FC7427;
    box-shadow: inset 0px 4px 0px rgba(0, 0, 0, 0.14);
  }

  &:disabled {
    background: #FFdd39;

    &:active {
      box-shadow: none;
    }
  }

`

