import React from 'react';
import styled from 'styled-components/macro';
import { useResponsive } from '../common/responsiveComponents';

const ContentContainer = styled.div`
  flex-direction: column;
  font-weight: 200;
  display: flex;
  align-items: center;
  margin: auto;
  @media (max-width: 480px) {
    font-size: 20px;
    padding: 10px;
  }
<<<<<<< HEAD
=======

>>>>>>> 60897d0f27289736e6ad92a9b8d023c63a7b23f1
  @media (min-width: 750px) {
    font-size: 20px;
    max-width: 650px;
    padding: 10px;
  }
<<<<<<< HEAD
=======

>>>>>>> 60897d0f27289736e6ad92a9b8d023c63a7b23f1
  @media (min-width: 1023px) {
    max-width: 900px;
    font-size: 30px;
    padding: 10px;
  }
  @media (min-width: 1023px) {
    max-width: 900px;
    font-size: 30px;
    padding: 10px;
  }
`;

const PageContainer = styled.div`
  padding-top: 42px;
  font-family: Rubik;
  padding: 15px;
  display: flex;
  font-size: 28px;
  color: #fff;
  align-items: center;
  width: 100%;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 50px;
  font-weight: 300;
  text-align: left;
  letter-spacing: 3px;
  text-transform: capitalize;
  color: #fff;
  margin-bottom: 10px;
  @media (max-width: 480px) {
    font-size: 30px;
  }
`;

export default function LandingPage() {
  const { isTabletOrMobile } = useResponsive();
  return (
    <PageContainer mobile={isTabletOrMobile}>
      <Title>About Boozy</Title>
      <br />
      <ContentContainer>
        During this time where we can't attend parties with our friends, Boozy
        allows you to connect by sharing drink recipes. With Boozy you can
        browse, create and share custom drink recipes with your friends.
        <br />
        <br />
        Drink responsibly!
      </ContentContainer>
    </PageContainer>
  );
}
