import React from 'react';
import styled from 'styled-components/macro';
import { Button, Typography } from 'antd';
import { Link } from 'react-router-dom';
import { useResponsive } from '../common/responsiveComponents';

const { Title, Paragraph } = Typography;

const CTAContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0;
  padding: 15px;
  border-radius: 5px;
  height: 100%;
  z-index: 2;
  position: relative;
  @media (max-width: 290px) {
    margin-right: 100px;
  }
  @media (min-width: 319px) {
    margin-right: 70px;
  }
  @media (min-width: 330px) {
    margin-right: 50px;
  }
  @media (min-width: 365px) {
    margin-right: 35px;
  }
  @media (min-width: 400px) {
    margin-right: 10px;
  }
  @media (min-width: 450px) {
    margin-right: 0px;
  }
`;

const HeroBannerContainer = styled.div`
  min-width: 400px;
  width: 100%;
  position: relative;
  background-color: rgba(50, 50, 50, 0.05);
  overflow: hidden;
  display: flex;
  justify-content: center;
`;

const HeroImage = styled.div`
  float: right;
  overflow-y: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 1;
  left: -20px;
  top: -20%;
  background: url(${({ src }) => src});
  background-repeat: no-repeat;
  background-size: cover;
  width: 120%;
  height: 120%;
  filter: blur(20px);
`;

const DarkBackground = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

const Background = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  filter: blur(50px);
  z-index: -1;
`;

const CTAButton = styled(Button)`
  margin: 5px;
  background-color: #1c89ff;
  border: #ff294a;
  &:hover {
    background-color: #3e9afc;
  }
`;

const StyledParagraph = styled(Paragraph)`
  /* text-shadow: -1px -1px 0px rgba(245, 245, 245),
    0px -1px 0px rgba(245, 245, 245), 1px -1px 0px rgba(245, 245, 245),
    -1px 0px 0px rgba(245, 245, 245), 1px 0px 0px rgba(245, 245, 245),
    -1px 1px 0px rgba(245, 245, 245), 0px 1px 0px rgba(245, 245, 245),
    1px 1px 0px rgba(245, 245, 245); */
  max-width: 450px;
  font-size: 20px;
  text-align: center;
  color: white;
  font-style: italic;
`;

const Row = styled.div`
  display: flex;
`;

const HeroBanner = () => {
  const { isTabletOrMobile } = useResponsive();

  return (
    <HeroBannerContainer>
      <CTAContainer>
        <br />
        <Title
          level={2}
          style={{
            color: 'white',
            maxWidth: '600px',
            textAlign: 'center',
            marginBottom: '5px',
          }}
        >
          Welcome to Boozy, a platform to connect through drink recipes.
        </Title>
        <br />
        <br />
        <StyledParagraph>
          Create fun, unique and delicious mixed drink recipes that you can
          share with all your friends!
        </StyledParagraph>
        <br />
        <Row>
          <Link to="/drinks">
            <CTAButton
              style={{ width: 124 }}
              type="primary"
              shape="round"
              size="large"
            >
              Drinks
            </CTAButton>
          </Link>
          <Link to="/about">
            <CTAButton
              style={{ width: 124 }}
              type="primary"
              shape="round"
              size="large"
            >
              About
            </CTAButton>
          </Link>
        </Row>
        <br />
        <Background />
      </CTAContainer>
      <HeroImage mobile={isTabletOrMobile} src="/club-min.jpg" alt="Banner" />
      <DarkBackground />
    </HeroBannerContainer>
  );
};

export default HeroBanner;
