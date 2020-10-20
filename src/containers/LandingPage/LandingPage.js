import React from 'react';
import styled from 'styled-components/macro';
import Services from './Services';
import HeroBanner from './HeroBanner';

const PageContainer = styled.div`
  width: 100%;
`;

const ContentContainer = styled.div`
  max-width: 1000px;
  flex-direction: column;
  display: flex;
  align-items: center;
  margin: auto;
`;

const LandingPage = () => {
  return (
    <PageContainer>
      <HeroBanner />
      <ContentContainer>
        <br />
        <Services />
      </ContentContainer>
    </PageContainer>
  );
};

export default LandingPage;
