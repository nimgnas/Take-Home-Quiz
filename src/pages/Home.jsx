import { useEffect, useState } from "react";
import styled from "styled-components";
import AmountInput from "../components/AmountInput";
import useExchangeRate from "../hooks/useExchangeRate";
import { fromSourceToTarget, fromTargetToSource } from "../utils";

function Home() {
  const [selectedCurrency, setSelectedCurrency] = useState({ source: "KRW", target: "USD" });
  const [inputs, setInputs] = useState({ input: "", amount: "" });
  const [currencyRate, setCurrencyRate] = useExchangeRate();

  const sourceChange = (amount) => {
    setInputs({ input: "source", amount });
  };

  const targetChange = (amount) => {
    setInputs({ input: "target", amount });
  };

  // dropdown에서 통화를 선택하는 함수
  const selectCurrency = (e) => {
    const calledLocation = e.target.parentElement.parentElement.id;
    const currency = e.target.querySelector(".CurrencyWrapper-abbreviation").innerText.slice(0, 3);

    if (calledLocation === "source-btn") {
      setSelectedCurrency((prev) => ({ ...prev, source: currency }));
    }
    if (calledLocation === "target-btn") {
      setSelectedCurrency((prev) => ({ ...prev, target: currency }));
    }
  };

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
          onChange={sourceChange}
          amount={input === "target" ? fromSourceToTarget(amount, currencyRate) : amount}
        />
        <span className="InputContainer-arrow">&#8644;</span>
        <AmountInput
          type="target"
          currencyRate={currencyRate}
          selectedCurrency={selectedCurrency}
          selectCurrency={selectCurrency}
          onChange={targetChange}
          amount={input === "source" ? fromTargetToSource(amount, currencyRate) : amount}
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
