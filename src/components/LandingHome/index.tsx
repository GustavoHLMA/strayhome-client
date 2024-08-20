import React from 'react';
import Image from 'next/image';
import {
  HomeContainer,
  ImageContainer,
  BigText,
  Text,
  CustomButton,
  NavbarContainer,
  LogoContainer,
  NavButton,
  StartNowButton
} from './styles';
import { LandingImagePng } from '@/assets';
import { YellowLogo } from '@/assets';

const LandingHome: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <HomeContainer id="home">
      <NavbarContainer>
        <LogoContainer>
          <Image
            src={YellowLogo}
            alt="Stray Home Logo"
            layout="fill"
            objectFit="cover"
            quality={100}
            priority={true}
          />
        </LogoContainer>
        <NavButton onClick={() => scrollToSection('home')}>Home</NavButton>
        <NavButton onClick={() => scrollToSection('about')}>About</NavButton>
        <NavButton onClick={() => scrollToSection('services')}>
          Services
        </NavButton>
        <StartNowButton onClick={() => scrollToSection('register')}>
          Start Now
        </StartNowButton>
      </NavbarContainer>
      <BigText>Connecting Hearts and Paws</BigText>
      <Text>
        A website that combines rescue efforts with a pet social network,
        connecting abandoned animals with loving homes. Users can interact with
        pet profiles, fostering a community dedicated to saving lives and
        promoting adoption.
      </Text>
      <CustomButton>Get Started</CustomButton>
      <ImageContainer>
        <Image
          src={LandingImagePng}
          alt="Stray Home Logo"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </ImageContainer>
    </HomeContainer>
  );
};

export default LandingHome;
