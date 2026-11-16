import { motion } from 'framer-motion';
import styled from 'styled-components';
import { skillGroups } from '../../data/profile';
import { fadeUp, stagger } from '../shared/motion';
import { Section, Tags } from '../shared/Section';
import { SectionHeader } from '../shared/SectionHeader';

export const Skills = () => (
  <Section id="skills">
    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={stagger(0.08)}>
      <motion.div variants={fadeUp}>
        <SectionHeader
          index={5}
          label="Technical skills"
          title="The stack I run in production."
          description="Grouped by the layer it serves, from cloud accounts down to the shell."
        />
      </motion.div>

      <motion.div variants={fadeUp}>
        <Grid>
          {skillGroups.map(group => (
            <Card key={group.name}>
              <span className="heading mono">{group.name}</span>
              <Tags>
                {group.items.map(item => (
                  <span key={item}>{item}</span>
                ))}
              </Tags>
            </Card>
          ))}
        </Grid>
      </motion.div>
    </motion.div>
  </Section>
);

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;

  @media (max-width: ${p => p.theme.breakpoints.desktop}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: ${p => p.theme.breakpoints.tablet}) {
    grid-template-columns: minmax(0, 1fr);
  }
`;

const Card = styled.div`
  padding: 26px;
  background: ${p => p.theme.colors.background.card};
  border: 1px solid ${p => p.theme.colors.border};
  border-radius: ${p => p.theme.borderRadius.lg};
  display: flex;
  flex-direction: column;
  gap: 16px;
  transition: border-color 0.25s ease, transform 0.25s ease;

  &:hover {
    border-color: ${p => p.theme.colors.primary};
    transform: translateY(-3px);
  }

  .heading {
    font-size: 12px;
    color: ${p => p.theme.colors.primary};
  }
`;
