import { Link } from "react-router-dom";
import { Button, Dropdown, Modal } from "rsuite";
import styled from "styled-components";
import { Icon } from "@rsuite/icons";
import { IoMdSettings } from "react-icons/io";
import { BiWallet } from "react-icons/bi";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { modalConnect, modalSetting } from "../redux/actions";
import ModalConnect from "../components/modals/ModalConnect";
import ModalSetting from "../components/modals/ModalSetting";

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
const LogoArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 10px;
  img {
    height: 60px;
  }
`;

const HeaderLayout = () => {
  const dispatch = useAppDispatch();
  return (
    <Container>
      {/* LEFT CONTENT */}
      <Div>
        <Div>
          <LogoArea>
            <Link to="/">
              <img src="/logo.png" alt="logo" />
            </Link>
          </LogoArea>
        </Div>
        <Div>
          <a
            href="https://site.arix.exchange/"
            target="_blank"
            rel="noreferrer"
          >
            About
          </a>
          <Link to="/roadmap">Road Map</Link>
          <Link to="/liquidity">Liquidity</Link>
          <Link to="/farms">Farms</Link>
          <Link to="/pools">Pools</Link>
        </Div>
      </Div>
      {/* RIGHT CONTENT */}
      <Div>
        <Div>
          <Dropdown title="Select Network" value="2">
            <Dropdown.Item value="1">Ethereum</Dropdown.Item>
            <Dropdown.Item value="2">Binance</Dropdown.Item>
            <Dropdown.Item value="3">_</Dropdown.Item>
          </Dropdown>
        </Div>
        <Div>
          <Button
            appearance="primary"
            color="violet"
            as={PillButton}
            onClick={() => dispatch(modalConnect(true))}
          >
            <strong>
              <Icon as={BiWallet} style={{ fontSize: "25px" }} /> Connect Wallet
            </strong>
          </Button>
        </Div>
        <Div>
          <Icon
            as={IoMdSettings}
            style={{ fontSize: "30px", cursor: "pointer" }}
            onClick={() => dispatch(modalSetting(true))}
          />
        </Div>
      </Div>
      <ModalConnect />
      <ModalSetting />
    </Container>
  );
};

export default HeaderLayout;
