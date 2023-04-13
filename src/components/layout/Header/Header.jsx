import "./styles"
import Logo from "../../sharedComponents/Logo/Logo";
import Button from "../../sharedComponents/Button/Button";
import {LinkToMain, StyledHeader} from "./styles";
import {useLocation} from "react-router-dom";
import {AppRoute} from "../../consts";


const Header = () => {
  const isOrder = useLocation().pathname === AppRoute.ORDER;

  return (
    <StyledHeader>
      <Logo />
      {
        isOrder  ? <LinkToMain to='/'>Главная</LinkToMain> : <Button to="order"/>
      }

    </StyledHeader>
  );
};

export default Header;
