import { RegisterContainer, BigText, CustomButton } from './styles';
import React from 'react';
import { useRouter } from 'next/router';

const LandingRegister: React.FC = () => {
  const router = useRouter();
  return (
    <RegisterContainer id="register">
      <BigText>Let&apos;s Get Starded</BigText>
      <CustomButton
        onClick={() => {
          router.push('/register');
        }}
      >
        Register
      </CustomButton>
    </RegisterContainer>
  );
};

export default LandingRegister;
