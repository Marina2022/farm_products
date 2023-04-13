import "./styles";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import {PageWrapperMain} from "./styles";
import InputMask from 'react-input-mask';
import styled from "styled-components/macro";
import {Outlet} from "react-router-dom";
import ScrollToTop from "../ScrollToTop";


const StyledInput = styled.input`
  border: red 1px dotted;
`

const Input = (props) => (
  <InputMask mask="+375 (99) 999 99 99" value={props.value} onChange={props.onChange}>
    {(inputProps) => <StyledInput {...inputProps} type="tel"/>}
  </InputMask>
);

const PageWrapper = () => {
  return (
    <>
      <Header/>
      <PageWrapperMain>
        {/*  <Input />*/}
        <Outlet />
      </PageWrapperMain>
      <Footer/>
    </>
  );
};

export default PageWrapper;
