import styled from "styled-components";
import { DesktopBR } from "../../commons/Theme";

export const StyledIcon = styled.div<StyledIconProps>`
  width: ${({ width }) => width};
  fill: ${({ fill }) => fill};
  stroke: ${({ stroke }) => stroke};
  cursor: ${({ onClick }) => (onClick ? "pointer" : "inherit")};
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    stroke: ${({ hoverStroke }) => hoverStroke};
    fill: ${({ $hoverFill }) => $hoverFill};
  }
  svg {
    width: 100%;
    height: 100%;
  }

  @media screen and (min-width: ${DesktopBR}) {
    width: ${({ width, $desktopWidth }) => $desktopWidth ?? width};
  }
`;

export const Icon = ({
  width = "24px",
  $desktopWidth,
  stroke,
  fill,
  hoverStroke,
  $hoverFill = fill,
  Icon,
  onClick,
}: IconProps) => {
  return (
    <StyledIcon
      width={width}
      $desktopWidth={$desktopWidth}
      stroke={stroke}
      fill={fill}
      hoverStroke={hoverStroke}
      $hoverFill={$hoverFill}
      onClick={onClick}
    >
      <Icon />
    </StyledIcon>
  );
};

type StyledIconProps = {
  width?: string;
  $desktopWidth?: string;
  stroke?: string;
  fill?: string;
  hoverStroke?: string;
  $hoverFill?: string;
  onClick?: (() => void) | undefined | null;
};

type IconProps = StyledIconProps & {
  Icon: React.FC;
};
