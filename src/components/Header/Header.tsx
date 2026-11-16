import { useEffect, useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import { FaArrowRight, FaBars, FaMoon, FaSun, FaTimes } from 'react-icons/fa';
import styled from 'styled-components';
import { useTheme } from '../../contexts/ThemeContext';
import { profile } from '../../data/profile';

const NAV_ITEMS = [
  { id: 'work', label: 'Work' },
  { id: 'services', label: 'Services' },
  { id: 'architecture', label: 'Architecture' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'about', label: 'About' },
];

const SECTION_IDS = ['home', ...NAV_ITEMS.map(i => i.id), 'contact'];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [active, setActive] = useState('home');
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    );
    SECTION_IDS.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const close = () => setIsOpen(false);

  return (
    <Bar $scrolled={isScrolled || isOpen}>
      <Nav>
        <HashLink smooth to="#home" className="logo" onClick={close}>
          <span className="badge disp">{profile.initials}</span>
          <span className="name">{profile.name}</span>
        </HashLink>

        <Links $open={isOpen}>
          {NAV_ITEMS.map(item => (
            <HashLink
              key={item.id}
              smooth
              to={`#${item.id}`}
              className={`navlink${active === item.id ? ' active' : ''}`}
              onClick={close}
            >
              {item.label}
            </HashLink>
          ))}
          <HashLink smooth to="#contact" className="talk-btn" onClick={close}>
            Let&apos;s talk <FaArrowRight />
          </HashLink>
        </Links>

        <Right>
          <Toggle onClick={toggleTheme} aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}>
            {isDark ? <FaMoon /> : <FaSun />}
            <span>{isDark ? 'Dark' : 'Light'}</span>
          </Toggle>
          <Burger onClick={() => setIsOpen(o => !o)} aria-label="Toggle menu" aria-expanded={isOpen}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </Burger>
        </Right>
      </Nav>
    </Bar>
  );
};

const Bar = styled.header<{ $scrolled: boolean }>`
  position: fixed;
  inset: 0 0 auto 0;
  z-index: 1000;
  background: ${p => (p.$scrolled ? p.theme.colors.background.primary : 'transparent')};
  border-bottom: 1px solid ${p => (p.$scrolled ? p.theme.colors.border : 'transparent')};
  transition: background 0.3s ease, border-color 0.3s ease;
`;

const Nav = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;

  @media (max-width: ${p => p.theme.breakpoints.tablet}) {
    padding: 14px 16px;
  }

  .logo {
    display: flex;
    align-items: center;
    gap: 14px;
    flex-shrink: 0;
  }

  .badge {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    background: ${p => p.theme.colors.primary};
    color: ${p => p.theme.colors.onAccent};
    border-radius: 14px;
    font-size: 19px;
  }

  .name {
    font-family: ${p => p.theme.fonts.mono};
    font-size: 13px;
    text-transform: uppercase;
    letter-spacing: 0.08em;

    @media (max-width: ${p => p.theme.breakpoints.tablet}) {
      display: none;
    }
  }
`;

const Links = styled.div<{ $open: boolean }>`
  display: flex;
  align-items: center;
  gap: 22px;

  a.navlink {
    font-family: ${p => p.theme.fonts.mono};
    font-size: 12.5px;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: ${p => p.theme.colors.text.secondary};

    &:hover,
    &.active {
      color: ${p => p.theme.colors.primary};
    }
  }

  .talk-btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    height: 42px;
    padding: 0 20px;
    font-size: 13px;
    font-weight: 600;
    border-radius: ${p => p.theme.borderRadius.pill};
    background: ${p => p.theme.colors.background.inverted};
    color: ${p => p.theme.colors.invertedText};

    &:hover {
      transform: translateY(-2px);
      box-shadow: ${p => p.theme.shadows.sm};
    }
  }

  @media (max-width: ${p => p.theme.breakpoints.desktop}) {
    position: fixed;
    top: 72px;
    left: 0;
    right: 0;
    flex-direction: column;
    align-items: stretch;
    gap: 0;
    padding: 1.5rem;
    background: ${p => p.theme.colors.background.secondary};
    border-top: 1px solid ${p => p.theme.colors.border};
    transform: ${p => (p.$open ? 'translateX(0)' : 'translateX(100%)')};
    visibility: ${p => (p.$open ? 'visible' : 'hidden')};
    transition: transform 0.3s ease, visibility 0.3s;

    a.navlink {
      padding: 0.85rem 0.5rem;
      border-radius: ${p => p.theme.borderRadius.sm};
    }

    .talk-btn {
      justify-content: center;
      margin-top: 0.75rem;
    }
  }
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const Toggle = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  height: 42px;
  padding: 0 14px;
  border-radius: ${p => p.theme.borderRadius.pill};
  border: 1px solid ${p => p.theme.colors.border};
  background: transparent;
  color: ${p => p.theme.colors.text.primary};

  span {
    font-family: ${p => p.theme.fonts.mono};
    font-size: 11.5px;
    text-transform: uppercase;
    letter-spacing: 0.08em;
  }

  &:hover {
    border-color: ${p => p.theme.colors.primary};
    color: ${p => p.theme.colors.primary};
  }

  @media (max-width: ${p => p.theme.breakpoints.tablet}) {
    padding: 0 12px;
    span {
      display: none;
    }
  }
`;

const Burger = styled.button`
  display: none;
  background: transparent;
  color: ${p => p.theme.colors.text.primary};
  font-size: 1.4rem;
  padding: 6px;

  @media (max-width: ${p => p.theme.breakpoints.desktop}) {
    display: flex;
  }
`;
