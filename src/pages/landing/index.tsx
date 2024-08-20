import React from 'react';
import { LandingContainer } from './styles';
import HomeLanding from '@/components/LandingHome';
import LandingAbout from '@/components/LandingAbout';

const Landing: React.FC = () => {
  return (
    <LandingContainer>
      <HomeLanding />
      <LandingAbout />
    </LandingContainer>
  );
};

export default Landing;
