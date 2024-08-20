import styled from '@emotion/styled';

export const Container = styled.div`
  background: #6726c0;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Lato';
`;

export const Content = styled.div`
  background: white;
  display: flex;
  border-radius: 26px;
  overflow: hidden;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
  width: 61.88rem;
  height: 35rem;
  flex-shrink: 0;
  font-family: 'Lato';
`;

export const PawImage1 = styled.img`
  position: absolute;
  width: 7.356rem;
  height: 6.55438rem;
  flex-shrink: 0;
  left: 10px;
  bottom: 10px;
  z-index: 1;
`;

export const PawImage2 = styled.img`
  position: absolute;
  width: 5.99513rem;
  height: 5.34181rem;
  transform: rotate(-81.313deg);
  flex-shrink: 0;
  flex-shrink: 0;
  right: 18px;
  bottom: 26px;
  z-index: 1;
`;

export const PawImage3 = styled.img`
  position: absolute;
  width: 4.02656rem;
  height: 3.58781rem;
  transform: rotate(-64.546deg);
  flex-shrink: 0;
  flex-shrink: 0;
  right: 18px;
  top: 26px;
  z-index: 1;
`;

export const PawImage4 = styled.img`
  position: absolute;
  width: 7.81563rem;
  height: 6.964rem;
  transform: rotate(-60.546deg);
  flex-shrink: 0;
  flex-shrink: 0;
  right: 35px;
  top: 126px;
  z-index: 1;
`;

export const PawImage5 = styled.img`
  position: absolute;
  width: 7.90019rem;
  height: 7.03931rem;
  flex-shrink: 0;
  left: 18px;
  top: 18px;
  z-index: 1;
`;

export const LogoImage = styled.img`
  width: 10.875rem;
  height: 4.875rem;
  z-index: 2;
`;

export const LogoSection = styled.div`
  background: #2796f8;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  position: relative;
  width: 18.125rem;
  height: 100%; /* Alterado para 100% da altura do Content */
  flex-shrink: 0;
  flex-direction: column;
  box-sizing: border-box; /* Garante que o padding seja considerado na largura e altura */
`;

export const FormSection = styled.div`
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  font-family: 'Lato';
  width: 100%;

  .form-row {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    margin-bottom: 1rem;
  }

  .input-column {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 70%; /* Ajuste conforme necessário para expandir os campos */
    margin-left: 20px;
  }
`;

export const Title = styled.div`
  color: #1e1e1e;
  font-family: Lato;
  font-size: 3.125rem;
  font-style: normal;
  font-weight: 900;
  line-height: 108.036%; /* 3.37613rem */
  margin-top: 11px;
  margin-bottom: 11px;
`;

export const ImageUpload = styled.div`
  width: 12rem;
  height: calc(
    4.475rem + 1.5rem + 5rem + 1.5rem
  ); /* Altura combinada dos campos */
  background-color: #e5e5e5;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  .image-placeholder {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #7a7a7a;
  }
`;

export const InputGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 1rem; /* Espaçamento consistente entre os campos */
  & > * {
    flex-grow: 1;
  }
`;
