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
    InputGroup } from './styles';
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
                            <TextField placeholder="Name" />
                            <TextField placeholder="Write here a description about your pet" />
                        </div>
                    </div>
                    <InputGroup>
                    <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Species</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={null}
                                        label="Age"
                                >
                                <MenuItem>Cat</MenuItem>
                                <MenuItem>Dog</MenuItem>
                                <MenuItem>Other</MenuItem>
                                </Select>
                        </FormControl>
                        <TextField placeholder="Breed" />
                        <TextField placeholder="Age" />
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={null}
                                        label="Age"
                                >
                                <MenuItem>Masculine</MenuItem>
                                <MenuItem>Feminine</MenuItem>
                                <MenuItem>Unknown</MenuItem>
                                </Select>
                        </FormControl>
                    </InputGroup>
                    <Button>Done</Button>
                </FormSection>
            </Content>
        </Container>
    );
}

export default CreatePetProfile;