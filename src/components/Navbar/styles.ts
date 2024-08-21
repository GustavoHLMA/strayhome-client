import styled from '@emotion/styled';

export const NavbarContainer = styled.div`
  border: 2px #1e1e1e;
  background: #6726c0;
  display: flex;
  align-items: center;
  padding: 0.75rem 1.5rem;
  height: 6rem;
  font-family: 'Lato';
`;

export const NavLinks = styled.div`
  display: flex;
  align-items: center;

  a {
    color: #f7f7f7;
    text-decoration: none;
    margin-left: 3rem;
    font-weight: 700;
    font-size: 1.5rem;
    cursor: pointer;
    white-space: nowrap;

    &:hover {
      color: #f28705;
    }
  }
`;

export const UserSection = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: white;
  font-size: 1rem;
  font-weight: bold;
  margin-left: 55rem;

  img {
    border-radius: 50%;
    margin-left: 0.5rem;
  }
`;

export const CountryFlag = styled.img`
  height: 20px;
  width: 20px;
`;

export const Text = styled.p`
  color: #f7f7f7;
  font-size: 1.625rem;
  font-style: normal;
  font-weight: 300;
  line-height: 108.036%;
  white-space: nowrap;
`;
