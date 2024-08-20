import styled from '@emotion/styled';

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f2b705; /* Cor de fundo amarela */
  padding: 1vh 2vw;
  height: 9vh;
  color: #1e1e1e; /* Cor do texto */
`;

export const FooterText = styled.p`
  font-size: 1.2vw;
  font-weight: 400;
  margin: 0;
  line-height: 134%; /* 1.42375rem */
`;

export const LinksContainer = styled.div`
  display: flex;
  gap: 2vw;
`;

export const FooterLink = styled.a`
  font-size: 1.2vw;
  font-weight: 400;
  color: #1e1e1e; /* Cor dos links */
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    color: #000000; /* Cor ao passar o mouse */
  }
`;
