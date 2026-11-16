import { motion } from 'framer-motion';
import { HashLink } from 'react-router-hash-link';
import { HiOutlineArrowDown, HiOutlineArrowRight } from 'react-icons/hi';
import styled from 'styled-components';
import { profile } from '../../data/profile';
import { fadeUp, stagger } from '../shared/motion';
import { SocialLinks } from '../shared/socials';

const pipeline = [
  { stage: 'build', detail: 'teamcity · docker image', ok: true },
  { stage: 'dev', detail: 'deployed · smoke tests', ok: true },
  { stage: 'qa', detail: 'deployed · regression', ok: true },
  { stage: 'uat', detail: 'client sign-off', ok: true },
  { stage: 'stg', detail: 'end-to-end validation', ok: true },
  { stage: 'prod', detail: 'f5 pool · 2/2 healthy', ok: true },
];

export const Hero = () => (
  <Container id="home">
    <GuideLines aria-hidden="true">
      <span />
      <span />
      <span />
      <span />
      <span />
    </GuideLines>
    <Glow aria-hidden="true" />

    <Content variants={stagger(0.15)} initial="hidden" animate="visible">
      <Text>
        <motion.div variants={fadeUp}>
          <Eyebrow className="mono">
            <span className="dot" />
            <span>{profile.role}</span>
          </Eyebrow>
        </motion.div>

        <motion.div variants={fadeUp}>
          <Title className="disp">
            Infrastructure that ships fast and <span className="pill">stays up.</span>
          </Title>
        </motion.div>

        <motion.div variants={fadeUp}>
          <Description>
            I build, automate and run <strong>secure, highly available infrastructure</strong> across private
            cloud, <strong>AWS</strong> and <strong>Microsoft Azure</strong>, turning manual, error-prone releases into
            fast, reliable pipelines. I currently own deployment, reliability and security for financial
            applications at <strong>i2c Inc.</strong>, a global fintech company.
          </Description>
        </motion.div>

        <motion.div variants={fadeUp}>
          <Buttons>
            <HashLink smooth to="#work" className="btn btn-primary">
              Explore my work <HiOutlineArrowRight />
            </HashLink>
            <a className="btn btn-outline" href={profile.resume} download={profile.resumeFileName}>
              Download résumé <HiOutlineArrowDown />
            </a>
          </Buttons>
        </motion.div>

        <motion.div variants={fadeUp}>
          <Meta className="mono">
            Kubernetes · Docker · CI/CD &nbsp;/&nbsp; {profile.location}
          </Meta>
        </motion.div>

        <motion.div variants={fadeUp}>
          <Socials>
            <SocialLinks />
          </Socials>
        </motion.div>
      </Text>

      <VisualCol>
        <motion.div variants={fadeUp}>
          <Wrapper>
            <Backing />
            <Terminal role="img" aria-label="A release pipeline passing every stage from build to production">
              <div className="chrome">
                <i />
                <i />
                <i />
                <span className="monoc">release.pipeline</span>
              </div>
              <div className="body monoc">
                <div className="cmd">
                  <span className="prompt">$</span> promote --to prod
                </div>
                {pipeline.map((row, i) => (
                  <motion.div
                    key={row.stage}
                    className="row"
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + i * 0.25, duration: 0.3 }}
                  >
                    <span className="ok">✓</span>
                    <span className="stage">{row.stage}</span>
                    <span className="detail">{row.detail}</span>
                  </motion.div>
                ))}
                <motion.div
                  className="done"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 + pipeline.length * 0.25 }}
                >
                  release healthy<span className="cursor">▋</span>
                </motion.div>
              </div>
            </Terminal>
            <NowCard>
              <span className="label mono">Now</span>
              <span className="role">{profile.current.title}</span>
              <span className="place">
                {profile.current.company} · {profile.current.place}
              </span>
            </NowCard>
          </Wrapper>
        </motion.div>
      </VisualCol>
    </Content>
  </Container>
);

const Container = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 40px;
  position: relative;
  overflow: hidden;

  @media (max-width: ${p => p.theme.breakpoints.tablet}) {
    padding: 0 16px;
  }
`;

const GuideLines = styled.div`
  position: absolute;
  inset: 0 auto 0 50%;
  width: 1120px;
  max-width: 100%;
  transform: translateX(-50%);
  display: flex;
  justify-content: space-between;
  pointer-events: none;

  span {
    width: 1px;
    background: ${p => p.theme.colors.guide};
  }

  @media (max-width: ${p => p.theme.breakpoints.desktop}) {
    display: none;
  }
`;

const Glow = styled.div`
  position: absolute;
  top: -100px;
  right: -120px;
  width: 640px;
  height: 640px;
  background: radial-gradient(circle, ${p => p.theme.colors.glow} 0%, transparent 65%);
  pointer-events: none;
`;

const Content = styled(motion.div)`
  display: grid;
  grid-template-columns: 1.6fr 1fr;
  gap: 24px;
  align-items: center;
  padding: 150px 0 88px;
  position: relative;
  z-index: 1;

  @media (max-width: ${p => p.theme.breakpoints.desktop}) {
    grid-template-columns: 1fr;
    padding: 112px 0 56px;
    gap: 48px;
  }
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const Eyebrow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 13px;

  .dot {
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background: ${p => p.theme.colors.primary};
    animation: heroPulse 1.6s ease-in-out infinite;
    flex-shrink: 0;
  }

  @keyframes heroPulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.25; }
  }
`;

const Title = styled.h1`
  font-size: 72px;
  line-height: 0.98;
  letter-spacing: -0.045em;
  color: ${p => p.theme.colors.text.primary};

  .pill {
    display: inline-block;
    margin-top: 6px;
    padding: 0 16px 6px;
    background: ${p => p.theme.colors.secondary};
    color: ${p => p.theme.colors.onBright};
    border-radius: 20px;
  }

  @media (max-width: ${p => p.theme.breakpoints.desktop}) {
    font-size: 56px;
  }

  @media (max-width: ${p => p.theme.breakpoints.mobile}) {
    font-size: 40px;
  }
`;

const Description = styled.p`
  max-width: 580px;
  font-size: 18px;
  line-height: 1.6;
  color: ${p => p.theme.colors.text.secondary};

  strong {
    color: ${p => p.theme.colors.text.primary};
    font-weight: 600;
  }

  @media (max-width: ${p => p.theme.breakpoints.mobile}) {
    font-size: 16px;
  }
`;

const Buttons = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;

  .btn {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    height: 50px;
    padding: 0 24px;
    font-size: 14.5px;
    font-weight: 600;
    border-radius: ${p => p.theme.borderRadius.pill};
    border: 1px solid transparent;
    transition: transform 0.18s ease, box-shadow 0.18s ease;
  }

  .btn:hover {
    transform: translateY(-2px);
    box-shadow: ${p => p.theme.shadows.sm};
  }

  .btn-primary {
    background: ${p => p.theme.colors.primary};
    color: ${p => p.theme.colors.onAccent};
  }

  .btn-outline {
    color: ${p => p.theme.colors.text.primary};
    border-color: ${p => p.theme.colors.border};
  }

  @media (max-width: ${p => p.theme.breakpoints.mobile}) {
    flex-direction: column;
    align-items: stretch;

    .btn {
      justify-content: center;
    }
  }
`;

const Meta = styled.div`
  font-size: 12px;
  color: ${p => p.theme.colors.text.muted};
`;

const Socials = styled.div`
  display: flex;
  gap: 0.9rem;

  a {
    width: 42px;
    height: 42px;
    border-radius: 50%;
    background: ${p => p.theme.colors.background.tertiary};
    border: 1px solid ${p => p.theme.colors.border};
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${p => p.theme.colors.text.secondary};
    font-size: 1.05rem;

    &:hover {
      border-color: ${p => p.theme.colors.primary};
      color: ${p => p.theme.colors.primary};
      transform: translateY(-3px);
    }
  }
`;

const VisualCol = styled.div`
  display: flex;
  justify-content: flex-end;

  @media (max-width: ${p => p.theme.breakpoints.desktop}) {
    justify-content: center;
  }
`;

const Wrapper = styled.div`
  position: relative;
  width: 340px;
  max-width: calc(100vw - 52px);
  margin: 0 18px 24px 0;
`;

const Backing = styled.div`
  position: absolute;
  inset: 18px -18px -18px 18px;
  background: ${p => p.theme.colors.secondary};
  border-radius: 28px;
`;

const Terminal = styled.div`
  position: relative;
  background: ${p => p.theme.colors.terminal};
  color: #d0e7e6;
  border: 1px solid ${p => p.theme.colors.border};
  border-radius: 28px;
  overflow: hidden;
  box-shadow: ${p => p.theme.shadows.md};

  .chrome {
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 14px 18px;
    border-bottom: 1px solid rgba(149, 204, 221, 0.16);

    i {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: rgba(149, 204, 221, 0.3);
    }

    span {
      margin-left: auto;
      font-size: 11px;
      color: #8199b8;
    }
  }

  .body {
    padding: 20px 18px 64px;
    display: flex;
    flex-direction: column;
    gap: 11px;
    font-size: 12.5px;
    min-height: 330px;
  }

  .cmd {
    color: #95ccdd;
    margin-bottom: 4px;
  }

  .prompt {
    color: #8199b8;
  }

  .row {
    display: grid;
    grid-template-columns: 16px 46px 1fr;
    gap: 8px;
    align-items: baseline;
  }

  .ok {
    color: #4ade80;
  }

  .stage {
    color: #d0e7e6;
    font-weight: 600;
    text-transform: uppercase;
  }

  .detail {
    color: #a9c3cb;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .done {
    margin-top: 6px;
    color: #4ade80;
  }

  .cursor {
    margin-left: 4px;
    animation: blink 1s steps(1) infinite;
  }

  @keyframes blink {
    50% { opacity: 0; }
  }
`;

const NowCard = styled.div`
  position: absolute;
  left: -38px;
  bottom: -24px;
  padding: 14px 18px;
  background: ${p => p.theme.colors.background.inverted};
  color: ${p => p.theme.colors.invertedText};
  border: 1px solid ${p => p.theme.colors.borderStrong};
  border-radius: 18px;
  box-shadow: ${p => p.theme.shadows.lg};
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 220px;

  .label {
    font-size: 11px;
    color: #95ccdd;
  }

  .role {
    font-size: 14.5px;
    font-weight: 600;
  }

  .place {
    font-size: 12.5px;
    opacity: 0.8;
  }

  @media (max-width: ${p => p.theme.breakpoints.desktop}) {
    left: 12px;
  }
`;
