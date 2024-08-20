import styled from '@emotion/styled';

export const ServicesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100vw;
  height: 85vh;
  font-family: 'Lato';
  padding: 0;
  margin: 0;
  border: 0;
  z-index: 1;
  background-color: #f2b705;
  overflow: hidden;
`;

export const BigText = styled.h1`
  color: #f7f7f7;
  width: auto;
  text-shadow: calc(1px + 0.1vw) calc(3px + 0.1vh) 0px rgba(30, 30, 30, 0.9);
  font-size: 3.125vw;
  font-style: normal;
  font-weight: 900;
  line-height: 108.036%;
`;

export const LogoContainer = styled.div`
  position: relative;
  width: 15.9375rem;
  height: 7.125rem;
  margin-right: 1.5vw;
  margin-left: 1.5vw;
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 10vw;
  height: 17vh;
  margin-bottom: 2vh;
`;

export const CardContainer = styled.div`
  display: flex;
  width: 17.3125vw;
  height: 50.5vh;
  flex-shrink: 0;
  align-items: flex-start;
  justify-content: center;
  padding-top: 2vh;

  border-radius: 1.0625rem;
  border: 0.0625vw solid #1e1e1e;
  background: #6726c0;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  margin-right: 5.31vw;
  margin-top: 4.35vh;
`;

export const MediumText = styled.h2`
  color: #fff;
  text-align: center;
  font-size: 1.3125vw;
  font-style: normal;
  font-weight: 900;
  line-height: 130.35%;
  max-width: 12vw;
  margin-bottom: 1vh;
`;

export const Text = styled.p`
  width: 14.8125vw;
  color: #fff;
  font-size: 0.9375vw;
  font-style: normal;
  font-weight: 400;
  line-height: 130.35%;
  text-align: center;
`;

export const CollumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: auto;
`;

export const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: auto;
`;
