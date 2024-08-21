import React from 'react';
import Navbar from '@/components/Navbar';
import HomeHero from '@/components/HomeHero';
import { HomeContainer } from './styles';

//unfinished

const Home: React.FC = () => {
  return (
    <HomeContainer>
      <Navbar />
      <HomeHero />
    </HomeContainer>
  );
};

export default Home;
