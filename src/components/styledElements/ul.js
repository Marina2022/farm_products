import styled from "styled-components/macro"
import {css} from "styled-components";

const Ul = styled.ul`
  list-style: none;
${({inline})=> inline ? css`display: flex;`: ``}

`
export default Ul;
