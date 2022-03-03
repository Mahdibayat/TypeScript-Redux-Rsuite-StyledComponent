import React from "react";
import styled from "styled-components";
import SocialContact from "../components/SocialContact";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 0;
  @media only screen and (max-width: 845px) {
    position: inherit;
  }
`;
const TopContent = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: space-between;
`;
const LeftOption = styled.div``;
const ContactArea = styled.div``;

const FooterLayout = () => {
  return (
    <Container>
      {/*TOP*/}
      <TopContent>
        <LeftOption>
          <span> </span>
        </LeftOption>
        <ContactArea>
          <SocialContact />
        </ContactArea>
      </TopContent>
    </Container>
  );
};

export default FooterLayout;
