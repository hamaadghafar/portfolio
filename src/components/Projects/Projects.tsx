import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import styled, { css } from 'styled-components';
import { profile, projects } from '../../data/profile';
import type { Variant } from '../../data/profile';
import { fadeUp, stagger } from '../shared/motion';
import { Section } from '../shared/Section';
import { SectionHeader } from '../shared/SectionHeader';

export const Projects = () => {
  const [open, setOpen] = useState<Record<string, boolean>>({ [projects[0].id]: true });
  const toggle = (id: string) => setOpen(prev => ({ ...prev, [id]: !prev[id] }));

  return (
    <Section id="work">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.05 }} variants={stagger()}>
        <motion.div variants={fadeUp}>
          <SectionHeader
            index={1}
            label="Selected work"
            title="Platforms I build and run."
            description="Five pieces of infrastructure I've owned in production. Open any card to see what I owned and delivered."
          />
        </motion.div>

        <Grid>
          {projects.map(project => {
            const isOpen = !!open[project.id];
            const bodyId = `contrib-${project.id}`;
            return (
              <Cell key={project.id} variants={fadeUp} $span={project.span}>
                <Card $variant={project.variant}>
                  <CardTop className="mono">
                    <span className="kind">
                      {project.num} / {project.kind}
                    </span>
                    <span className="org">{project.org}</span>
                  </CardTop>

                  <CardMain>
                    <span className="eyebrow">{project.name}</span>
                    <h3 className="disp">{project.headline}</h3>
                    <p>{project.desc}</p>
                  </CardMain>

                  <CardStats>
                    {project.stats.map(stat => (
                      <div key={stat.l}>
                        <div className="stat-value disp">{stat.v}</div>
                        <div className="stat-label">{stat.l}</div>
                      </div>
                    ))}
                  </CardStats>

                  <CardTags>
                    {project.tags.map(tag => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </CardTags>

                  <div>
                    <Toggle aria-expanded={isOpen} aria-controls={bodyId} onClick={() => toggle(project.id)}>
                      <span className="label">My contribution</span>
                      <Sign $variant={project.variant}>{isOpen ? '–' : '+'}</Sign>
                    </Toggle>
                    {isOpen && (
                      <Body id={bodyId}>
                        <p>
                          <strong>What I owned. </strong>
                          {project.owned}
                        </p>
                        <p>
                          <strong>What I delivered. </strong>
                          {project.delivered}
                        </p>
                      </Body>
                    )}
                  </div>
                </Card>
              </Cell>
            );
          })}
        </Grid>

        <motion.div variants={fadeUp} style={{ marginTop: 24 }}>
          <More href={profile.github} target="_blank" rel="noreferrer">
            <div>
              <strong>More on GitHub</strong>
              <br />
              <span className="sub">Infrastructure code, pipelines and automation scripts.</span>
            </div>
            <FaGithub />
          </More>
        </motion.div>
      </motion.div>
    </Section>
  );
};

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  gap: 24px;
  align-items: stretch;

  @media (max-width: ${p => p.theme.breakpoints.desktop}) {
    grid-template-columns: minmax(0, 1fr);
  }
`;

const Cell = styled(motion.div)<{ $span: number }>`
  grid-column: span ${p => p.$span};
  display: flex;

  @media (max-width: ${p => p.theme.breakpoints.desktop}) {
    grid-column: span 1;
  }
`;

const variantStyles = {
  feat: css`
    background: ${p => p.theme.colors.primary};
    color: ${p => p.theme.colors.onAccent};
    border-color: transparent;
  `,
  inv: css`
    background: ${p => p.theme.colors.background.inverted};
    color: ${p => p.theme.colors.invertedText};
    border-color: transparent;
  `,
  plain: css`
    background: ${p => p.theme.colors.background.card};
    color: ${p => p.theme.colors.text.primary};
    border-color: ${p => p.theme.colors.border};
  `,
};

const Card = styled.article<{ $variant: Variant }>`
  width: 100%;
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 22px;
  border: 1px solid;
  border-radius: ${p => p.theme.borderRadius.lg};
  transition: transform 0.25s ease, box-shadow 0.25s ease;
  ${p => variantStyles[p.$variant]}

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${p => p.theme.shadows.md};
  }

  @media (max-width: ${p => p.theme.breakpoints.tablet}) {
    padding: 24px 20px;
  }
`;

const CardTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  flex-wrap: wrap;
  font-size: 12px;

  .kind {
    opacity: 0.75;
  }

  .org {
    padding: 3px 12px;
    border-radius: ${p => p.theme.borderRadius.pill};
    border: 1px solid currentColor;
    opacity: 0.85;
  }
`;

const CardMain = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  .eyebrow {
    font-size: 15px;
    font-weight: 600;
  }

  h3 {
    font-size: 30px;
    line-height: 1.05;
    letter-spacing: -0.03em;
  }

  p {
    font-size: 15px;
    line-height: 1.6;
    opacity: 0.85;
  }

  @media (max-width: ${p => p.theme.breakpoints.tablet}) {
    h3 {
      font-size: 24px;
    }
  }
`;

const CardStats = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 18px 40px;
  padding: 16px 0;
  border-top: 1px solid;
  border-bottom: 1px solid;
  border-color: inherit;

  .stat-value {
    font-size: 26px;
    line-height: 1;
    letter-spacing: -0.03em;
  }

  .stat-label {
    max-width: 200px;
    font-size: 12.5px;
    opacity: 0.8;
    margin-top: 5px;
  }
`;

const CardTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  span {
    font-family: ${p => p.theme.fonts.mono};
    font-size: 11.5px;
    padding: 3px 12px;
    border-radius: ${p => p.theme.borderRadius.pill};
    background: rgba(127, 127, 127, 0.14);
  }
`;

const Toggle = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background: transparent;
  color: inherit;
  text-align: left;

  .label {
    font-family: ${p => p.theme.fonts.mono};
    font-size: 12.5px;
    text-transform: uppercase;
    letter-spacing: 0.08em;
  }
`;

const Sign = styled.span<{ $variant: Variant }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  font-size: 18px;
  line-height: 1;
  flex-shrink: 0;
  background: ${p =>
    p.$variant === 'feat'
      ? p.theme.colors.onAccent
      : p.$variant === 'inv'
        ? p.theme.colors.invertedText
        : p.theme.colors.text.primary};
  color: ${p =>
    p.$variant === 'feat'
      ? p.theme.colors.primary
      : p.$variant === 'inv'
        ? p.theme.colors.background.inverted
        : p.theme.colors.background.card};
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-top: 12px;
  font-size: 14px;
  line-height: 1.65;
  opacity: 0.92;

  strong {
    font-weight: 600;
  }
`;

const More = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 28px 32px;
  border: 1.5px dashed ${p => p.theme.colors.border};
  border-radius: ${p => p.theme.borderRadius.lg};
  color: ${p => p.theme.colors.text.secondary};

  strong {
    color: ${p => p.theme.colors.text.primary};
    font-size: 17px;
  }

  .sub {
    font-size: 14px;
  }

  svg {
    flex-shrink: 0;
    font-size: 1.4rem;
    color: ${p => p.theme.colors.primary};
  }

  &:hover {
    border-color: ${p => p.theme.colors.primary};
    transform: translateY(-2px);
  }

  @media (max-width: ${p => p.theme.breakpoints.tablet}) {
    padding: 22px 20px;
  }
`;
