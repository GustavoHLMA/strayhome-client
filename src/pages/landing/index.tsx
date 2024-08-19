import React from 'react';
import { HomeContainer } from './styles';
import HomeLanding from '@/components/LandingHome';
import LandingAbout from '@/components/LandingAbout';

const Landing: React.FC = () => {
  return (
    <HomeContainer>
      <HomeLanding />
      <LandingAbout />
    </HomeContainer>
  );
};

export default Landing;
