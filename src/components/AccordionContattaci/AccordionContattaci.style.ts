import styled, { css } from "styled-components";
import { Colors, DesktopBR, Grid } from "../../commons/Theme";

export const StyledAccordionContattaci = styled.div<{
  $open: boolean;
  $maxHeight: number;
}>`
  width: 100vw;
  transform: translate(-16px);
  position: relative;
  overflow: hidden;
  transition: all 1s;
  max-height: ${({ $maxHeight }) => `${$maxHeight + 28}px`};

  @media screen and (min-width: ${DesktopBR}) {
    width: 100%;

    &::before {
      width: calc(100% - 28px);
    }
  }

  &::before {
    content: "";
    box-sizing: border-box;
    position: absolute;
    top: 28px;
    left: 0;
    width: calc(100% - 16px);
    height: 100%;
    border: 1px solid ${Colors.blue400};
    background: rgba(255, 255, 255, 0.6);
    backdrop-filter: blur(4px);
    z-index: -1;
    transition: all 1s;
    max-height: ${({ $maxHeight }) => `${$maxHeight}px`};

    ${({ $open }) =>
      $open &&
      css`
        width: 100%;
      `};
  }
`;

export const StyledAccordionHeaderGrid = styled(Grid)<{ $open: boolean }>`
  position: relative;
  width: auto;
  margin: 0 16px;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: -16px;
    width: calc(100% + 16px);
    height: 100%;
    background: ${Colors.blue300};
    z-index: -1;
    transition: all 0.3s;

    ${({ $open }) =>
      $open &&
      css`
        width: calc(100% + 32px);
      `};

    @media screen and (min-width: ${DesktopBR}) {
      padding: 0;

      ${({ $open }) =>
        $open &&
        css`
          width: 100%;
        `};
    }
  }

  @media screen and (min-width: ${DesktopBR}) {
    width: auto;
    margin: unset;
    &::before {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      width: calc(100% - 28px);
      height: 100%;
      background: ${Colors.blue300};
      z-index: -1;
      transition: all 0.3s;

      ${({ $open }) =>
        $open &&
        css`
          width: 100%;
        `};
    }
  }
`;

export const StyledAccordionContattaciHeader = styled.div`
  grid-column: 1 / span 4;

  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 16px 0px 24px 24px;

  color: white;

  :nth-child(2) {
    min-height: 56px;
  }

  @media screen and (min-width: ${DesktopBR}) {
    grid-column: 2 / span 10;
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    column-gap: 32px;
    background-color: transparent;
    padding-top: 64px;
    padding-bottom: 64px;

    :nth-child(1) {
      grid-column: 1 / span 8;
    }

    :nth-child(2) {
      grid-column: 9 / span 2;
      justify-self: center;
      align-self: center;
    }
  }
`;

export const StyledAccordionContattaciBody = styled.div`
  grid-column: 1 / span 4;
  margin: 64px 16px;

  @media screen and (min-width: ${DesktopBR}) {
    grid-column: 2 / span 10;
    margin: 64px 0;
  }
`;
