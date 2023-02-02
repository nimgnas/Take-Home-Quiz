import styled from "styled-components";
import currencyJson from "../assets/currency-symbols.json";

function CurrencyList() {
  return (
    <StyledCurrencyList>
      {currencyJson.map((item, id) => (
        <CurrencyWrapper key={id}>
          <span>
            {item.abbreviation} | {item.symbol}
          </span>
        </CurrencyWrapper>
      ))}
    </StyledCurrencyList>
  );
}

export default CurrencyList;

const StyledCurrencyList = styled.div`
  width: 400px;
  height: 400px;
  padding: 2em;
  border-radius: 5px;
  background-color: white;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  position: absolute;
  bottom: 0;
  transform: translate(0, 100%);
  overflow: auto;
`;

const CurrencyWrapper = styled.div`
  height: 50px;
  width: 100%;
  padding: 0 1em;
  display: flex;
  justify-content: flex-start;
  font-size: 0.6rem;
  border-radius: 3px;
  cursor: pointer;

  span {
    color: rgb(46, 67, 105);
  }

  &:hover {
    background-color: #f3f6f8;
  }
`;
