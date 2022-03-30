import React, { FunctionComponent } from "react";
import styled from "styled-components";

interface CtProps {
  Mode: string;
}

const Container = styled.div<CtProps>`
  width: 95%;
  max-width: 500px;
  padding: 15px;
  border-radius: 5px;
  background: ${(props) =>
    props.Mode === "dark" ? "rgba(0,0,0,0.4);" : "rgba(255,255,255,0.4)"};
  backdrop-filter: blur(5px);
  box-shadow: 0 0 42px -30px skyblue;
`;

const MainBox: FunctionComponent = ({ children }) => {
  return <Container Mode={"dark"}>{children}</Container>;
};

export default MainBox;
