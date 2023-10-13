import styled from "styled-components";
import { Colors, DesktopBR, StyledScrollbar } from "../../commons/Theme";

export const StyledFormContattaci = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const StyledTwoCols = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;

  @media screen and (min-width: ${DesktopBR}) {
    grid-template-columns: 1fr 1fr;
    gap: 16px;
  }
`;

export const StyledPrivacy = styled.div`
  max-height: 150px;
  padding-right: 10px;
  overflow: auto;

  color: ${Colors.neutral500};

  strong {
    font-weight: 500;
  }

  ${StyledScrollbar}

  @media screen and (min-width: ${DesktopBR}) {
    max-height: 100px;
  }
`;
