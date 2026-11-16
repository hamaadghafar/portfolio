import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { profile } from '../../data/profile';

export const socials = [
  { label: 'LinkedIn', href: profile.linkedin, icon: <FaLinkedin /> },
  { label: 'GitHub', href: profile.github, icon: <FaGithub /> },
  { label: 'WhatsApp', href: profile.whatsapp, icon: <FaWhatsapp /> },
  { label: 'Instagram', href: profile.instagram, icon: <FaInstagram /> },
];

export const SocialLinks = () => (
  <>
    {socials.map(s => (
      <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label}>
        {s.icon}
      </a>
    ))}
  </>
);
