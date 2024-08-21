import React from 'react';
import Image from 'next/image';
import {
  HeroContainer,
  HeroContent,
  HeroSubtitle,
  HeroButton,
  ImageContainer
} from './styles';
import { CatHero, TextHero } from '@/assets';

const HomeHero: React.FC = () => {
  return (
    <HeroContainer>
      <HeroContent>
        <Image src={TextHero} alt="Cat Hero" quality={100} priority={true} />
        <HeroSubtitle>Adopt a Cat, Save a Life</HeroSubtitle>
        <HeroButton>Read More</HeroButton>
      </HeroContent>
      <ImageContainer>
        <Image
          src={CatHero}
          alt="Cat Hero"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </ImageContainer>
    </HeroContainer>
  );
};

export default HomeHero;
