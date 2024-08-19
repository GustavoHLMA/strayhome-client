import React from 'react';
import { Container, Content, LogoSection, FormSection, Form, Input, Button, LogoImage, PawImage1 } from './styles';

const CreatePetProfile: React.FC = () => {
    return (
        <Container>
            <Content>
                <LogoSection>
                    <PawImage1 src='paw.png' alt='Paw'></PawImage1>
                    <LogoImage src="/stray_orange_logo.png" alt="Stray Home Logo" />
                </LogoSection>
                <FormSection>
                    <h1>Create Pet Profile</h1>
                    <Form>
                        <Input placeholder="Name" />
                        <Input placeholder="Write here a description about your pet" />
                        {/* Adicione mais inputs e seletores conforme necessário */}
                        <Button>Done</Button>
                    </Form>
                </FormSection>
            </Content>
        </Container>
    );
}

export default CreatePetProfile;