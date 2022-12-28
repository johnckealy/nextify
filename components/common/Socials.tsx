import React from 'react';
import {
  FaFacebookF, FaInstagram, FaTwitter,
  FaYoutube, FaLinkedin, FaTripadvisor
} from 'react-icons/fa';

interface SocialProps {
  href: string;
  children?: React.ReactNode;
}

interface SocialsProps {
  socials: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
    youtube?: string;
    tripadvisor?: string;
    linkedin?: string;
  }
}

const Social = ({ href, children }: SocialProps) => {
  return (
    <a href={href} className="scale-100 opacity-90 hover:opacity-100 hover:scale-110 transition" target="_blank" rel="noreferrer">
      <div className="flex items-center justify-center h-10 w-10 bg-primary rounded-full text-white p-2.5">
        {children}
      </div>
    </a>
  )
}


const Socials = ({ socials }: SocialsProps) => {
  return (
    <div className="flex gap-4 my-3">
      {socials.facebook && <Social href={socials.facebook} >
        <FaFacebookF />
      </Social>}
      {socials.twitter && <Social href={socials.twitter} >
        <FaTwitter />
      </Social>}
      {socials.instagram && <Social href={socials.instagram} >
        <FaInstagram />
      </Social>}
      {socials.youtube && <Social href={socials.youtube} >
        <FaYoutube />
      </Social>}
      {socials.tripadvisor && <Social href={socials.tripadvisor} >
        <FaTripadvisor />
      </Social>}
      {socials.linkedin && <Social href={socials.linkedin} >
        <FaLinkedin />
      </Social>}
    </div>
  );
}

export default Socials;
