import styled from '@emotion/styled';

export const HeroContainer = styled.div`
  position: relative;
  background-color: #f7c77b;
  padding: 4rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-family: 'Lato';
  z-index: 1;
`;

export const HeroContent = styled.div`
  margin-bottom: 3rem;
  z-index: 1;
  align-self: flex-start;
`;

export const HeroTitle = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  color: #ffffff;
  z-index: 1;
`;

export const HeroSubtitle = styled.h2`
  color: #f7f7f7;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-size: 2.6875rem;
  font-style: normal;
  font-weight: 900;
  line-height: 134%;
  z-index: 1;
`;

export const HeroButton = styled.button`
  background-color: #f2b705;
  color: black;
  padding: 0.75rem 2rem;
  font-size: 1.2rem;
  font-weight: bold;
  border: none;
  border-radius: 4.375rem;
  box-shadow: 2px 4px 0px 3px rgba(30, 30, 30, 0.9);
  cursor: pointer;
  margin-top: 1.5rem;
  transition: background-color 0.3s ease;
  z-index: 1;

  &:hover {
    background-color: #e5a50d;
  }
`;

export const IconsRow = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 2rem;
  width: 100%;
  z-index: 1;
`;

export const IconCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 200px;
  z-index: 1;
`;

export const IconImage = styled.img`
  width: 80px;
  height: 80px;
  margin-bottom: 1rem;
  z-index: 1;
`;

export const IconTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: bold;
  color: #f2b705;
  margin-bottom: 0.5rem;
  z-index: 1;
`;

export const IconText = styled.p`
  font-size: 1rem;
  color: #333333;
  z-index: 1;
`;

export const ImageContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100vw;
  height: 90vh;
  z-index: 0;
  overflow: hidden;
  z-index: 0;
`;
