import styled from "styled-components";
import { DesktopBR } from "../../commons/Theme";

export const StyledHero = styled.div`
  padding-top: 68px; // Space for header
  padding-bottom: 64px;

  @media screen and (min-width: ${DesktopBR}) {
    padding-top: 100px; // Space for header
    padding-bottom: 32px;
  }
`;

export const StyledHeroLeft = styled.div`
  grid-column: 1 / -1;
  margin-top: 32px;

  display: flex;
  flex-direction: column;
  gap: 32px;

  @media screen and (min-width: ${DesktopBR}) {
    grid-column: 1 / span 5;

    margin-top: 64px;
    gap: 24px;
  }
`;

export const StyledHeroRight = styled.div`
  grid-column: 1 / -1;
  position: relative;
  height: 227px;

  img {
    padding: 24px;
    width: 100%;
    height: 100%;
    object-fit: contain;
    position: absolute;
  }

  @media screen and (min-width: ${DesktopBR}) {
    grid-column: 7 / span 6;
    height: 400px;

    img {
      padding: 40px;
    }
  }
`;

export const StyledImageDodge = styled.img`
  mix-blend-mode: color-dodge;
  transform: translate3d(0, 0, 0);
`;
