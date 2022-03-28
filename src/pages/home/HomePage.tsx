import React from "react";
import { changeTheme, modalConnect } from "../../redux/actions";
import { Button } from "rsuite";
import styled from "styled-components";
import { Outlet } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const H1 = styled.h1`
  color: ${({ theme }) => theme.seccoundColor};
`;

const HomePage = () => {
  return (
    <Container>
      <h1>hi</h1>
    </Container>
  );
};

export default HomePage;
