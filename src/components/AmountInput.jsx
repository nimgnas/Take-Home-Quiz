import { useState } from "react";
import styled from "styled-components";
import CurrencyList from "./CurrencyList";

function AmountInput({ type, selectedCurrency, selectCurrency, onChange, amount }) {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <SourceInputWrapper>
      <Input type="number" name={`${type}Amount`} onChange={(e) => onChange(e.target)} value={amount} />
      <DropDownButton id={`${type}-btn`} onClick={() => setIsToggled(!isToggled)}>
        <span className="DropDownButton-abbreviation">{selectedCurrency[type]}</span>
        {isToggled && <CurrencyList selectCurrency={selectCurrency} />}
      </DropDownButton>
    </SourceInputWrapper>
  );
}

export default AmountInput;

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
  font-size: 1.5rem;
  background-color: rgb(46, 67, 105);
  position: relative;

  .DropDownButton-abbreviation {
    color: white;
  }
`;
