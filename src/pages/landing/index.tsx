import React from 'react';
import Image from 'next/image';
import { HomeContainer, ImageContainer } from './styles';
import { LandingImagePng } from '@/assets';

const Landing: React.FC = () => {
  return (
    <HomeContainer>
      <ImageContainer>
        <Image
          src={LandingImagePng}
          alt="Stray Home Logo"
          width={1600}
          height={1056}
          layout="responsive"
          quality={90}
          priority={true}
        />
      </ImageContainer>
    </HomeContainer>
  );
};

export default Landing;
