import styled from "styled-components";

function Home() {
  return (
    <StyledHome>
      <InputContainer>
        <SourceInputWrapper>
          <Input type="number" />
          <DropDownDiv>
            <span>KRW</span>
          </DropDownDiv>
        </SourceInputWrapper>
        <span>&#8644;</span>
        <TargetInputWrapper>
          <Input type="number" />
          <DropDownDiv>
            <span>USD</span>
          </DropDownDiv>
        </TargetInputWrapper>
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

  span {
    display: block;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2em;
  }
`;

const SourceInputWrapper = styled.div`
  height: 100%;
  width: 45%;
  display: flex;
  border: 1px solid;
`;

const TargetInputWrapper = styled.div`
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

const DropDownDiv = styled.div`
  height: 100%;
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.8rem;
  background-color: rgb(46, 67, 105);

  span {
    color: white;
  }
`;
