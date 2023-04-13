import styled from "styled-components/macro";
import Title from "../Title/Title";

export const ProductCardWrapper = styled.div`
  width: 687px;
  padding: 20px;
  background: white;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 0px 1px rgba(0, 0, 0, 0.04);
  margin-bottom: 12px;
  display: flex;
  height: 288px;
`
export const ImgWrapper = styled.div`
  width: 248px;
  height: 248px;
`
export const CardContent = styled.div`
  width: 100%;
  margin-left: 20px;
`
export const StyledTitle = styled(Title)`
  margin-bottom: 14px;
`

export const Tab = styled.div`
  cursor: pointer;
  font-size: 14px;
  line-height: 150%;
  background: #F7F7F7;
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 8px 12px;
  margin-right: 8px;
  ${({active}) => active ? `background: #88AA4D; color: white` : ``}
`

export const CardText = styled.div`
  margin-top: 16px;
  margin-bottom: 14px;
  font-size: 14px;
  line-height: 150%;
  height: 105px;
  overflow: auto;
`
export const CardPrice = styled.span`
  padding: 4px 8px;
  background: #D8ECFE;
  font-weight: 700;
  font-size: 14px;  
`

export const SpecName = styled.span`
  font-weight: bold;
  font-size: 14px;
`
export const SpecWrapper = styled.div`
  font-size: 14px;
  line-height: 24px;    
`

