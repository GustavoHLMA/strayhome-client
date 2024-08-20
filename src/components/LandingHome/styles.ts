import styled from '@emotion/styled';

export const HomeContainer = styled.div`
  display: flex;
  padding-left: 4.25vw;
  padding-top: 2.87vh;
  padding-right: 0;
  margin-right: 0;
  flex-direction: column;
  height: 75vh;
  width: 100vw;
  background: linear-gradient(0deg, #6726c0 0%, #6726c0 100%), #f2b705;
  font-family: 'Lato';
  z-index: 1;
`;

export const NavbarContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: auto;
`;

export const LogoContainer = styled.div`
  position: relative;
  width: 8.6875rem;
  height: 3.875rem;
  margin-right: 4vw;
`;

export const ImageContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 50vw;
  height: 100vh;
  z-index: 0;
  overflow: hidden;
`;

export const BigText = styled.h1`
  color: #f7f7f7;
  width: 42vw;
  text-shadow: calc(1px + 0.3vw) calc(3px + 0.3vh) 0px rgba(30, 30, 30, 0.9);
  font-size: 5.4375vw;
  font-style: normal;
  font-weight: 900;
  line-height: 108.036%;
  margin-top: 8vh;
`;

export const Text = styled.p`
  width: 34.625vw;
  color: #fff;
  font-size: 1.3125vw;
  font-style: normal;
  font-weight: 400;
  line-height: 130.35%;
`;

export const CustomButton = styled.button`
  width: 10.4375vw;
  height: 4.6875vh;
  flex-shrink: 0;
  border-radius: 4.375rem;
  background: #f2b705;
  box-shadow: 1px 2px 0px 1px rgba(30, 30, 30, 0.9);
  cursor: pointer;

  color: #1e1e1e;
  font-size: 1.3125vw;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  margin-top: 5.5vh;
`;

export const NavButton = styled.button`
  width: 6.5vw;
  height: 4.1875vh;
  flex-shrink: 0;
  border-radius: 4.375rem;
  border: 0.0625vw solid #1e1e1e;
  background: #f28705;
  margin-right: 2vw;

  color: #1e1e1e;
  font-size: 1.375vw;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  cursor: pointer;
`;

export const StartNowButton = styled.button`
  border-radius: 4.375rem;
  background: #2796f8;
  box-shadow: 0.1vw 0.37vh 0px 0.15vw rgba(30, 30, 30, 0.9);
  width: 8.875rem;
  height: 4.25vh;
  flex-shrink: 0;
  margin-left: 45vw;
  z-index: 1;

  color: #fff;
  font-size: 1.25vw;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
`;
