import React, { FC } from "react";
import styled from "styled-components";

interface Props {
  title: string;
}

const Container = styled.div`
  width: 100%;
  padding: 10px;
  background: black;
`;
const Header = styled.h4`
  color: violet;
`;

const InputContainer: FC<Props> = ({ children, title }) => {
  return (
    <Container>
      <Header>{title}</Header>
      {children}
    </Container>
  );
};

export default InputContainer;
