import React from 'react';
import styled from 'styled-components/macro';
import { useResponsive } from '../common/responsiveComponents';

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
  @media (max-width: 480px) {
    width: 90%;
  }
`;

export default function GetStarted() {
  const { isTabletOrMobile } = useResponsive();
  return (
    <PageContainer mobile={isTabletOrMobile}>
      <ContentContainer>
        Lorem Lorem esse adipisicing sunt mollit anim. Sint laboris consequat
        quis nulla non dolor adipisicing sunt. Ex culpa do elit nisi aliquip
        voluptate aliqua esse veniam ut culpa ea labore incididunt. Eiusmod
        culpa adipisicing est adipisicing do. Officia irure cillum commodo minim
        laborum do veniam aute. Laborum nulla ex exercitation irure dolore
        cupidatat occaecat aute magna id ex nostrud aliqua. Adipisicing minim
        nostrud ut Lorem magna. Magna mollit ex culpa pariatur elit fugiat
        exercitation enim commodo sint ea ex sint. Do elit esse exercitation
        ullamco ipsum aliqua adipisicing amet tempor aliquip cillum. Adipisicing
        do tempor culpa eu exercitation. Deserunt cupidatat consectetur
        exercitation exercitation laborum qui ad culpa tempor. Do cupidatat quis
        mollit nostrud dolore. Voluptate laboris nulla nisi velit laborum nulla
        non voluptate adipisicing est cillum ea. Velit excepteur tempor qui
        sint. Eiusmod et consectetur quis reprehenderit minim enim est Lorem
        mollit. Id nostrud magna ea officia ad dolore officia qui id. Non cillum
        velit sunt est exercitation ad ullamco ea culpa minim commodo incididunt
        cillum cupidatat. Incididunt incididunt et eiusmod nulla consectetur
        nulla sunt tempor irure cillum eu Lorem tempor cupidatat. Exercitation
        minim sint aute eu fugiat dolor sint. Ea magna minim sint eiusmod tempor
        ipsum sit sint culpa. Amet culpa dolore non duis excepteur sit fugiat
        voluptate dolor ex nisi. Non consectetur eiusmod aute officia ex
        laboris. Aliquip anim ullamco anim cupidatat anim exercitation nulla
        nostrud amet officia do nisi aute occaecat. Sit sint est occaecat
        consequat ut voluptate anim nisi nulla exercitation adipisicing dolore.
        Mollit duis deserunt esse incididunt. Ipsum nostrud laboris incididunt
        aliquip pariatur sit nostrud non adipisicing cupidatat. Et ut sit
        deserunt deserunt adipisicing ipsum sunt exercitation ipsum Lorem
        pariatur cupidatat. Veniam elit non cupidatat non reprehenderit. Eiusmod
        Lorem in eu exercitation nisi excepteur exercitation. Ut elit non id eu
        aute incididunt magna. Officia ea laboris culpa sint minim eu culpa
        magna esse nisi culpa cupidatat sunt. Irure velit duis officia
        incididunt commodo deserunt minim pariatur. Cupidatat laborum veniam
        aute esse irure sint. Aliquip in velit tempor elit nulla proident.
        Occaecat ea aliquip laborum do labore laboris ex cupidatat et dolor
        cupidatat aute pariatur magna. Est ut nulla aute laboris exercitation
        commodo do anim officia. Ex Lorem deserunt ea sint in sunt nulla ex quis
        dolore. Officia nulla duis ullamco voluptate duis enim dolor nisi ex
        enim magna. Velit ea tempor sint anim. Adipisicing exercitation eu
        nostrud sit ullamco nulla eu cillum nulla ut ex exercitation. Laborum
        qui veniam sunt proident Lorem esse pariatur incididunt cillum quis
        consequat magna. Mollit consequat id dolor cupidatat dolor est velit ea
        nulla laboris nulla ut ipsum. Amet fugiat proident fugiat minim duis
        sint. Occaecat mollit consectetur consequat eu anim tempor aliquip
        cupidatat fugiat non pariatur aliquip. Quis excepteur duis et cillum
        aliquip id Lorem ipsum eu commodo commodo ut. Dolor excepteur mollit ad
        proident in fugiat ipsum nulla. Amet ex officia Lorem Lorem nisi
        adipisicing. Quis ea est esse magna enim fugiat tempor irure Lorem
        nostrud tempor adipisicing.
      </ContentContainer>
    </PageContainer>
  );
}
