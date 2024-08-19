import styled from '@emotion/styled';

export const AboutContainer = styled.div`
  display: flex;
  padding-left: 5.63vw;
  padding-top: 3.62vh;
  padding-bottom: 3.62vh;
  flex-direction: column;
  height: 30vh;
  width: 100vw;
  background: #f25c05;
  font-family: 'Lato';
  z-index: 1;
  justify-content: center;
`;

export const BigText = styled.h1`
  color: #f7f7f7;
  text-shadow: calc(1px + 0.3vw) calc(3px + 0.3vh) 0px rgba(30, 30, 30, 0.9);
  font-size: 3.4375vw;
  font-style: normal;
  font-weight: 900;
  line-height: 108.036%;
`;

export const Text = styled.p`
  width: 79.375vw;
  color: #fff;
  font-size: 1.0625vw;
  font-style: normal;
  font-weight: 400;
  line-height: 130.35%;
  margin-top: 0.81vh;
`;
