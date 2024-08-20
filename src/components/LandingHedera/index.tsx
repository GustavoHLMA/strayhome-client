import React, { useState } from 'react';
import {
  HederaSectionContainer,
  Title,
  SubTitle,
  LogoWrapper,
  Logos,
  TabsWrapper,
  TabButton,
  CarouselContainer,
  CarouselTitle,
  CarouselText,
  ArrowButton,
  IndicatorWrapper,
  Indicator,
  RowDiv,
  Text
} from './styles';
import { WhiteLogo, HederaLogo, CrossSymbol } from '@/assets';

const carouselItems = [
  {
    id: 1,
    title: 'Why Hedera?',
    text: 'Hedera is a next-generation, distributed ledger technology (DLT) that offers unparalleled security, speed, and transparency. By leveraging Hedera’s capabilities, Stray Home ensures that every transaction made on our platform is secure, tamper-proof, and fully transparent to our users.'
  },
  {
    id: 2,
    title: 'Crowdfunding with Confidence',
    text: 'Through Hedera, we are able to implement smart contracts—self-executing contracts with the terms of the agreement directly written into code. These smart contracts automatically handle the distribution of funds according to the specific conditions set by the campaign, ensuring that donations are used exactly as intended. This automation not only reduces the risk of errors but also eliminates the possibility of funds being misused.'
  },
  {
    id: 3,
    title: 'Transparency and Trust',
    text: 'One of the key advantages of using Hedera is its public ledger, which allows every transaction to be transparently recorded and verifiable by anyone. Donors can track their contributions in real-time, seeing exactly how and when their funds are being utilized. This level of transparency builds trust between Stray Home and our community of donors, assuring them that their contributions are making a real impact.'
  },
  {
    id: 4,
    title: 'Enhanced Security',
    text: 'Hedera’s advanced cryptographic technology ensures that all transactions on the Stray Home platform are secure and immutable. This means that once a donation is made, it cannot be altered or reversed without consensus from the network. This high level of security protects both the donors and the campaigns, ensuring that every contribution is safe from fraud and tampering.'
  }
];

const LandingHedera: React.FC = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handlePrev = () => {
    setActiveTab((prev) => (prev === 1 ? carouselItems.length : prev - 1));
  };

  const handleNext = () => {
    setActiveTab((prev) => (prev === carouselItems.length ? 1 : prev + 1));
  };

  const activeItem = carouselItems.find((item) => item.id === activeTab);

  return (
    <HederaSectionContainer>
      <RowDiv>
        <Title>Stray Home & Hedera:</Title>
        <Text>Ensuring Secure and Transparent Crowdfunding</Text>
      </RowDiv>
      <RowDiv>
        <LogoWrapper>
          <Logos src={WhiteLogo.src} alt="Stray Home Logo" />
          <Logos
            src={CrossSymbol.src}
            alt="X symbol"
            style={{ width: '2vw' }}
          />
          <Logos src={HederaLogo.src} alt="Hedera Logo" />
        </LogoWrapper>
        <SubTitle>
          At Stray Home, we are committed to not only providing a platform for
          pet adoption but also ensuring that all donations and contributions to
          animal-focused campaigns are handled with the utmost security and
          transparency. That’s why we’ve chosen to integrate Hedera technology
          into our website’s crowdfunding and donation processes.
        </SubTitle>
      </RowDiv>
      <TabsWrapper>
        <TabButton active={activeTab === 1} onClick={() => setActiveTab(1)}>
          Why Hedera?
        </TabButton>
        <TabButton active={activeTab === 2} onClick={() => setActiveTab(2)}>
          Crowdfunding
        </TabButton>
        <TabButton active={activeTab === 3} onClick={() => setActiveTab(3)}>
          Transparency
        </TabButton>
        <TabButton active={activeTab === 4} onClick={() => setActiveTab(4)}>
          Security
        </TabButton>
      </TabsWrapper>
      <CarouselContainer>
        <ArrowButton onClick={handlePrev}>{'<'}</ArrowButton>
        <div>
          <CarouselTitle>{activeItem?.title}</CarouselTitle>
          <CarouselText>{activeItem?.text}</CarouselText>
        </div>
        <ArrowButton onClick={handleNext}>{'>'}</ArrowButton>
      </CarouselContainer>
      <IndicatorWrapper>
        {carouselItems.map((item) => (
          <Indicator
            key={item.id}
            active={item.id === activeTab}
            onClick={() => setActiveTab(item.id)}
          />
        ))}
      </IndicatorWrapper>
    </HederaSectionContainer>
  );
};

export default LandingHedera;
