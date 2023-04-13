import styled from "styled-components/macro";
import Title from "../../../sharedComponents/Title/Title";
import checkedBox from "../../../../assets/checkedBox.svg"
import uncheckedBox from "../../../../assets/uncheckedBox.svg"

export const ChooseWrapper = styled.div`
  background: white;
  padding: 24px 16px 12px 20px;
  width: 363px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 0px 1px rgba(0, 0, 0, 0.04);
  margin-bottom: 18px;
`

export const ProductRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 14px;
`

export const StyledTitle = styled(Title)`
  margin-bottom: 12px;
`

export const VisuallyHiddenInput = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  border: 0;
  clip: rect(0 0 0 0);
`

export const Check = styled.input`
  height: 24px;
  width: 24px;
  background: yellow;
  border: 1px solid #F6F6F6;
  outline: none;
`

export const StyledLabel = styled.label`
  width: 24px;
  height: 24px;
  display: inline-block;

  ${({isChecked}) => isChecked ?
          `background-image: url(${checkedBox})` :
          `background-image: url(${uncheckedBox});`
  }

`
