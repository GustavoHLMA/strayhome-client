import { RegisterContainer, BigText, CustomButton } from './styles';
import React from 'react';

const LandingRegister: React.FC = () => {
  return (
    <RegisterContainer id="register">
      <BigText>Let&apos;s Get Starded</BigText>
      <CustomButton>Register</CustomButton>
    </RegisterContainer>
  );
};

export default LandingRegister;
