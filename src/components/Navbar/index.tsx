import React from 'react';
import Image from 'next/image';
import { NavbarContainer, NavLinks, UserSection, Text } from './styles';
import { YellowLogoSvg, Flag, ProfilePic } from '@/assets';

//Not integrated with api

const Navbar = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <NavbarContainer>
      <Image
        src={YellowLogoSvg}
        alt="Stray Home Logo"
        width={120}
        height={120}
        style={{ cursor: 'pointer' }}
        onClick={() => scrollToSection('home')}
      />
      <NavLinks>
        <a onClick={() => scrollToSection('community')}>Pet Community</a>
        <a onClick={() => scrollToSection('campaigns')}>Campaigns</a>
        <a onClick={() => scrollToSection('about')}>About Us</a>
      </NavLinks>
      <UserSection>
        <Image
          src={Flag}
          alt="Canada Flag"
          width={80}
          height={40}
          style={{
            borderRadius: '0%'
          }}
        />
        <Text>
          Hello,{' '}
          <span
            style={{
              fontWeight: 400
            }}
          >
            Joe
          </span>
        </Text>
        <Image
          src={ProfilePic}
          alt="User Profile"
          width={65}
          height={65}
          style={{ borderRadius: '50%' }}
        />
      </UserSection>
    </NavbarContainer>
  );
};

export default Navbar;
