import { motion } from 'framer-motion';
import styled from 'styled-components';
import { aboutFacts } from '../../data/profile';
import { fadeUp, stagger } from '../shared/motion';
import { Section } from '../shared/Section';
import { SectionKicker } from '../shared/SectionHeader';

export const About = () => (
  <Section id="about">
    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={stagger(0.15)}>
      <motion.div variants={fadeUp}>
        <SectionKicker index={6} label="About" />
      </motion.div>

      <Layout>
        <Headline variants={fadeUp}>
          <h2 className="disp">
            Ownership, automation and <span className="pill">continuous improvement.</span>
          </h2>
        </Headline>

        <TextCol variants={fadeUp}>
          <p>
            I&apos;m a <strong>DevOps &amp; Site Reliability Engineer</strong> with <strong>4+ years</strong> of
            experience building, automating and running secure, highly available infrastructure across private cloud,
            AWS and Microsoft Azure.
          </p>
          <p>
            At <strong>i2c Inc.</strong>, a global fintech and payments technology company, I own the deployment,
            reliability and security of mission-critical financial applications on a private cloud, from source
            control through production.
          </p>
          <p>
            Before that, at <strong>DHives</strong>, I built and ran containerized platforms on Amazon EKS and Azure
            AKS, from network design to CI/CD, secrets management and monitoring.
          </p>
          <p>
            I build systems that are <strong>secure by default</strong>, highly available by design, and easy to
            monitor and recover. Let&apos;s connect if you&apos;re working on DevOps, SRE or cloud challenges.
          </p>

          <Facts>
            {aboutFacts.map(f => (
              <div key={f.k}>
                <span className="k mono">{f.k}</span>
                <span className="v">{f.v}</span>
              </div>
            ))}
          </Facts>
        </TextCol>
      </Layout>
    </motion.div>
  </Section>
);

const Layout = styled.div`
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  gap: 24px;
  align-items: start;
  padding-top: 40px;

  @media (max-width: ${p => p.theme.breakpoints.desktop}) {
    grid-template-columns: minmax(0, 1fr);
  }
`;

const Headline = styled(motion.div)`
  grid-column: span 6;

  h2 {
    font-size: 56px;
    line-height: 1;
    letter-spacing: -0.045em;
    color: ${p => p.theme.colors.text.primary};
  }

  .pill {
    display: inline-block;
    margin-top: 6px;
    padding: 0 14px 6px;
    background: ${p => p.theme.colors.secondary};
    color: ${p => p.theme.colors.onBright};
    border-radius: 20px;
  }

  @media (max-width: ${p => p.theme.breakpoints.desktop}) {
    grid-column: span 1;
  }

  @media (max-width: ${p => p.theme.breakpoints.tablet}) {
    h2 {
      font-size: 38px;
    }
  }
`;

const TextCol = styled(motion.div)`
  grid-column: 8 / span 5;
  display: flex;
  flex-direction: column;
  gap: 22px;

  p {
    font-size: 17px;
    line-height: 1.65;
    color: ${p => p.theme.colors.text.secondary};

    strong {
      color: ${p => p.theme.colors.text.primary};
      font-weight: 600;
    }
  }

  @media (max-width: ${p => p.theme.breakpoints.desktop}) {
    grid-column: span 1;
  }
`;

const Facts = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 24px 32px;
  padding-top: 12px;

  > div {
    display: flex;
    flex-direction: column;
    gap: 6px;
    padding-top: 12px;
    border-top: 1px solid ${p => p.theme.colors.borderStrong};
  }

  .k {
    font-size: 11.5px;
    color: ${p => p.theme.colors.text.muted};
  }

  .v {
    font-size: 15.5px;
    font-weight: 600;
    color: ${p => p.theme.colors.text.primary};
  }

  @media (max-width: ${p => p.theme.breakpoints.mobile}) {
    grid-template-columns: minmax(0, 1fr);
  }
`;
