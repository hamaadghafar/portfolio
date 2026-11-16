import { motion } from 'framer-motion';
import styled from 'styled-components';
import { certifications, education, experiences } from '../../data/profile';
import { fadeUp, stagger } from '../shared/motion';
import { Section, Tags } from '../shared/Section';
import { SectionHeader } from '../shared/SectionHeader';

export const Experience = () => (
  <Section id="experience">
    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.05 }} variants={stagger(0.15)}>
      <motion.div variants={fadeUp}>
        <SectionHeader
          index={4}
          label="Experience"
          title="From cloud platforms to fintech production."
          description="Four-plus years, two teams, one through-line: owning the path to production and keeping it reliable."
        />
      </motion.div>

      <RoleList>
        {experiences.map(exp => (
          <motion.div key={exp.company} variants={fadeUp}>
            <RoleRow>
              <RoleMeta>
                <span className="dates mono">{exp.date}</span>
                <span className="company disp">{exp.company}</span>
                <span className="place">{exp.place}</span>
              </RoleMeta>
              <RoleContent>
                <h3>{exp.role}</h3>
                <p className="summary">{exp.summary}</p>
                <Bullets>
                  {exp.description.map(text => (
                    <li key={text}>
                      <span className="dot" />
                      <p>{text}</p>
                    </li>
                  ))}
                </Bullets>
                <Tags>
                  {exp.technologies.map(t => (
                    <span key={t}>{t}</span>
                  ))}
                </Tags>
              </RoleContent>
            </RoleRow>
          </motion.div>
        ))}
      </RoleList>

      <BoxRow>
        <motion.div variants={fadeUp}>
          <InfoBox>
            <span className="heading mono">Education</span>
            <span className="title disp">{education.degree}</span>
            <span className="school">{education.school}</span>
            <span className="place">
              {education.place} · {education.dates}
            </span>
          </InfoBox>
        </motion.div>
        <motion.div variants={fadeUp}>
          <InfoBox $accent>
            <span className="heading mono">Certifications</span>
            {certifications.map(c => (
              <div key={c.code}>
                <span className="code disp">{c.code}</span>
                <span className="school">{c.name}</span>
                <span className="place">Issued by {c.issuer}</span>
              </div>
            ))}
          </InfoBox>
        </motion.div>
      </BoxRow>
    </motion.div>
  </Section>
);

const RoleList = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 1px solid ${p => p.theme.colors.borderStrong};
`;

const RoleRow = styled.div`
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  gap: 24px;
  padding: 40px 0;
  border-bottom: 1px solid ${p => p.theme.colors.borderStrong};

  @media (max-width: ${p => p.theme.breakpoints.desktop}) {
    grid-template-columns: minmax(0, 1fr);
    padding: 32px 0;
  }
`;

const RoleMeta = styled.div`
  grid-column: span 4;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;

  .dates {
    padding: 4px 12px;
    border-radius: ${p => p.theme.borderRadius.pill};
    background: ${p => p.theme.colors.primary};
    color: ${p => p.theme.colors.onAccent};
    font-size: 11.5px;
  }

  .company {
    font-size: 30px;
    line-height: 1;
    color: ${p => p.theme.colors.text.primary};
  }

  .place {
    font-size: 13.5px;
    color: ${p => p.theme.colors.text.secondary};
  }

  @media (max-width: ${p => p.theme.breakpoints.desktop}) {
    grid-column: span 1;
  }
`;

const RoleContent = styled.div`
  grid-column: span 8;
  display: flex;
  flex-direction: column;
  gap: 16px;

  h3 {
    font-size: 18px;
    font-weight: 600;
    color: ${p => p.theme.colors.text.primary};
  }

  .summary {
    font-size: 15.5px;
    line-height: 1.6;
    color: ${p => p.theme.colors.text.primary};
    opacity: 0.9;
  }

  @media (max-width: ${p => p.theme.breakpoints.desktop}) {
    grid-column: span 1;
  }
`;

const Bullets = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;

  li {
    display: flex;
    gap: 13px;
  }

  .dot {
    flex-shrink: 0;
    width: 7px;
    height: 7px;
    margin-top: 9px;
    border-radius: 50%;
    background: ${p => p.theme.colors.primary};
  }

  p {
    font-size: 15px;
    line-height: 1.6;
    color: ${p => p.theme.colors.text.secondary};
  }
`;

const BoxRow = styled.div`
  display: grid;
  grid-template-columns: 7fr 5fr;
  gap: 24px;
  margin-top: 32px;

  > div {
    display: flex;
  }

  @media (max-width: ${p => p.theme.breakpoints.desktop}) {
    grid-template-columns: minmax(0, 1fr);
  }
`;

const InfoBox = styled.div<{ $accent?: boolean }>`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 32px;
  background: ${p => (p.$accent ? p.theme.colors.secondary : p.theme.colors.background.inverted)};
  color: ${p => (p.$accent ? p.theme.colors.onBright : p.theme.colors.invertedText)};
  border-radius: ${p => p.theme.borderRadius.lg};

  > div {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  > div + div {
    margin-top: 10px;
    padding-top: 16px;
    border-top: 1px solid color-mix(in srgb, currentColor 25%, transparent);
  }

  .heading {
    font-size: 12px;
    color: ${p => (p.$accent ? 'inherit' : '#95CCDD')};
    opacity: ${p => (p.$accent ? 0.85 : 1)};
  }

  .title {
    font-size: 26px;
    line-height: 1.05;
  }

  .code {
    font-size: 44px;
    line-height: 1;
  }

  .school {
    font-size: 16px;
    font-weight: 600;
  }

  .place {
    font-size: 13px;
    opacity: 0.8;
  }

  @media (max-width: ${p => p.theme.breakpoints.tablet}) {
    padding: 24px 20px;
  }
`;
