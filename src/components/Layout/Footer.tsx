import { socialLinks } from '@/constants/socialLinks';
import { socialLink } from '@/types/socialLink';
import React from 'react';

const Footer = () => {
  return (
    <footer className="flex border-t w-full items-center justify-between p-4">
      <p className="text-lg">
        Develop by{' '}
        <a
          href="https://ultimate-portfolio.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Rayhan Islam
        </a>
      </p>
      <div className="flex items-center space-x-4">
        {socialLinks?.map(({ name, Icon, url }: socialLink, idx: number) => (
          <div
            key={idx}
            className="flex items-center justify-center p-2 bg-black text-white rounded-full"
          >
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl"
            >
              <Icon />
            </a>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
