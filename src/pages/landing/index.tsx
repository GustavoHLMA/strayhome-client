import React from 'react';
import { LandingContainer } from './styles';
import LandingHome from '@/components/LandingHome';
import LandingAbout from '@/components/LandingAbout';
import LandingServices from '@/components/LandingServices';
import LandingRegister from '@/components/LandingRegister';
import LandingHedera from '@/components/LandingHedera';

const Landing: React.FC = () => {
  return (
    <LandingContainer>
      <LandingHome />
      <LandingAbout />
      <LandingServices />
      <LandingRegister />
      <LandingHedera />
    </LandingContainer>
  );
};

export default Landing;
