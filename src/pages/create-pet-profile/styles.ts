import styled from '@emotion/styled';

export const Container = styled.div`
    background: #6726C0;
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
    height: 30rem;
    flex-shrink: 0;
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

export const LogoImage = styled.img`
    width: 10.875rem;
    height: 4.875rem;
    z-index: 2;
`;

export const LogoSection = styled.div`
    background: #2796F8;
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
`;

export const Form = styled.form`
    width: 400px;
    display: flex;
    flex-direction: column;
`;

export const Input = styled.input`
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border-radius: 5px;
    border: 1px solid #ccc;
`;

export const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color: #FDBD12;
    border: none;
    border-radius: 5px;
    margin-top: 20px;
    cursor: pointer;
`;
