import styled from '@emotion/styled';

export const Container = styled.div`
  background: #FEB;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center; /* Centralizar verticalmente */
  font-family: 'Lato';
`;

export const Content = styled.div`
  background: #FFE7A0;
  display: flex;
  overflow: hidden;
  align-items: center;
  position: relative;
  justify-content: space-between;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
  width: 61.88rem;
  height: 100vh;
  flex-shrink: 0;
  font-family: 'Lato';
  padding: 1rem;
  gap: 1.5rem;
`;
export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;


export const Image = styled.img`
  width: 18rem; /* Aumentando para corresponder ao design desejado */
  height: 200px;
  border-radius: 10px;
  
  object-fit: cover;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const CampaignInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%; /* Para garantir que a seção de informações ocupe o espaço disponível */
`;

export const Title = styled.h2`
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: #000;
  font-family: 'Lato';
`;

export const Target = styled.div`
  font-size: 1.2rem;
  margin-bottom: 1rem;
  font-weight: bold;

  span {
    color: #7B52AB;
    font-weight: bold;
    color: #8257E5;
  }
`;

export const Description = styled.p`
  font-size: 1rem;
  color: #333;
  margin-bottom: 7rem;
`;

export const Dates = styled.div`
  font-size: 1.1rem;
  color: #555;
  margin-top: 1rem;
  
  span {
    font-weight: bold;
  }
`;

export const DonateButton = styled.button`
  background-color: #F2B705;
  color: #000;
  padding: 10px 20px;
  font-size: 1rem;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: 2px 4px 0px 1px rgba(30, 30, 30, 0.90);
  transition: background-color 0.3s ease;
  font-family: 'Lato';

  &:hover {
    background-color: #e5a50d;
  }
`;

export const BackButton = styled.button`
  position: absolute;
  top: 20px;
  left: 20px;
  background: none;
  border: none;
  color: #7B52AB;
  margin-top: 4.2rem;
  font-size: 1.2rem;
  cursor: pointer;
  font-weight: bold;
  transition: color 0.3s ease;

  &:hover {
    color: #8257E5;
  }
`;
