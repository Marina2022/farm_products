import "./styles"
import {LogoWrapper, StyledLogoImg} from "./styles";
import {Link} from "react-router-dom";

const Logo = () => {
  return (
    <LogoWrapper>
      <StyledLogoImg alt="logo"/>
      <Link to="/" className="logo__text">Фермерские продукты</Link>
    </LogoWrapper>
  );
};

export default Logo;
