import React from 'react';
import { AboutContainer, BigText, Text } from './styles';

const LandingAbout: React.FC = () => {
  return (
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
  );
};

export default LandingAbout;
