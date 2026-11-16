import { HashLink } from 'react-router-hash-link';
import styled from 'styled-components';
import { profile } from '../../data/profile';
import { SocialLinks } from '../shared/socials';

export const Footer = () => (
  <Container>
    <OutlineName className="disp" aria-hidden="true">
      {profile.name}
    </OutlineName>

    <BottomRow className="mono">
      <span>
        © {new Date().getFullYear()} {profile.name} · {profile.location}
      </span>
      <Socials>
        <SocialLinks />
      </Socials>
      <HashLink smooth to="#home">
        Back to top ↑
      </HashLink>
    </BottomRow>
  </Container>
);

const Container = styled.footer`
  max-width: 1200px;
  margin: 0 auto;
  padding: 72px 40px 40px;

  @media (max-width: ${p => p.theme.breakpoints.tablet}) {
    padding: 56px 16px 32px;
  }
`;

const OutlineName = styled.div`
  font-size: 140px;
  line-height: 0.85;
  letter-spacing: -0.06em;
  text-align: center;
  text-transform: uppercase;
  white-space: nowrap;
  overflow: hidden;
  color: transparent;
  -webkit-text-stroke: 1.5px ${p => p.theme.colors.borderStrong};

  @media (max-width: ${p => p.theme.breakpoints.desktop}) {
    font-size: 11vw;
  }
`;

const BottomRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
  margin-top: 40px;
  padding-top: 20px;
  border-top: 1px solid ${p => p.theme.colors.borderStrong};
  font-size: 12px;
  color: ${p => p.theme.colors.text.muted};

  a {
    color: ${p => p.theme.colors.text.primary};
  }
`;

const Socials = styled.div`
  display: flex;
  gap: 0.75rem;

  a {
    width: 34px;
    height: 34px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${p => p.theme.colors.background.tertiary};
    border: 1px solid ${p => p.theme.colors.border};
    font-size: 0.95rem;

    &:hover {
      color: ${p => p.theme.colors.primary};
      border-color: ${p => p.theme.colors.primary};
    }
  }
`;
