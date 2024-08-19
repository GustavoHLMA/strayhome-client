import React from 'react';
import { HomeContainer } from './styles';

import HomeLanding from '@/components/LandingHome';

const Landing: React.FC = () => {
  return (
    <HomeContainer>
      <HomeLanding />
    </HomeContainer>
  );
};

export default Landing;
