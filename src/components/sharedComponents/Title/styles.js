import styled from "styled-components/macro";

export const StyledTitle = styled.h1`
  font-size: 28px;
  line-height: 115%;
  ${({size}) => {
    if (size === 'big') return `font-size: 36px;  line-height: 115%;`;
    if (size === 'small') return ` font-size: 18px;  line-height: 115%;`;
  }}
`
