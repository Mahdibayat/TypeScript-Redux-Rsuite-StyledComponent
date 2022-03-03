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

const HeaderLayout = () => {
  return (
    <Container>
      {/* LEFT CONTENT */}
      <Div>
        <h1>HEADER</h1>
        <h1>HEADER</h1>
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
