import styled from "styled-components";
import GlobalStyles from "../../styles/resetCss";

function Layout({ children }) {
  return (
    <>
      <GlobalStyles />
      <StyledLayout>{children}</StyledLayout>
    </>
  );
}

export default Layout;

const StyledLayout = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
