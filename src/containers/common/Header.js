import styled from 'styled-components/macro';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { DesktopOnly, MobileOnly } from './responsiveComponents';
import { Drawer, Button } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import { FaHome } from 'react-icons/fa';

const AppHeaderContainer = styled.div`
  padding: 8px 12px;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  min-height: 50;
  position: fixed;
  width: 100vw;
  z-index: 99;
  color: rgba(232, 230, 227, 0.85);
  background-color: rgb(24, 26, 27);
`;

const FooterSeparator = styled.span`
  padding: 0 10px;
`;

const HeaderSection = styled.div`
  display: flex;
  align-items: center;
  width: 33%;
`;

const HeaderContentContainer = styled.div`
  max-width: 1200px;
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
  height: 44px;
`;

const StyledHeader = styled.h3`
  color: rgba(232, 230, 227, 0.85);
  margin-bottom: 0;
`;

const StyledTitle = styled.h1`
  color: rgba(232, 230, 227, 0.85);
  margin-bottom: 0;
  letter-spacing: 3px;
`;
const LogoLink = styled(Link)`
  justify-self: center;
  align-self: center;
  color: rgba(232, 230, 227, 0.85);
  font-size: 2rem;
`;

export default function Header() {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };
  return (
    <AppHeaderContainer>
      <DesktopOnly>
        <HeaderContentContainer>
          <HeaderSection style={{ justifyContent: 'flex-start' }}>
            <Link style={{ textDecoration: 'none', color: '#000' }} to="/about">
              <StyledHeader>About</StyledHeader>
            </Link>
            <FooterSeparator>|</FooterSeparator>
            <Link
              style={{ textDecoration: 'none', color: '#000' }}
              to="/getstarted"
            >
              <StyledHeader>Get Started</StyledHeader>
            </Link>
          </HeaderSection>
          <HeaderSection style={{ justifyContent: 'center' }}>
            <LogoLink to="/">
              <FaHome />
            </LogoLink>
          </HeaderSection>
          <HeaderSection style={{ justifyContent: 'flex-end' }}>
            <StyledTitle>Boozy</StyledTitle>
          </HeaderSection>
        </HeaderContentContainer>
      </DesktopOnly>
      <MobileOnly>
        <HeaderContentContainer>
          <HeaderSection style={{ justifyContent: 'flex-start' }}>
            <Button
              style={{
                borderColor: 'transparent',
                backgroundColor: 'transparent',
                color: 'rgba(232, 230, 227, 0.85)',
              }}
              ype="text"
              onClick={showDrawer}
            >
              <MenuOutlined />
            </Button>
          </HeaderSection>
          <HeaderSection style={{ justifyContent: 'center' }}>
            <LogoLink to="/">
              <FaHome />
            </LogoLink>
          </HeaderSection>
          <HeaderSection style={{ justifyContent: 'flex-end' }}>
            <StyledTitle>Boozy</StyledTitle>
          </HeaderSection>
        </HeaderContentContainer>
        <Drawer
          placement="left"
          closable="true"
          onClose={onClose}
          visible={visible}
          key="AppHeader-left-drawer"
        >
          <Link style={{ textDecoration: 'none', color: '#000' }} to="/about">
            <h3>About</h3>
          </Link>
          <Link
            style={{ textDecoration: 'none', color: '#000' }}
            to="/getstarted"
          >
            <h3>Get Started</h3>
          </Link>
        </Drawer>
      </MobileOnly>
    </AppHeaderContainer>
  );
}
