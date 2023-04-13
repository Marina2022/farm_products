import styled from "styled-components/macro";

export const FeatureCardTitleWrapper = styled.div`
  align-self: start;    
`

export const StyledFeatureCard = styled.div`
  height: 100%;
  padding: 20px;
  ${({isNegative})=>{
    if (isNegative) { 
      return `background-color: #F8DDD7;`
    } else  return `background-color: #E1EDCE;`;
  }}
  
  
  img {
    width: 52px;
    height: 52px;
    margin-right: 20px;
    margin-bottom: 20px;
  }

  span {
    color: #fff;
    font-size: 14px;
    line-height: 150%;
    padding: 2px 10px;
    ${({isNegative})=>{
      if (isNegative) {
        return `background-color: #F75531;`
      } else  return `background-color: #88AA4D;`;
    }}
  }

`

  export const FeatureCardHeader = styled.div`
  display: flex
  `
