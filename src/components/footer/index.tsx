import React from 'react';
import {
  FooterContainer,
  FooterText,
  FooterLink,
  LinksContainer
} from './styles';

const LandingFooter: React.FC = () => {
  return (
    <FooterContainer>
      <FooterText>Copyright © 2024. All Rights Reserved</FooterText>
      <LinksContainer>
        <FooterLink href="#">Terms & Conditions</FooterLink>
        <FooterLink href="#">Privacy Policy</FooterLink>
        <FooterLink href="#">Cookie Policy</FooterLink>
      </LinksContainer>
    </FooterContainer>
  );
};

export default LandingFooter;
