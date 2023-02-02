import styled from "styled-components";
import SourceInput from "../components/SourceInput";
import TargetInput from "../components/TargetInput";
import useExchangeRate from "../hooks/useExchangeRate";
import useInputs from "../hooks/useInputs";

function Home() {
  const [form, onChange] = useInputs({
    source: 0,
  });

  return (
    <StyledHome>
      <InputContainer>
        <SourceInput />
        <span className="InputContainer-arrow">&#8644;</span>
        <TargetInput />
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
