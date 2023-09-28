import styled from "styled-components";
import { DesktopBR } from "../../commons/Theme";

export const StyledHero = styled.div`
  padding-top: 68px; // Space for header
  padding-bottom: 64px;

  @media screen and (min-width: ${DesktopBR}) {
    padding-top: 92px; // Space for header
  }
`;

export const StyledHeroLeft = styled.div<{ $isDetailContent: boolean }>`
  grid-column: 1 / -1;
  margin-top: 32px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 32px;

  @media screen and (min-width: ${DesktopBR}) {
    grid-column: ${({ $isDetailContent }) =>
      $isDetailContent ? "1 / span 6" : "1 / span 5"};
    margin-top: 64px;
    gap: 24px;
  }
`;

export const StyledHeroRightImage = styled.div<{ $isDetailContent: boolean }>`
  position: relative;
  grid-column: 1 / -1;
  height: 227px;
  margin-top: ${({ $isDetailContent }) => ($isDetailContent ? "32px" : "0")};

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    position: absolute;
  }

  @media screen and (min-width: ${DesktopBR}) {
    grid-column: ${({ $isDetailContent }) =>
      $isDetailContent ? "8 / span 5" : "7 / span 6"};
    height: 400px;
    margin-top: ${({ $isDetailContent }) => ($isDetailContent ? "64px" : "0")};
  }
`;

export const StyledImageDodge = styled.img`
  mix-blend-mode: color-dodge;
  transform: translate3d(0, 0, 0);
`;

export const StyledHeroRightContent = styled.div`
  grid-column: 1 / -1;

  @media screen and (min-width: ${DesktopBR}) {
    grid-column: 8 / span 5;
    padding-top: 64px;
  }
`;

export const StyledVerticalDivider = styled.div`
  width: 1px;
  height: 100%;
  background: rgba(255, 255, 255, 0.6);
  display: none;

  @media screen and (min-width: ${DesktopBR}) {
    display: initial;
    grid-column: 7 / span 1;
  }
`;

export const StyledArticoliButton = styled.div`
  display: none;

  @media screen and (min-width: ${DesktopBR}) {
    flex: 1;
    display: flex;
    align-items: flex-end;
    margin-bottom: 40px;
  }
`;
