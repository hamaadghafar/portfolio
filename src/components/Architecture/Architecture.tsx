import { useState } from 'react';
import { motion } from 'framer-motion';
import { HiOutlineArrowDown, HiOutlineArrowLeft, HiOutlineArrowRight } from 'react-icons/hi';
import styled from 'styled-components';
import { principles, systems } from '../../data/profile';
import { fadeUp, stagger } from '../shared/motion';
import { Section } from '../shared/Section';
import { SectionHeader } from '../shared/SectionHeader';

// Snake layout: row 1 flows left→right, then down, row 2 flows right→left.
const layout = [
  { gc: 1, gr: 1, arr: 'r' },
  { gc: 2, gr: 1, arr: 'r' },
  { gc: 3, gr: 1, arr: 'd' },
  { gc: 3, gr: 2, arr: 'l' },
  { gc: 2, gr: 2, arr: 'l' },
  { gc: 1, gr: 2, arr: null },
] as const;

const Arrow = ({ dir }: { dir: 'r' | 'l' | 'd' }) => {
  if (dir === 'r') return <HiOutlineArrowRight className="arrow arrow-r" size={20} aria-hidden="true" />;
  if (dir === 'l') return <HiOutlineArrowLeft className="arrow arrow-l" size={20} aria-hidden="true" />;
  return <HiOutlineArrowDown className="arrow arrow-d" size={20} aria-hidden="true" />;
};

export const Architecture = () => {
  const [activeId, setActiveId] = useState(systems[0].id);
  const active = systems.find(s => s.id === activeId) ?? systems[0];

  return (
    <Section id="architecture">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.05 }} variants={stagger(0.1)}>
        <motion.div variants={fadeUp}>
          <SectionHeader
            index={3}
            label="Architecture & system design"
            title="How the platforms are shaped."
            description="Three systems I've built and operated, from code going in to traffic being served. Pick one to see its flow and key decisions."
          />
        </motion.div>

        <motion.div variants={fadeUp}>
          <TabBar role="tablist">
            {systems.map(s => (
              <Tab
                key={s.id}
                role="tab"
                aria-selected={s.id === activeId}
                $active={s.id === activeId}
                onClick={() => setActiveId(s.id)}
              >
                {s.label}
              </Tab>
            ))}
          </TabBar>
        </motion.div>

        <motion.div variants={fadeUp}>
          <Layout>
            <DiagramPanel>
              <Intro>
                <span className="kind mono">{active.kind}</span>
                <h3 className="disp">{active.title}</h3>
                <p>{active.blurb}</p>
              </Intro>

              <NodeGrid key={active.id}>
                {active.nodes.map((node, i) => {
                  const pos = layout[i];
                  return (
                    <Node
                      key={node.title}
                      $gc={pos.gc}
                      $gr={pos.gr}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.06, duration: 0.3 }}
                    >
                      <span className="num monoc">{String(i + 1).padStart(2, '0')}</span>
                      <span className="title">{node.title}</span>
                      <span className="sub">{node.sub}</span>
                      {pos.arr && <Arrow dir={pos.arr} />}
                    </Node>
                  );
                })}
              </NodeGrid>
            </DiagramPanel>

            <Sidebar>
              <SideBox>
                <span className="heading mono">Key design decisions</span>
                {active.decisions.map(text => (
                  <div className="item" key={text}>
                    <span className="dot" />
                    <span>{text}</span>
                  </div>
                ))}
              </SideBox>

              <SideBox $accent>
                <span className="heading mono">How I work</span>
                {principles.map(text => (
                  <div className="item" key={text}>
                    <span className="dash" />
                    <span>{text}</span>
                  </div>
                ))}
              </SideBox>
            </Sidebar>
          </Layout>
        </motion.div>
      </motion.div>
    </Section>
  );
};

const TabBar = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: max-content;
  max-width: 100%;
  margin-bottom: 24px;
  padding: 5px;
  gap: 4px;
  background: ${p => p.theme.colors.background.card};
  border: 1px solid ${p => p.theme.colors.border};
  border-radius: ${p => p.theme.borderRadius.pill};

  @media (max-width: ${p => p.theme.breakpoints.tablet}) {
    width: 100%;
    border-radius: ${p => p.theme.borderRadius.md};

    button {
      flex: 1 1 auto;
    }
  }
`;

const Tab = styled.button<{ $active: boolean }>`
  min-height: 42px;
  padding: 0 20px;
  border-radius: ${p => p.theme.borderRadius.pill};
  background: ${p => (p.$active ? p.theme.colors.primary : 'transparent')};
  color: ${p => (p.$active ? p.theme.colors.onAccent : p.theme.colors.text.primary)};
  font-size: 13.5px;
  font-weight: 600;
  transition: all 0.2s ease;
  white-space: nowrap;
`;

const Layout = styled.div`
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  gap: 24px;
  align-items: stretch;

  @media (max-width: ${p => p.theme.breakpoints.desktop}) {
    grid-template-columns: minmax(0, 1fr);
  }
`;

const DiagramPanel = styled.div`
  grid-column: span 8;
  background: ${p => p.theme.colors.background.card};
  border: 1px solid ${p => p.theme.colors.border};
  border-radius: ${p => p.theme.borderRadius.lg};
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 26px;

  @media (max-width: ${p => p.theme.breakpoints.desktop}) {
    grid-column: span 1;
  }

  @media (max-width: ${p => p.theme.breakpoints.tablet}) {
    padding: 22px 16px;
  }
`;

const Intro = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  .kind {
    font-size: 12px;
    color: ${p => p.theme.colors.primary};
  }

  h3 {
    font-size: 32px;
    line-height: 1.05;
    letter-spacing: -0.03em;
    color: ${p => p.theme.colors.text.primary};
  }

  p {
    max-width: 600px;
    font-size: 14.5px;
    color: ${p => p.theme.colors.text.secondary};
  }

  @media (max-width: ${p => p.theme.breakpoints.tablet}) {
    h3 {
      font-size: 24px;
    }
  }
`;

const NodeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  column-gap: 40px;
  row-gap: 48px;
  padding: 32px 30px 30px;
  background-color: ${p => p.theme.colors.background.primary};
  background-image: radial-gradient(${p => p.theme.colors.borderHair} 1px, transparent 1px);
  background-size: 18px 18px;
  border: 1px solid ${p => p.theme.colors.border};
  border-radius: ${p => p.theme.borderRadius.md};

  @media (max-width: ${p => p.theme.breakpoints.tablet}) {
    grid-template-columns: minmax(0, 1fr);
    row-gap: 44px;
    padding: 20px 16px;
  }
`;

const Node = styled(motion.div)<{ $gc: number; $gr: number }>`
  position: relative;
  grid-column: ${p => p.$gc};
  grid-row: ${p => p.$gr};
  min-height: 116px;
  padding: 14px 16px 16px;
  background: ${p => p.theme.colors.background.card};
  border: 1px solid ${p => p.theme.colors.border};
  border-radius: ${p => p.theme.borderRadius.sm};
  box-shadow: ${p => p.theme.shadows.sm};
  display: flex;
  flex-direction: column;
  gap: 6px;

  .num {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 26px;
    height: 20px;
    border-radius: 7px;
    background: ${p => p.theme.colors.primary};
    color: ${p => p.theme.colors.onAccent};
    font-size: 11px;
  }

  .title {
    font-size: 14.5px;
    font-weight: 600;
    line-height: 1.25;
    color: ${p => p.theme.colors.text.primary};
  }

  .sub {
    font-size: 12.5px;
    line-height: 1.4;
    color: ${p => p.theme.colors.text.secondary};
  }

  .arrow {
    position: absolute;
    color: ${p => p.theme.colors.primary};
  }

  .arrow-r {
    right: -30px;
    top: 50%;
    margin-top: -10px;
  }

  .arrow-l {
    left: -30px;
    top: 50%;
    margin-top: -10px;
  }

  .arrow-d {
    left: 50%;
    bottom: -34px;
    margin-left: -10px;
  }

  /* Single column on phones: every node flows straight down. */
  @media (max-width: ${p => p.theme.breakpoints.tablet}) {
    grid-column: 1;
    grid-row: auto;
    min-height: 0;

    .arrow-r,
    .arrow-l {
      left: 50%;
      right: auto;
      top: auto;
      bottom: -34px;
      margin: 0 0 0 -10px;
      transform: rotate(90deg);
    }

    .arrow-l {
      transform: rotate(-90deg);
    }

    .arrow-d {
      transform: none;
    }
  }
`;

const Sidebar = styled.div`
  grid-column: span 4;
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (max-width: ${p => p.theme.breakpoints.desktop}) {
    grid-column: span 1;
  }
`;

const SideBox = styled.div<{ $accent?: boolean }>`
  flex-grow: 1;
  background: ${p => (p.$accent ? p.theme.colors.primary : p.theme.colors.background.card)};
  color: ${p => (p.$accent ? p.theme.colors.onAccent : p.theme.colors.text.primary)};
  border: 1px solid ${p => (p.$accent ? 'transparent' : p.theme.colors.border)};
  border-radius: ${p => p.theme.borderRadius.lg};
  padding: 26px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  .heading {
    font-size: 12px;
    color: ${p => (p.$accent ? 'inherit' : p.theme.colors.text.muted)};
  }

  .item {
    display: flex;
    gap: 12px;
    font-size: 14px;
    line-height: 1.5;
    opacity: 0.92;
  }

  .dot {
    flex-shrink: 0;
    width: 7px;
    height: 7px;
    margin-top: 7px;
    border-radius: 50%;
    background: currentColor;
  }

  .dash {
    flex-shrink: 0;
    width: 13px;
    height: 2px;
    margin-top: 10px;
    border-radius: 2px;
    background: currentColor;
  }
`;
