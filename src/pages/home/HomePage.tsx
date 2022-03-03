import React from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setDevices } from "../../redux/actions";
import { Button } from "rsuite";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HomePage = () => {
  const dispatch = useAppDispatch();

  const name = useAppSelector((state) => state.name);
  console.log("name");
  console.log(name);

  return (
    <Container>
      <h1>hi</h1>
      <Button onClick={() => dispatch(setDevices("salam"))}>dispatch</Button>
      <Button onClick={() => dispatch(setDevices("sasdfdsf"))}>sdf</Button>
    </Container>
  );
};

export default HomePage;
