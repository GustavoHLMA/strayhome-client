import React from 'react';
import { LandingContainer } from './styles';
import HomeLanding from '@/components/LandingHome';
import LandingAbout from '@/components/LandingAbout';
import LandingServices from '@/components/LandingServices';

const Landing: React.FC = () => {
  return (
    <LandingContainer>
      <HomeLanding />
      <LandingAbout />
      <LandingServices />
    </LandingContainer>
  );
};

export default Landing;
