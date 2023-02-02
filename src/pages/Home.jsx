import { useEffect, useState } from "react";
import styled from "styled-components";
import SourceInput from "../components/SourceInput";
import TargetInput from "../components/TargetInput";
import useExchangeRate from "../hooks/useExchangeRate";

function Home() {
  const [selectedCurrency, setSelectedCurrency] = useState({ source: "KRW", target: "USD" });
  const [currencyRate, setCurrencyRate] = useExchangeRate();

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

  useEffect(() => {
    const { source, target } = selectedCurrency;
    setCurrencyRate(source, target);
  }, [selectCurrency]);

  return (
    <StyledHome>
      <InputContainer>
        <SourceInput currencyRate={currencyRate} selectedCurrency={selectedCurrency} selectCurrency={selectCurrency} />
        <span className="InputContainer-arrow">&#8644;</span>
        <TargetInput currencyRate={currencyRate} selectedCurrency={selectedCurrency} selectCurrency={selectCurrency} />
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
