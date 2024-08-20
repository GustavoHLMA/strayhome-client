import styled from '@emotion/styled';

export const HederaSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4vh 2vw;
  padding-top: 10vh;
  background-color: #6726c0;
  color: #ffffff;
  text-align: center;
  font-family: 'Lato';
`;

export const Title = styled.h2`
  font-size: 2vw;
  font-weight: 700;
  text-align: center;
  margin-bottom: 0.5vh;
  margin-right: 0.5vw;
  color: #f7f7f7;
`;

export const SubTitle = styled.p`
  max-width: 38vw;
  margin-bottom: 6vh;
  margin-left: 3vw;
  color: #f7f7f7;
  font-size: 1.2vw;
  line-height: 1.5;
  text-align: left;
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2vh;
`;

export const Logos = styled.img`
  width: 10vw;
  height: auto;
  margin: 0 2vw;
`;

export const TabsWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 2vw;
  margin-bottom: 3vh;
`;

export const TabButton = styled.button<{ active?: boolean }>`
  padding: 1vh 2vw;
  background-color: ${({ active }) => (active ? '#f28705' : 'transparent')};
  border: ${({ active }) =>
    active ? '2px solid #1E1E1E' : '2px solid transparent'};
  border-radius: 30px;
  color: ${({ active }) => (active ? '#1E1E1E' : '#FFF')};
  font-size: 1.2vw;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: #f28705;
    color: #1e1e1e;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  }
`;

export const CarouselContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  color: #000000;
  border-radius: 1rem;
  border: 0.125vw solid #000000;
  padding: 3vh 4vw;
  box-shadow: 0px 0.03vw 5px rgba(0, 0, 0, 0.35);
  max-width: 60%;
  height: 30vh;
  margin: 0 auto;
  position: relative;
`;

export const CarouselText = styled.p`
  font-size: 1.2vw;
  font-weight: 400;
  line-height: 1.5;
  max-width: 100%;
  text-align: left;
`;

export const ArrowButton = styled.button`
  background: none;
  border: none;
  color: #f0f0f0;
  font-size: 2vw;
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #d57503;
  }

  &:first-of-type {
    left: -3vw;
  }

  &:last-of-type {
    right: -3vw;
  }
`;

export const IndicatorWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 1vw;
  margin-top: 3vh;
`;

export const Indicator = styled.div<{ active: boolean }>`
  width: 1vw;
  height: 1vw;
  background-color: ${({ active }) => (active ? '#f28705' : '#ffffff')};
  border-radius: 50%;
  border: 2px solid #000000;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: #f28705;
  }
`;

export const RowDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 3.5vh;
`;

export const Text = styled.p`
  color: #f7f7f7;
  font-size: 1.75vw;
  font-style: normal;
  font-weight: 300;
  line-height: 108.036%;
`;

export const CarouselTitle = styled.h3`
  font-size: 1.75vw;
  font-weight: 700;
  margin-bottom: 1vh;
  text-align: left;
`;
