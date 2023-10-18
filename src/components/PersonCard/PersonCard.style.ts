import styled, { css } from "styled-components";
import { Colors } from "../../commons/Theme";

export const StyledPersonCardInfo = styled.div`
  position: absolute;
  bottom: 0;
  padding: 12px;
  width: 100%;
  border: 1px solid white;
  transition: all 0.3s;
  z-index: 2;
`;

export const StyledPersonCardInfoDescription = styled.div`
  padding: 0px 12px 12px;
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
`;

export const StyledPersonCardImageWrapper = styled.div`
  position: relative;
`;

export const StyledPersonCardImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  object-fit: cover;
  object-position: top center;
  transition: all 0.2s;
`;

export const StyledPersonCardImageBW = styled(StyledPersonCardImage)``;
export const StyledPersonCardImageColor = styled(StyledPersonCardImage)`
  opacity: 0;
`;

export const StyledPersonCardIcon = styled.div`
  transition: all 0.2s;
  position: absolute;
  top: 8px;
  right: 8px;
  z-index: 2;
`;

export const StyledPersonCard = styled.div<{
  $cardColor: string;
  $open: boolean;
  $bottomHeight: number;
  $descriptionHeight: number;
}>`
  position: relative;
  height: 292px;
  overflow: hidden;
  cursor: pointer;

  &::before {
    content: "";
    box-sizing: border-box;
    display: block;
    position: absolute;
    top: ${({ $bottomHeight }) => `calc(100% - ${$bottomHeight}px)`};
    width: 100%;
    height: 100%;
    background: rgba(20, 20, 20, 0.5);
    z-index: 1;
    transition: transform 0.4s;
  }

  ${StyledPersonCardImage} {
    height: calc(100% - ${({ $bottomHeight }) => `${$bottomHeight}px`});
  }

  ${({ $open, $descriptionHeight, $cardColor, $bottomHeight }) =>
    $open &&
    css`
      ${StyledPersonCardIcon} {
        transform: rotate(-45deg);
      }

      ${StyledPersonCardInfo} {
        transform: translateY(${$descriptionHeight * -1}px);
        color: ${Colors.neutral900};
        border-color: transparent;
        padding-bottom: 8px;
      }

      ${StyledPersonCardImageColor} {
        opacity: 1;
      }

      &::before {
        transform: translate(0, calc(-100% + ${$bottomHeight}px));
        background: ${$cardColor};
      }
    `}

  @media (hover: hover) {
    &:hover {
      ${({ $cardColor }) =>
        css`
          &::before {
            background: ${$cardColor};
          }
          ${StyledPersonCardInfo} {
            color: ${Colors.neutral900};
            border-color: transparent;
          }
          ${StyledPersonCardImageColor} {
            opacity: 1;
          }
        `}
    }
  }
`;

/* MOBILE COMPONENTS */

export const StyledMobilePersonCard = styled.div<{
  $bottomHeight: number;
}>`
  width: 100%;
  height: 260px;
  position: relative;

  ${StyledPersonCardImage} {
    height: calc(260px - ${({ $bottomHeight }) => `${$bottomHeight}px`});
  }
`;

export const StyledMobilePersonCardInfo = styled.div<{
  $bottomHeight: number;
}>`
  position: absolute;
  top: calc(260px - ${({ $bottomHeight }) => `${$bottomHeight}px`});
  padding: 12px;
  width: 100%;
  border: 1px solid white;
  z-index: 2;
  transition: background-color 0.3s, border-color 0.3s ease 0.2s;
`;

export const StyledMobilePersonCardInfoDescription = styled.div`
  padding: 0px 12px 12px;
  width: 100%;
  transition: background-color 0.3s;
`;

export const StyledMobilePersonCardWrapper = styled.div<{
  $cardColor: string;
  $open: boolean;
  $bottomHeight: number;
  $descriptionHeight: number;
}>`
  max-height: 260px;
  width: 100%;
  transition: max-height 0.3s;
  overflow: hidden;
  position: relative;

  ${({ $open, $descriptionHeight, $cardColor }) =>
    $open &&
    css`
      max-height: calc(260px + ${$descriptionHeight}px);

      ${StyledMobilePersonCardInfo} {
        border-color: transparent;
        background: ${$cardColor};
        transition: background-color 0.3s, border-color 0s ease 0s;
        color: ${Colors.neutral900};
      }
      ${StyledMobilePersonCardInfoDescription} {
        background: ${$cardColor};
        color: ${Colors.neutral900};
      }
      ${StyledPersonCardImageColor} {
        opacity: 1;
      }
      ${StyledPersonCardIcon} {
        transform: rotate(-45deg);
      }
    `};
`;
