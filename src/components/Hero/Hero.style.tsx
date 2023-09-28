import styled from "styled-components";

export const StyledHero = styled.div`
  padding-top: 100px; // Space for header
  padding-bottom: 32px;
`;

export const StyledHeroLeft = styled.div`
  grid-column: 1 / span 5;
  margin-top: 64px;

  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const StyledHeroRight = styled.div`
  grid-column: 7 / span 6;
  position: relative;
  height: 400px;

  img {
    padding: 24px;
    width: 100%;
    height: 100%;
    object-fit: contain;
    position: absolute;
  }
`;

export const StyledImageDodge = styled.img`
  mix-blend-mode: color-dodge;
  transform: translate3d(0, 0, 0);
`;
