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

export default function LandingPage() {
  const { isTabletOrMobile } = useResponsive();
  return (
    <PageContainer mobile={isTabletOrMobile}>
      <ContentContainer>
        Commodo officia sit tempor officia duis laborum in officia aliquip. Eu
        sint labore sunt excepteur id id duis est ut excepteur nostrud irure
        cillum adipisicing. Consequat laboris occaecat ea commodo ad nulla
        tempor ad esse commodo exercitation sint Lorem veniam. Ipsum ex
        reprehenderit exercitation labore cillum. Nisi qui ea sint commodo.
        Deserunt occaecat ipsum pariatur nulla voluptate eiusmod. Eiusmod do est
        laboris sit esse reprehenderit. Exercitation Lorem commodo reprehenderit
        officia et et consectetur cupidatat duis culpa amet ea. Amet labore sint
        mollit eu aute deserunt mollit quis ad. Cupidatat in amet ut consectetur
        ipsum. Dolor voluptate cupidatat cupidatat aute nostrud laboris
        incididunt id esse eiusmod cupidatat voluptate deserunt. Nostrud quis ad
        reprehenderit commodo id in. Ad eu non Lorem occaecat pariatur deserunt
        laboris proident ad nisi dolor est anim amet. Tempor in consequat
        laboris minim ex reprehenderit mollit enim consequat. Consequat nulla
        enim esse eiusmod ad non. In nostrud aute officia cupidatat consequat
        laboris est. Do amet mollit tempor ea eiusmod aliquip sit. Minim ad
        laboris et quis ipsum amet non. Elit excepteur cupidatat voluptate
        proident id do laborum minim do adipisicing qui. Non qui in exercitation
        esse culpa veniam deserunt ad exercitation duis cillum. In duis dolore
        nisi minim enim anim. Qui anim sunt dolore minim tempor deserunt non
        adipisicing minim mollit deserunt reprehenderit. Do ullamco est eu
        tempor commodo sint excepteur ullamco laborum sit mollit enim. Aute
        pariatur in incididunt culpa occaecat officia laboris tempor incididunt
        exercitation proident non. Non ex exercitation aute proident id
        consequat veniam consequat. Deserunt aliqua eiusmod pariatur aute veniam
        adipisicing. Eiusmod ut ad incididunt aliqua adipisicing irure dolor
        nisi. Dolore occaecat proident proident veniam eiusmod. Ullamco Lorem
        ipsum irure elit reprehenderit. Proident occaecat aliqua adipisicing et
        ea cupidatat labore consequat duis aute laboris. Sunt consequat dolor
        commodo mollit nulla voluptate eiusmod adipisicing cillum tempor commodo
        nisi. Aute do veniam ex elit nulla irure officia qui commodo. Duis culpa
        duis quis minim in officia. Dolore ad enim adipisicing est laborum sint
        in voluptate velit consectetur cillum proident duis. Labore excepteur
        consequat cupidatat duis cillum ullamco commodo Lorem voluptate pariatur
        deserunt anim sunt. Ipsum ut eiusmod magna elit sint laboris ad occaecat
        aliquip aliqua sint. Tempor consectetur commodo tempor nisi ut ex
        labore. Enim fugiat ex sunt anim cillum amet cupidatat sint sint enim
        culpa consequat non reprehenderit. Laborum excepteur sunt ullamco
        voluptate sit nulla velit do ad nisi nulla cupidatat. Ex adipisicing non
        ad aliqua esse labore dolore deserunt duis. Deserunt quis quis Lorem
        esse exercitation amet fugiat. Dolore nulla laborum officia officia
        reprehenderit velit in id excepteur ullamco. Consectetur occaecat
        laboris officia Lorem eu nostrud nostrud voluptate. Exercitation in
        Lorem in aliquip duis minim. Culpa irure aliquip eiusmod consequat sint
        incididunt laboris laborum Lorem deserunt excepteur occaecat ullamco.
        Eiusmod exercitation excepteur adipisicing labore reprehenderit culpa
        qui magna ea consequat ipsum cupidatat dolor fugiat. Cupidatat id
        laborum commodo esse duis consequat commodo cillum non labore voluptate
        ullamco. Commodo occaecat nulla magna ipsum nisi.
      </ContentContainer>
    </PageContainer>
  );
}
