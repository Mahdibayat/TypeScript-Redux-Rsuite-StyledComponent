import React from "react";
import { Link } from "react-router-dom";
import { Button } from "rsuite";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2 {
    margin-bottom: 20px;
  }
`;

const NotFindPage = () => {
  return (
    <Container>
      <h2>NotFindPage 404</h2>
      <Link to="/">
        <Button appearance="primary" color="violet">
          BackToHome
        </Button>
      </Link>
    </Container>
  );
};

export default NotFindPage;
