import { motion } from 'framer-motion';
import { HiOutlineArrowDown, HiOutlineArrowRight } from 'react-icons/hi';
import styled from 'styled-components';
import { profile } from '../../data/profile';
import { fadeUp } from '../shared/motion';
import { Section } from '../shared/Section';

export const Contact = () => (
  <Section id="contact">
    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeUp}>
      <Panel>
        <Main>
          <span className="mono kicker">[07] Contact</span>
          <h2 className="disp">
            Need releases that ship safely and systems that stay up? <span className="pill">Let&apos;s talk.</span>
          </h2>
          <CtaRow>
            <a className="btn-i" href={`mailto:${profile.email}`}>
              Email me <HiOutlineArrowRight />
            </a>
            <a className="btn-o" href={profile.resume} download={profile.resumeFileName}>
              Download résumé <HiOutlineArrowDown />
            </a>
          </CtaRow>
        </Main>

        <InfoCol>
          <div>
            <span className="label mono">Email</span>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </div>
          <div>
            <span className="label mono">Phone · WhatsApp</span>
            <a href={profile.whatsapp} target="_blank" rel="noreferrer">
              {profile.phone}
            </a>
          </div>
          <div>
            <span className="label mono">Location</span>
            <span className="value">{profile.location}</span>
          </div>
        </InfoCol>
      </Panel>
    </motion.div>
  </Section>
);

const Panel = styled.div`
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  gap: 24px;
  align-items: end;
  padding: 64px 56px;
  background: ${p => p.theme.colors.primary};
  color: ${p => p.theme.colors.onAccent};
  border-radius: ${p => p.theme.borderRadius.xl};

  @media (max-width: ${p => p.theme.breakpoints.desktop}) {
    grid-template-columns: minmax(0, 1fr);
    gap: 40px;
  }

  @media (max-width: ${p => p.theme.breakpoints.tablet}) {
    padding: 36px 20px;
    border-radius: ${p => p.theme.borderRadius.lg};
  }
`;

const Main = styled.div`
  grid-column: span 8;
  display: flex;
  flex-direction: column;
  gap: 26px;

  .kicker {
    font-size: 13px;
  }

  h2 {
    font-size: 56px;
    line-height: 1;
    letter-spacing: -0.045em;
  }

  .pill {
    display: inline-block;
    margin-top: 8px;
    padding: 0 14px 6px;
    background: ${p => p.theme.colors.onAccent};
    color: ${p => p.theme.colors.primary};
    border-radius: 20px;
  }

  @media (max-width: ${p => p.theme.breakpoints.desktop}) {
    grid-column: span 1;
  }

  @media (max-width: ${p => p.theme.breakpoints.tablet}) {
    h2 {
      font-size: 34px;
    }
  }
`;

const CtaRow = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;

  a {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    height: 50px;
    padding: 0 24px;
    font-size: 14.5px;
    font-weight: 600;
    border-radius: ${p => p.theme.borderRadius.pill};
    transition: transform 0.18s ease;
  }

  a:hover {
    transform: translateY(-2px);
  }

  .btn-i {
    background: ${p => p.theme.colors.background.inverted};
    color: ${p => p.theme.colors.invertedText};
  }

  .btn-o {
    color: inherit;
    border: 1px solid currentColor;
    border-color: color-mix(in srgb, currentColor 30%, transparent);
  }

  @media (max-width: ${p => p.theme.breakpoints.mobile}) {
    flex-direction: column;
    align-items: stretch;

    a {
      justify-content: center;
    }
  }
`;

const InfoCol = styled.div`
  grid-column: span 4;
  display: flex;
  flex-direction: column;
  gap: 18px;

  > div {
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding-top: 12px;
    border-top: 1px solid currentColor;
    border-color: color-mix(in srgb, currentColor 22%, transparent);
  }

  .label {
    font-size: 11.5px;
    opacity: 0.75;
  }

  a,
  .value {
    font-size: 16.5px;
    font-weight: 600;
    overflow-wrap: anywhere;
  }

  a:hover {
    text-decoration: underline;
  }

  @media (max-width: ${p => p.theme.breakpoints.desktop}) {
    grid-column: span 1;
  }
`;
