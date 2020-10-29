import React from 'react';
import styled from 'styled-components/macro';
import { useResponsive } from '../common/responsiveComponents';
import DrinkList from './DrinksList';
import { Link } from 'react-router-dom';

const ContentContainer = styled.div`
  max-width: 1000px;
  flex-direction: column;
  display: flex;
  align-items: center;
  margin: auto;
`;

const PageContainer = styled.div`
  padding-top: 42px;
  padding: 24px;
  display: flex;
  align-items: center;
  width: 100%;
  flex-direction: column;
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
