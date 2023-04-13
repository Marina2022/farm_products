import styled from "styled-components/macro";
import {Link} from "react-router-dom";

export const StyledHeader = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding-left: 90px;
  padding-right: 90px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 0px 1px rgba(0, 0, 0, 0.04);`

export const LinkToMain = styled(Link)`
  font-weight: bold;
  margin-right: 40px;
`
