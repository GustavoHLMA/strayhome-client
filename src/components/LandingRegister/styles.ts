import styled from '@emotion/styled';

export const RegisterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #f25c05;
  max-width: 100vw;
  height: 50vh;
  font-family: 'Lato';
  padding: 0;
  margin: 0;
  border: 0;
`;

export const BigText = styled.h1`
  color: #f7f7f7;
  width: 42vw;
  text-shadow: calc(1px + 0.1vw) calc(3px + 0.2vh) 0px rgba(30, 30, 30, 0.9);
  font-size: 5.4375vw;
  font-style: normal;
  font-weight: 900;
  line-height: 108.036%;
`;

export const CustomButton = styled.button`
  width: 10.4375vw;
  height: 4.6875vh;
  flex-shrink: 0;
  border-radius: 4.375rem;
  background: #f2b705;
  box-shadow: 1px 2px 0px 1px rgba(30, 30, 30, 0.9);
  border: solid 0.0625vw #1e1e1e;
  cursor: pointer;

  color: #1e1e1e;
  font-size: 1.3125vw;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  margin-top: 5.5vh;
`;
