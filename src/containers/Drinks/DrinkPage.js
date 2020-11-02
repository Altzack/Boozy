import React from 'react';
import styled from 'styled-components/macro';
import { useResponsive } from '../common/responsiveComponents';
import DrinkList from './DrinksList';
import { Link } from 'react-router-dom';

const ContentContainer = styled.div`
  flex-direction: column;
  display: flex;
  align-items: center;
`;

const PageContainer = styled.div`
  margin-top: 42px;
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 40px;
  @media (max-width: 480px) {
    margin-top: 10px;
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  letter-spacing: 3px;
  text-transform: capitalize;
  color: #fff;
  margin-bottom: 10px;
  @media (max-width: 480px) {
    font-size: 22px;
  }
`;

const Button = styled.button`
  color: #fff;
  width: 200px;
  height: 36px;
  border-radius: 18px;
  background-color: #1c89ff;
  border: solid 1px transparent;
  font-size: 18px;
  font-weight: 400;
  cursor: pointer;
  transition: all 0.1s ease-in-out;
  :hover {
    background-color: transparent;
    border-color: #fff;
    transition: all 0.1s ease-in-out;
  }
`;

export default function DrinkPage() {
  const { isTabletOrMobile } = useResponsive();
  return (
    <PageContainer mobile={isTabletOrMobile}>
      <ContentContainer>
        <Title>Add or browse drinks</Title>
        <Link style={{ color: '#fff' }} to={`/AddDrink`}>
          <Button>Add drink</Button>
        </Link>
      </ContentContainer>
      <br />
      <ContentContainer>
        <DrinkList />
      </ContentContainer>
    </PageContainer>
  );
}
