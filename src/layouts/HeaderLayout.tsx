import { Button } from "rsuite";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  padding: 5px 10px;
  background: ${({ theme }) => theme.darkBack};
  border-bottom: 1px solid #383241;
`;
const PillButton = styled.button`
  border-radius: 100px;
  padding-right: 30px;
  padding-left: 30px;
`;
const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
`;
const LogoArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 10px;
  img {
    height: 60px;
  }
`;

const HeaderLayout = () => {
  return (
    <Container>
      {/* LEFT CONTENT */}
      <Div>
        <Div>
          <LogoArea>
            <img src="/logo.png" alt="logo" />
            <h3>
              <strong>Arix Dex</strong>
            </h3>
          </LogoArea>
        </Div>
        <Div>jdsaFHl</Div>
      </Div>
      {/* RIGHT CONTENT */}
      <Div>
        <h1>HEADER</h1>
        <Button appearance="primary" color="violet" as={PillButton}>
          <strong>Connect Wallet</strong>
        </Button>
      </Div>
    </Container>
  );
};

export default HeaderLayout;
