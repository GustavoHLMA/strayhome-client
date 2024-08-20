import React from 'react';
import { AboutContainer, BigText, Text, MissionContainer, VisionContainer, SectionContainer } from './styles';

const LandingAbout: React.FC = () => {
  return (
    <SectionContainer>
      <AboutContainer>
        <BigText>About</BigText>
        <Text>
          Welcome to{' '}
          <span
            style={{
              fontWeight: 900
            }}
          >
            Stray Home
          </span>
          , a new website dedicated to transforming the lives of abandoned
          animals. Our mission is simple: to connect homeless pets with caring
          individuals and families, providing them with the love and security they
          deserve
        </Text>
      </AboutContainer>
      <MissionContainer>
        <BigText>What We Do</BigText>
        <Text>
          At Stray Home, we believe every pet deserves a second chance. Our platform serves as both a 
          rescue network and a social space for pets, where animals can have their own profiles
          showcasing their stories, photos, and personalities. This makes it easier for potential 
          adopters to find the perfect match and bring a new member into their family.
        </Text>
      </MissionContainer>
      <VisionContainer>
        <BigText>Our Vision</BigText>
        <Text>
          Stray Home is more than a website; it's a community driven by compassion. 
          We aim to reduce the number of stray animals and promote responsible pet ownership. 
          By bringing people together around a shared love for animals, we are building a brighter 
          future where every pet can find a loving home.
        </Text>
      </VisionContainer>
    </SectionContainer>


  );
};

export default LandingAbout;
