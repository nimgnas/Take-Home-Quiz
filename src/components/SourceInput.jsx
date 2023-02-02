import { useState } from "react";
import styled from "styled-components";
import CurrencyList from "./CurrencyList";

function SourceInput({ currencyRate, selectedCurrency, selectCurrency }) {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <SourceInputWrapper>
      <Input type="number" name="source" />
      <DropDownButton id="source-btn" onClick={() => setIsToggled(!isToggled)}>
        <span className="DropDownButton-abbreviation">{selectedCurrency.source}</span>
        {isToggled && <CurrencyList selectCurrency={selectCurrency} />}
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
  font-size: 1.5rem;
  background-color: rgb(46, 67, 105);
  position: relative;

  .DropDownButton-abbreviation {
    color: white;
  }
`;
