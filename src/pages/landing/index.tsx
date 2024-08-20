import React from 'react';
import { LandingContainer } from './styles';
import LandingHome from '@/components/LandingHome';
import LandingAbout from '@/components/LandingAbout';
import LandingServices from '@/components/LandingServices';
import LandingRegister from '@/components/LandingRegister';
import LandingHedera from '@/components/LandingHedera';
import LandingFooter from '@/components/footer';

const Landing: React.FC = () => {
  return (
    <LandingContainer>
      <LandingHome />
      <LandingAbout />
      <LandingServices />
      <LandingRegister />
      <LandingHedera />
      <LandingFooter />
    </LandingContainer>
  );
};

export default Landing;
