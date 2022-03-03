import React from "react";
import styled from "styled-components";
import { Popover, Whisper, Button } from "rsuite";
import { Icon } from "@rsuite/icons";
import { AiOutlineMail } from "react-icons/ai";
import { BsTelegram, BsTwitter, BsGithub } from "react-icons/bs";
const Container = styled.div`
  width: 100%;
  display: flex;
`;

const Items = styled.div`
  display: flex;
`;

const Item = styled.div`
  margin-right: 10px;
  i {
    color: rgba(255, 255, 255, 0.5);
    cursor: pointer;
    &:hover {
      color: rgba(255, 255, 255, 0.7);
      animation: H-Rotate 1200ms;
      animation-iteration-count: 1;
    }
  }
`;

const Speaker = ({ ...props }) => {
  return (
    <Popover title="Telegram" {...props}>
      <a href="https://t.me/ArixExchange" target="_blank" rel="noreferrer">
        <Button block>Group</Button>
      </a>
      <a href="https://t.me/arixdex" target="_blank" rel="noreferrer">
        <Button block>Channel</Button>
      </a>
    </Popover>
  );
};

const SocialContact = () => {
  return (
    <Container>
      <a href="mailto:support@arix.exchange" target="_blank" rel="noreferrer">
        <Item>
          <Icon as={AiOutlineMail} style={{ fontSize: "25px" }} />
        </Item>
      </a>
      <a href="https://t.me/arixdex" target="_blank" rel="noreferrer">
        <Item>
          <Icon as={BsTelegram} style={{ fontSize: "25px" }} />
        </Item>
      </a>
      <a
        href="https://twitter.com/arixdexofficial"
        target="_blank"
        rel="noreferrer"
      >
        <Item>
          <Icon as={BsTwitter} style={{ fontSize: "25px" }} />
        </Item>
      </a>
      <a
        href="https://github.com/arix-exchange"
        target="_blank"
        rel="noreferrer"
      >
        <Item>
          <Icon as={BsGithub} style={{ fontSize: "25px" }} />
        </Item>
      </a>
    </Container>
  );
};

export default SocialContact;
