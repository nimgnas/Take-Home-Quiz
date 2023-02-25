import { useEffect, useState } from "react";
import styled from "styled-components";
import AmountInput from "../components/AmountInput";
import useExchangeRate from "../hooks/useExchangeRate";
import { fromSourceToTarget, fromTargetToSource } from "../utils";
import useSelectCurrency from "../hooks/useSelectCurrency";

function Home() {
  const [inputs, setInputs] = useState({ input: "", amount: "" });
  const [selectedCurrency, selectCurrency] = useSelectCurrency()
  const [currencyRate, setCurrencyRate] = useExchangeRate();

  const inputChange = (eventTarget) => {
    const {name, value} = eventTarget``
    setInputs({input: name, amount: value})
  }

  // 통화가 변경될때마다 환율 계산
  useEffect(() => {
    const { source, target } = selectedCurrency;
    setCurrencyRate(source, target);
  }, [selectCurrency]);

  const { input, amount } = inputs;

  return (
    <StyledHome>
      <InputContainer>
        <AmountInput
          type="source"
          currencyRate={currencyRate}
          selectedCurrency={selectedCurrency}
          selectCurrency={selectCurrency}
          onChange={inputChange}
          amount={input === "targetAmount" ? fromSourceToTarget(amount, currencyRate) : amount}
        />
        <span className="InputContainer-arrow">&#8644;</span>
        <AmountInput
          type="target"
          currencyRate={currencyRate}
          selectedCurrency={selectedCurrency}
          selectCurrency={selectCurrency}
          onChange={inputChange}
          amount={input === "sourceAmount" ? fromTargetToSource(amount, currencyRate) : amount}
        />
      </InputContainer>
    </StyledHome>
  );
}

export default Home;

const StyledHome = styled.div`
  height: 250px;
  width: 1000px;
  padding: 50px 30px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

const InputContainer = styled.div`
  height: 65px;
  width: 100%;
  display: flex;
  justify-content: space-between;

  .InputContainer-arrow {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2em;
  }
`;
