import React from 'react';
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

const CreatePetProfile: React.FC = () => {
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
                                value={null}
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
                            placeholder="Breed"
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
                                value={null}
                                label="gender"
                                sx={{
                                    borderRadius: '12px',
                                    background: '#E7E5E5',
                                    '& .MuiOutlinedInput-root': {
                                        borderRadius: '12px',
                                    },
                                }}
                            >
                                <MenuItem value="Masculine">Masculine</MenuItem>
                                <MenuItem value="Feminine">Feminine</MenuItem>
                                <MenuItem value="Unknown">Unknown</MenuItem>
                            </Select>
                        </FormControl>
                    </InputGroup>
                    <Button
                        variant="contained"
                        sx={{
                            background: '#F2B705',
                            color: 'black',
                            borderRadius: '12px',
                            height: '1.85069rem',
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
