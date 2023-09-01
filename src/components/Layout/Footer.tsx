import { socialLinks } from '@/constants/socialLinks';
import { socialLink } from '@/types/socialLink';

const Footer = () => {
  return (
    <footer className="flex border-t w-full items-center justify-between p-4">
      <p className="text-lg">
        Develop by{' '}
        <a
          href="https://ultimate-portfolio.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Rayhan Islam"
        >
          Rayhan Islam
        </a>
      </p>
      <div className="flex items-center space-x-4">
        {socialLinks?.map(({ name, Icon, url }: socialLink, idx: number) => (
          <a
            key={idx}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={name}
            className="text-2xl flex items-center justify-center p-2 bg-black text-white rounded-full"
          >
            <Icon />
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
