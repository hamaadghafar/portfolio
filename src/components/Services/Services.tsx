import { motion } from 'framer-motion';
import styled from 'styled-components';
import { services } from '../../data/profile';
import { fadeUp, stagger } from '../shared/motion';
import { Section } from '../shared/Section';
import { SectionHeader } from '../shared/SectionHeader';

export const Services = () => (
  <Section id="services">
    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={stagger(0.1)}>
      <motion.div variants={fadeUp}>
        <SectionHeader
          index={2}
          label="What I do"
          title="Pipelines, platforms, uptime."
          description="From the first commit to a healthy production node, I design the path and keep it running."
        />
      </motion.div>

      <motion.div variants={fadeUp}>
        <Panel>
          {services.map(s => (
            <Row key={s.num}>
              <span className="num mono">{s.num}</span>
              <h3 className="disp">{s.title}</h3>
              <p>{s.desc}</p>
              <div className="tags">
                {s.tags.map(tag => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </Row>
          ))}
        </Panel>
      </motion.div>
    </motion.div>
  </Section>
);

const Panel = styled.div`
  border: 1px solid ${p => p.theme.colors.border};
  border-radius: ${p => p.theme.borderRadius.lg};
  background: ${p => p.theme.colors.background.card};
  overflow: hidden;
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: 60px minmax(0, 4fr) minmax(0, 4fr) minmax(0, 3fr);
  gap: 28px;
  align-items: start;
  padding: 28px;
  border-bottom: 1px solid ${p => p.theme.colors.borderHair};
  transition: background 0.15s ease;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background: ${p => p.theme.colors.rowHover};
  }

  &:hover h3 {
    color: ${p => p.theme.colors.primary};
  }

  .num {
    padding-top: 6px;
    font-size: 12.5px;
    color: ${p => p.theme.colors.primary};
  }

  h3 {
    font-size: 26px;
    line-height: 1.1;
    letter-spacing: -0.03em;
    color: ${p => p.theme.colors.text.primary};
    transition: color 0.15s ease;
  }

  p {
    padding-top: 4px;
    font-size: 14.5px;
    line-height: 1.6;
    color: ${p => p.theme.colors.text.secondary};
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    padding-top: 4px;

    span {
      font-family: ${p => p.theme.fonts.mono};
      font-size: 11px;
      padding: 3px 10px;
      border-radius: ${p => p.theme.borderRadius.pill};
      border: 1px solid ${p => p.theme.colors.border};
      color: ${p => p.theme.colors.text.secondary};
    }
  }

  @media (max-width: ${p => p.theme.breakpoints.desktop}) {
    grid-template-columns: 1fr;
    gap: 10px;
    padding: 24px 20px;

    .num {
      padding-top: 0;
    }

    h3 {
      font-size: 22px;
    }
  }
`;
