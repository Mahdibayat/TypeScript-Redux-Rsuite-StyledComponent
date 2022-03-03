import React from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setDevices } from "../../redux/actions";
import { Button } from "rsuite";
import styled from "styled-components";
import { Outlet } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const H1 = styled.h1`
  color: ${({ theme }) => theme.seccoundColor};
`;

const HomePage = () => {
  const dispatch = useAppDispatch();

  const name = useAppSelector((state) => state.name);
  console.log("name");
  console.log(name);

  return (
    <Container>
      <H1>hi</H1>
      <Button onClick={() => dispatch(setDevices("salam"))}>dispatch</Button>
      <Button onClick={() => dispatch(setDevices("sasdfdsf"))}>sdf</Button>
      <Outlet />
    </Container>
  );
};

export default HomePage;
