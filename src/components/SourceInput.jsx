import styled from "styled-components";

function SourceInput() {
  return (
    <SourceInputWrapper>
      <Input type="number" name="source" />
      <DropDownButton>
        <span>KRW</span>
        <DropDownList />
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

const DropDownList = styled.div`
  width: 400px;
  height: 400px;
  border-radius: 5px;
  background-color: white;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  position: absolute;
  bottom: 0;
  transform: translate(0, 100%);
`;
