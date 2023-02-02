import { useState } from "react";
import styled from "styled-components";
import CurrencyList from "./CurrencyList";

function SourceInput() {
  const [isToggled, setIsToggled] = useState(false);
  return (
    <SourceInputWrapper>
      <Input type="number" name="source" />
      <DropDownButton onClick={() => setIsToggled(!isToggled)}>
        <span>KRW</span>
        {isToggled && <CurrencyList />}
      </DropDownButton>
    </SourceInputWrapper>
  );
}

export default SourceInput;

const SourceInputWrapper = styled.div`
  height: 100%;
  width: 45%;
  display: flex;
  border: 1px solid;
`;

const Input = styled.input`
  height: 100%;
  width: 70%;
  padding: 0 1em;
  font-size: 1.2rem;
`;

const DropDownButton = styled.div`
  height: 100%;
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.8rem;
  background-color: rgb(46, 67, 105);
  position: relative;

  span {
    color: white;
  }
`;
