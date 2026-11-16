import type { ReactNode } from 'react';
import styled from 'styled-components';

const Kicker = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 16px;
  border-top: 1px solid ${p => p.theme.colors.borderStrong};
  font-size: 13px;

  .idx {
    color: ${p => p.theme.colors.primary};
  }

  .count {
    color: ${p => p.theme.colors.text.muted};
  }
`;

const TitleRow = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 48px;
  padding: 36px 0 52px;
  flex-wrap: wrap;

  h2 {
    max-width: 760px;
    font-size: 64px;
    line-height: 0.98;
    letter-spacing: -0.045em;
    color: ${p => p.theme.colors.text.primary};
    text-wrap: balance;
  }

  p {
    max-width: 340px;
    font-size: 16px;
    color: ${p => p.theme.colors.text.secondary};
  }

  @media (max-width: ${p => p.theme.breakpoints.tablet}) {
    gap: 20px;
    padding: 28px 0 36px;

    h2 {
      font-size: 40px;
    }
  }
`;

export const TOTAL_SECTIONS = 6;

interface Props {
  index: number;
  label: string;
  title: ReactNode;
  description?: string;
}

const pad = (n: number) => String(n).padStart(2, '0');

export const SectionKicker = ({ index, label }: { index: number; label: string }) => (
  <Kicker className="mono">
    <span>
      <span className="idx">[{pad(index)}]</span>&nbsp; {label}
    </span>
    <span className="count">
      {pad(index)} / {pad(TOTAL_SECTIONS)}
    </span>
  </Kicker>
);

export const SectionHeader = ({ index, label, title, description }: Props) => (
  <>
    <SectionKicker index={index} label={label} />
    <TitleRow>
      <h2 className="disp">{title}</h2>
      {description && <p>{description}</p>}
    </TitleRow>
  </>
);
