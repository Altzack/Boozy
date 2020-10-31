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
  padding: 50px;
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
  background-color: #fff;
  color: #000;
  margin-right: 10px;
  font-weight: 600;
  border-radius: 5px;
`;

export default function DrinkPage() {
  const { isTabletOrMobile } = useResponsive();
  return (
    <PageContainer mobile={isTabletOrMobile}>
      <ContentContainer>
        <Title>Add or browse drinks</Title>
        <Button>
          <Link style={{ color: '#000' }} to={`/AddDrink`}>
            Add Drink
          </Link>
        </Button>
      </ContentContainer>
      <br />
      <ContentContainer>
        <DrinkList />
      </ContentContainer>
    </PageContainer>
  );
}
