import { motion } from 'framer-motion';
import styled from 'styled-components';
import { stats } from '../../data/profile';
import { fadeUp } from '../shared/motion';

export const Stats = () => (
  <Container>
    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeUp}>
      <Grid>
        {stats.map(stat => (
          <Cell key={stat.label} $featured={stat.featured}>
            <div className="value disp">{stat.value}</div>
            <div className="label">{stat.label}</div>
          </Cell>
        ))}
      </Grid>
    </motion.div>
  </Container>
);

const Container = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 40px;

  @media (max-width: ${p => p.theme.breakpoints.tablet}) {
    padding: 0 16px;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1px;
  background: ${p => p.theme.colors.borderHair};
  border: 1px solid ${p => p.theme.colors.border};
  border-radius: ${p => p.theme.borderRadius.lg};
  overflow: hidden;

  @media (max-width: ${p => p.theme.breakpoints.desktop}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const Cell = styled.div<{ $featured?: boolean }>`
  padding: 30px 26px 34px;
  background: ${p => (p.$featured ? p.theme.colors.primary : p.theme.colors.background.card)};
  color: ${p => (p.$featured ? p.theme.colors.onAccent : p.theme.colors.text.primary)};
  display: flex;
  flex-direction: column;
  gap: 10px;

  .value {
    font-size: 52px;
    line-height: 0.95;
  }

  .label {
    font-size: 13.5px;
    max-width: 210px;
    color: ${p => (p.$featured ? 'inherit' : p.theme.colors.text.secondary)};
    opacity: ${p => (p.$featured ? 0.85 : 1)};
  }

  @media (max-width: ${p => p.theme.breakpoints.tablet}) {
    padding: 22px 18px 24px;

    .value {
      font-size: 36px;
    }
  }
`;
