import "./styles"
import Logo from "../../sharedComponents/Logo/Logo";
import {MainFooter} from "./styles";

const Footer = () => {
  return (
    <MainFooter>
      <Logo />
      <div>
        Создано 2021
      </div>
    </MainFooter>
  );
};

export default Footer;
