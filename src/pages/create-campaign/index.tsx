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
import { Button, TextField, InputAdornment } from '@mui/material';
import { createCampaign, getUserByEmail } from '@/services/api';

const CreateCampaign: React.FC = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [email, setEmail] = useState('');
    const [image, setImage] = useState('');
    const [target, setTarget] = useState(0);
    const [startDate, setStartDate] = useState<Date | undefined>(undefined);
    const [deadline, setDeadline] = useState<Date | undefined>(undefined);

    const handleChange = (field: 'startDate' | 'deadline', value: string) => {
        const dateValue = new Date(value);
        if (field === 'startDate') {
            setStartDate(dateValue);
        } else if (field === 'deadline') {
            setDeadline(dateValue);
        }
    };

    const handleSubmit = async () => {
        try {
            const user = await getUserByEmail(email);
            const creatorId = user.data.id;

            const campaignStartDate = startDate ?? new Date();
            const campaignDeadline = deadline ?? new Date();

            const newCampaign = await createCampaign({
                name,
                description,
                image: 'https://example.com/images/rex.jpg',
                target,
                startDate: campaignStartDate,
                deadline: campaignDeadline,
                creatorId
            });

            console.log('Campanha criada com sucesso:', newCampaign);
        } catch (error) {
            console.error('Erro ao criar a campanha:', error);
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
                    <Title>Create Campaign</Title>

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
                                placeholder="Write here a description about your campaign"
                                multiline
                                rows={4}
                                fullWidth
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
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
                        <TextField
                            variant="outlined"
                            placeholder="Target"
                            type="number"
                            value={target}
                            onChange={(e) => setTarget(parseFloat(e.target.value))}
                            InputProps={{
                                startAdornment: <InputAdornment position="start">$</InputAdornment>,
                            }}
                            sx={{
                                borderRadius: '12px',
                                background: '#E7E5E5',
                                '& .MuiOutlinedInput-root': {
                                    borderRadius: '12px',
                                    height: '56px',
                                },
                            }}
                        />
                        <TextField
                            label="Start Date"
                            value={startDate?.toISOString().split('T')[0] || ''}
                            onChange={(e) => handleChange('startDate', e.target.value)}
                            variant="outlined"
                            type="date"
                            InputLabelProps={{ shrink: true }}
                            sx={{
                                borderRadius: '12px',
                                background: '#E7E5E5',
                                '& .MuiOutlinedInput-root': {
                                    borderRadius: '12px',
                                    height: '56px',
                                },
                            }}
                        />
                        <TextField
                            label="Deadline"
                            value={deadline?.toISOString().split('T')[0] || ''}
                            onChange={(e) => handleChange('deadline', e.target.value)}
                            variant="outlined"
                            type="date"
                            InputLabelProps={{ shrink: true }}
                            sx={{
                                borderRadius: '12px',
                                background: '#E7E5E5',
                                '& .MuiOutlinedInput-root': {
                                    borderRadius: '12px',
                                    height: '56px',
                                },
                            }}
                        />
                    </InputGroup>


                    <TextField
                        fullWidth
                        placeholder="Digite o seu e-mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        sx={{
                            mb: 2,
                            borderRadius: '12px',
                            background: '#E7E5E5',
                            marginTop: '11px',
                            '& .MuiOutlinedInput-root': {
                                borderRadius: '12px',
                                height: '56px',
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

export default CreateCampaign;
