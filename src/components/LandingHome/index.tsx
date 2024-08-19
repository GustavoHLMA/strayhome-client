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
  return (
    <HomeContainer>
      <NavbarContainer>
        <LogoContainer>
          <Image
            src={YellowLogo}
            alt="Stray Home Logo"
            layout="fill"
            objectFit="cover"
            quality={90}
            priority={true}
          />
        </LogoContainer>
        <NavButton>Home</NavButton>
        <NavButton>About</NavButton>
        <NavButton>Services</NavButton>
        <StartNowButton>Start Now</StartNowButton>
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
