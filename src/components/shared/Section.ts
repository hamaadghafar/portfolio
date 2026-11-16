import styled from 'styled-components';

export const Section = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 128px 40px 0;

  @media (max-width: ${p => p.theme.breakpoints.tablet}) {
    padding: 80px 16px 0;
  }
`;

export const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  span {
    font-family: ${p => p.theme.fonts.mono};
    font-size: 11.5px;
    padding: 3px 12px;
    border-radius: ${p => p.theme.borderRadius.pill};
    border: 1px solid ${p => p.theme.colors.border};
    color: ${p => p.theme.colors.text.secondary};
  }
`;
