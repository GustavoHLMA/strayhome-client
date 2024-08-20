import React from 'react';
import Image from 'next/image';
import {
  ServicesContainer,
  BigText,
  Text,
  LogoContainer,
  ImageContainer,
  CardContainer,
  MediumText,
  CollumnContainer,
  RowContainer
} from './styles';
import { BlueLogo, RedCat, YellowDog, BlueBunny } from '@/assets';

const LandingServices: React.FC = () => {
  return (
    <ServicesContainer id="services">
      <RowContainer>
        <BigText>With </BigText>
        <LogoContainer>
          <Image
            src={BlueLogo}
            alt="Stray Home Logo"
            layout="fill"
            objectFit="cover"
            quality={100}
            priority={true}
          />
        </LogoContainer>
        <BigText>You can</BigText>
      </RowContainer>
      <RowContainer>
        <CardContainer>
          <CollumnContainer>
            <ImageContainer>
              <Image
                src={RedCat}
                alt="Red cat image"
                layout="fill"
                objectFit="cover"
                quality={100}
                priority={true}
              />
            </ImageContainer>
            <MediumText>Create & See Pet Social Network:</MediumText>
            <Text>
              Stray Home offers a unique social experience where users can
              interact with pet profiles, share them with friends, and follow
              their journeys from rescue to adoption.{' '}
            </Text>
          </CollumnContainer>
        </CardContainer>
        <CardContainer>
          <CollumnContainer>
            <ImageContainer>
              <Image
                src={YellowDog}
                alt="Yellow dog image"
                layout="fill"
                objectFit="cover"
                quality={100}
                priority={true}
              />
            </ImageContainer>
            <MediumText>Rescue & Adoption::</MediumText>
            <Text>
              We connect volunteers, shelters, and adopters, making the process
              of rescuing and rehoming animals more efficient and impactful.{' '}
            </Text>
          </CollumnContainer>
        </CardContainer>
        <CardContainer>
          <CollumnContainer>
            <ImageContainer>
              <Image
                src={BlueBunny}
                alt="Blue bunny image"
                layout="fill"
                objectFit="cover"
                quality={90}
                priority={true}
              />
            </ImageContainer>
            <MediumText>Create & Support Campaigns:</MediumText>
            <Text>
              Beyond adoption, Stray Home enables users to contribute to
              animal-focused campaigns. Whether it&apos;s funding medical
              treatments, supporting shelter operations, or aiding in rescue
              missions, every contribution helps make a difference.{' '}
            </Text>
          </CollumnContainer>
        </CardContainer>
      </RowContainer>
    </ServicesContainer>
  );
};

export default LandingServices;
