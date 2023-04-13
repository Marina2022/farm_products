import "./styles"
import {StyledTitle} from "./styles";

const Title = ({size, children, className}) => {
  let options = {tag: ''};

  switch (size) {
    case "big": options = {tag: "h1"};
    break
    case "small": options = {tag: "h3"};
    break
    default: options = {tag: "h2"};
  }
  return (
    <StyledTitle size={size} as={options.tag} className={className}>
      {children}
    </StyledTitle>
  );
};

export default Title;
