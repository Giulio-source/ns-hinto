import styled from "styled-components";
import { DesktopBR } from "../Theme";

const StyledSpacer = styled.div<{
  $mobile: number;
  $desktop: number;
}>`
  height: ${({ $mobile }) => $mobile + "px"};

  @media screen and (min-width: ${DesktopBR}) {
    height: ${({ $desktop }) => $desktop + "px"};
  }
`;

export const Spacer = ({ mobile, desktop = mobile }: SpacerProps) => {
  return <StyledSpacer $mobile={mobile} $desktop={desktop} />;
};

type SpacerProps = {
  mobile: number;
  desktop?: number;
};
