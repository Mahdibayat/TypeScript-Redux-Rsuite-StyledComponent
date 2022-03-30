import React, { useState } from "react";
import { Nav } from "rsuite";
import styled from "styled-components";
import MainBox from "../../components/MainBox";
import SwapLayout from "../../layouts/SwapLayout";
import LimitLayout from "../../layouts/LimitLayout";

const Container = styled.div`
  width: 100%;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
`;
const TextCenter = styled.div`
  text-align: center;
`;

const HomePage = () => {
  const [activeTab, setActiveTab] = useState("swap");

  return (
    <Container>
      <TextCenter>
        <h3>THE MOST EFFICIENT DEFI AGGREGATOR</h3>
        <p>
          Access the most liquidity, lowest slippage and best exchange rates
          across Ethereum, Binance Smart Chain and Polygon.
        </p>
      </TextCenter>
      <MainBox>
        <Nav
          justified
          appearance="subtle"
          activeKey={activeTab}
          onSelect={(val) => setActiveTab(val)}
          style={{ textAlign: "center" }}
        >
          <Nav.Item eventKey="swap">Swap</Nav.Item>
          <Nav.Item eventKey="limit">Limit</Nav.Item>
        </Nav>
        {activeTab === "swap" && <SwapLayout />}
        {activeTab === "limit" && <LimitLayout />}
      </MainBox>
    </Container>
  );
};

export default HomePage;
