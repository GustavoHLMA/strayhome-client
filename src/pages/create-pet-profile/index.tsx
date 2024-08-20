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
    ImageUpload,
    InputGroup
} from './styles';
import { TextField, Button, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { createAnimal, getUserByEmail } from '@/services/api';

const CreatePetProfile: React.FC = () => {
    const [name, setName] = useState('');
    const [bio, setBio] = useState('');
    const [species, setSpecies] = useState('');
    const [image, setImage] = useState('');
    const [gender, setGender] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = async () => {
        try {
            
            const user = await getUserByEmail(email);
            const ownerId = user.data.id;

            
            const newAnimal = await createAnimal({
                name,
                species,
                image,
                bio,
                gender,
                ownerId,
                statusAdoption: true
            });

            console.log('Animal criado com sucesso:', newAnimal);

        } catch (error) {
            console.error('Erro ao criar o animal:', error);
        }
    };

    return (
        <Container>
            <Content>
                <LogoSection>
                    <PawImage1 src='paw.png' alt='Paw'></PawImage1>
                    <PawImage2 src='paw.png' alt='Paw'></PawImage2>
                    <PawImage3 src='paw.png' alt='Paw'></PawImage3>
                    <PawImage4 src='paw.png' alt='Paw'></PawImage4>
                    <PawImage5 src='paw.png' alt='Paw'></PawImage5>
                    <LogoImage src="/stray_orange_logo.png" alt="Stray Home Logo" />
                </LogoSection>
                <FormSection>
                    <Title>Create Pet Profile</Title>
                    <div className="form-row">
                        <ImageUpload>
                            <div className="image-placeholder">
                                <span>Add Image</span>
                            </div>
                        </ImageUpload>
                        <div className="input-column">
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
                                    width: '100%', 
                                    '& .MuiOutlinedInput-root': {
                                        borderRadius: '12px',
                                    },
                                }}
                            />
                            <TextField
                                variant="outlined"
                                placeholder="Write here a description about your pet"
                                multiline
                                rows={4}
                                fullWidth
                                value={bio}
                                onChange={(e) => setBio(e.target.value)}
                                sx={{
                                    mb: 2,
                                    borderRadius: '12px',
                                    background: '#E7E5E5',
                                    width: '100%', 
                                    '& .MuiOutlinedInput-root': {
                                        borderRadius: '12px',
                                    },
                                }}
                            />
                        </div>
                    </div>
                    <InputGroup>
                        <FormControl fullWidth sx={{ mb: 2, mr: 1 }}>
                            <InputLabel id="species-label">Species</InputLabel>
                            <Select
                                labelId="species-label"
                                variant="outlined"
                                id="species-select"
                                value={species}
                                onChange={(e) => setSpecies(e.target.value as string)}
                                label="species"
                                sx={{
                                    borderRadius: '12px',
                                    background: '#E7E5E5',
                                    '& .MuiOutlinedInput-root': {
                                        borderRadius: '12px',
                                    },
                                }}
                            >
                                <MenuItem value="Cat">Cat</MenuItem>
                                <MenuItem value="Dog">Dog</MenuItem>
                                <MenuItem value="Other">Other</MenuItem>
                            </Select>
                        </FormControl>
                        <TextField
                            variant="outlined"
                            placeholder="Image/Breed"
                            fullWidth
                            value={image}
                            onChange={(e) => setImage(e.target.value)}
                            sx={{
                                mb: 2,
                                mr: 1,
                                borderRadius: '12px',
                                background: '#E7E5E5',
                                '& .MuiOutlinedInput-root': {
                                    borderRadius: '12px',
                                },
                            }}
                        />
                        <TextField
                            variant="outlined"
                            placeholder="Age"
                            fullWidth
                            sx={{
                                mb: 2,
                                mr: 1,
                                borderRadius: '12px',
                                background: '#E7E5E5',
                                '& .MuiOutlinedInput-root': {
                                    borderRadius: '12px',
                                },
                            }}
                        />
                        <FormControl fullWidth sx={{ mb: 2 }}>
                            <InputLabel id="gender-label">Gender</InputLabel>
                            <Select
                                labelId="gender-label"
                                variant="outlined"
                                id="gender-select"
                                value={gender}
                                onChange={(e) => setGender(e.target.value as string)}
                                label="gender"
                                sx={{
                                    borderRadius: '12px',
                                    background: '#E7E5E5',
                                    '& .MuiOutlinedInput-root': {
                                        borderRadius: '12px',
                                    },
                                }}
                            >
                                <MenuItem value="Masculine">Male</MenuItem>
                                <MenuItem value="Feminine">Female</MenuItem>
                                <MenuItem value="Unknown">Unknown</MenuItem>
                            </Select>
                        </FormControl>
                    </InputGroup>
                    <TextField
                            variant="outlined"
                            placeholder="Digite o seu e-mail"
                            fullWidth
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            sx={{
                                mb: 2,
                                mr: 1,
                                borderRadius: '12px',
                                background: '#E7E5E5',
                                '& .MuiOutlinedInput-root': {
                                    borderRadius: '12px',
                                },
                            }}
                        />
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
                                backgroundColor: '#e5a50d',
                            },
                            alignSelf: 'flex-end',
                        }}
                    >
                        Done
                    </Button>
                </FormSection>
            </Content>
        </Container>
    );
}


export default CreatePetProfile;
