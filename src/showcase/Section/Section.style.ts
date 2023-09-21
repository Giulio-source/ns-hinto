import styled from "styled-components";
import { DesktopBR } from "../../commons/Theme";

export const StyledSection = styled.div<{ background?: string }>`
  margin: 40px auto 80px;
  padding-left: 16px;
  padding-right: 16px;
  display: flex;
  width: 100%;
  justify-content: center;
  background: ${({ background }) => background};

  @media screen and (min-width: ${DesktopBR}) {
    padding-left: 32px;
    padding-right: 32px;

    padding-top: 40px;
    padding-bottom: 40px;
  }
`;

export const StyledSectionTitle = styled.h1`
  margin-bottom: 24px;
  color: ${({ color }) => color};
`;

export const StyledSectionContent = styled.div`
  grid-column: 1 / -1;
`;
