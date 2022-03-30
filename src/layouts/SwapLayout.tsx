import React from "react";
import styled from "styled-components";
import InputContainer from "../components/InputContainer";
import { Icon } from "@rsuite/icons";
import { MdOutlineSwapVert } from "react-icons/md";
import { Col, Form, Row, SelectPicker } from "rsuite";

const Container = styled.div`
  width: 100%;
  display: flex;
  gap: 15px;
  flex-direction: column;
`;
const SwapArea = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const SwapLayout = () => {
  return (
    <Container>
      <Form fluid>
        <InputContainer title="you Pay">
          <Row>
            <Col xs={16}>
              <Form.Control
                as={SelectPicker}
                name="payToken"
                data={[{ label: "hey", value: "hoy" }]}
              />
            </Col>
            <Col xs={8}>
              <Form.Control type="number" step={0.1} name="payCount" />
            </Col>
          </Row>
        </InputContainer>
        <SwapArea>
          <Icon
            as={MdOutlineSwapVert}
            style={{
              fontSize: "24px",
              transform: "scale(1.5)",
              cursor: "pointer",
            }}
          />
        </SwapArea>
        <InputContainer title="you Receive">
          <Row>
            <Col xs={16}>
              <Form.Control
                as={SelectPicker}
                name="reciveToken"
                data={[{ label: "hey", value: "hoy" }]}
              />
            </Col>
            <Col xs={8}>
              <Form.Control type="number" step={0.1} name="reciveCount" />
            </Col>
          </Row>
        </InputContainer>
      </Form>
    </Container>
  );
};

export default SwapLayout;
