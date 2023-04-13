import styled from "styled-components/macro";
import Title from "../../../sharedComponents/Title/Title";
import Button from "../../../sharedComponents/Button/Button";

export const MakeOrderWrapper = styled.div`
  background: white;
  padding: 24px 16px 12px 20px;
  width: 363px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 0px 1px rgba(0, 0, 0, 0.04);
  margin-bottom: 18px;
`

export const StyledTitle = styled(Title)`
margin-bottom: 24px;`

export const StyledInput = styled.input`
  width: 100%;
  background: #F7F7F7;
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 10px;
  margin-bottom: 20px;
  &::placeholder {
    font-size: 14px;
  }
`


export const PriceText = styled.div`
  font-size: 14px;
  line-height: 150%;
  margin-bottom: 8px;
`
export const PriceValue = styled.div`
  font-weight: 700;
  font-size: 24px;
  line-height: 130%;
  margin-bottom: 32px;
`

export const StyledButton = styled(Button)`
width: 100%;`
