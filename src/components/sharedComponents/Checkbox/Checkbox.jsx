import {VisuallyHiddenInput} from "../../pages/Order/Choose/chooseStyles";

const Checkbox = ({checked, styledLabel, onClick}) => {
  const StyledLabel = styledLabel;
  return (
    <div>
      <VisuallyHiddenInput type="checkbox"/>
      <StyledLabel isChecked={checked} onClick={onClick} />
    </div>
  );
};

export default Checkbox;
