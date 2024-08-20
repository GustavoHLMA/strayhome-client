import React, { useState } from 'react';
import {
  Container,
  Content,
  LogoSection,
  FormSection,
  LogoImage,
  PawImage1,
  PawImage2,
  PawImage3,
  PawImage4,
  PawImage5,
  Title,
  Text
} from './styles';
import { TextField, Button } from '@mui/material';
import { useRouter } from 'next/router';
import { useAuth } from '@/contexts/authContext';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const { login } = useAuth();

  const handleSubmit = async () => {
    try {
      await login(email, password);
      // Redirecionar para a página principal após login bem-sucedido
      router.push('/home');
    } catch {
      alert('Login failed. Please check your credentials.');
    }
  };

  const navigateToRegister = () => {
    router.push('/register'); // Redireciona para a página de registro
  };

  return (
    <Container>
      <Content>
        <LogoSection>
          <PawImage1 src="paw.png" alt="Paw" />
          <PawImage2 src="paw.png" alt="Paw" />
          <PawImage3 src="paw.png" alt="Paw" />
          <PawImage4 src="paw.png" alt="Paw" />
          <PawImage5 src="paw.png" alt="Paw" />
          <LogoImage src="/stray_orange_logo.png" alt="Stray Home Logo" />
        </LogoSection>
        <FormSection>
          <Title>Log in</Title>
          <Text
            style={{
              fontSize: '0.9375rem',
              color: '##1E1E1E',
              marginTop: '0.31rem'
            }}
          >
            Sign in to acces your account.
          </Text>

          <Text
            style={{
              fontSize: '0.9375rem',
              color: '#1E1E1E',
              marginBottom: '1rem'
            }}
            onClick={navigateToRegister}
          >
            Don’t have an account?{' '}
            <span
              style={{
                color: 'orange',
                cursor: 'pointer',
                fontFamily: 'Lato',
                fontWeight: 400
              }}
              onClick={navigateToRegister}
            >
              Register for access
            </span>
            .
          </Text>
          <div className="form-row">
            <TextField
              variant="outlined"
              placeholder="Email"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{
                mb: 2,
                borderRadius: '12px',
                background: '#E7E5E5',
                width: '20rem',
                height: '3.5rem',
                '& .MuiOutlinedInput-root': {
                  borderRadius: '12px'
                }
              }}
            />
            <TextField
              variant="outlined"
              placeholder="Password"
              fullWidth
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              sx={{
                mb: 2,
                borderRadius: '12px',
                background: '#E7E5E5',
                width: '20rem',
                height: '3.5rem',
                '& .MuiOutlinedInput-root': {
                  borderRadius: '12px'
                }
              }}
            />
          </div>
          <Button
            variant="contained"
            onClick={handleSubmit}
            sx={{
              background: '#F2B705',
              color: 'black',
              borderRadius: '12px',
              height: '1.85069rem',
              fontFamily: 'Lato',
              marginBottom: '1rem',
              boxShadow: '2px 2px 0px 1px rgba(30, 30, 30, 0.80 )',
              textTransform: 'none',
              padding: '10px 20px',
              '&:hover': {
                backgroundColor: '#e5a50d'
              }
            }}
          >
            Login
          </Button>
        </FormSection>
      </Content>
    </Container>
  );
};

export default Login;
