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
  InputGroup
} from './styles';
import { TextField, Button } from '@mui/material';
import { createUser } from '@/services/api';

const Register: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [birthdate, setBirthdate] = useState('');

  const handleSubmit = async () => {
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    try {
      const newUser = await createUser({
        name,
        email,
        password,
        birthdate,
        phone
      });

      console.log('User created successfully:', newUser);
    } catch (error) {
      console.error('Error creating user:', error);
    }
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
          <Title>Register</Title>
          <div className="form-row">
            <div className="input-row">
              <TextField
                variant="outlined"
                placeholder="Name"
                fullWidth
                value={name}
                onChange={(e) => setName(e.target.value)}
                sx={{
                  mb: 2,
                  borderRadius: '12px',
                  background: '#E7E5E5',
                  width: '20rem',
                  marginRight: '1rem',
                  height: '3.5rem',
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '12px'
                  }
                }}
              />
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
            </div>
            <div className="input-row">
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
              <TextField
                variant="outlined"
                placeholder="Confirm password"
                fullWidth
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
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
          </div>
          <InputGroup>
            <TextField
              variant="outlined"
              placeholder="Phone"
              fullWidth
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              sx={{
                mb: 2,
                mr: 1,
                borderRadius: '12px',
                background: '#E7E5E5',
                '& .MuiOutlinedInput-root': {
                  borderRadius: '12px'
                }
              }}
            />
            <TextField
              variant="outlined"
              placeholder="Birthdate"
              fullWidth
              value={birthdate}
              onChange={(e) => setBirthdate(e.target.value)}
              sx={{
                mb: 2,
                borderRadius: '12px',
                background: '#E7E5E5',
                '& .MuiOutlinedInput-root': {
                  borderRadius: '12px'
                }
              }}
            />
          </InputGroup>
          <Button
            variant="contained"
            onClick={handleSubmit}
            sx={{
              background: '#F2B705',
              color: 'black',
              borderRadius: '12px',
              height: '1.85069rem',
              marginBottom: '1rem',
              boxShadow: '2px 4px 0px 1px rgba(30, 30, 30, 0.90)',
              textTransform: 'none',
              padding: '10px 20px',
              '&:hover': {
                backgroundColor: '#e5a50d'
              },
              alignSelf: 'flex-end'
            }}
          >
            Done
          </Button>
        </FormSection>
      </Content>
    </Container>
  );
};

export default Register;
