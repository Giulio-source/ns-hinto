import styled from "styled-components";

const StyledIcon = styled.div<StyledIconProps>`
  width: ${({ width }) => width};
  fill: ${({ fill }) => fill};
  stroke: ${({ stroke }) => stroke};
  cursor: ${({ onClick }) => (onClick ? "pointer" : "inherit")};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
  &:hover {
    stroke: ${({ hoverStroke }) => hoverStroke};
    fill: ${({ hoverFill }) => hoverFill};
  }
  svg {
    width: 100%;
    height: 100%;
  }
`;

export const Icon = ({
  width = "24px",
  stroke,
  fill,
  hoverStroke,
  hoverFill = fill,
  Icon,
  onClick,
}: IconProps) => {
  return (
    <StyledIcon
      width={width}
      stroke={stroke}
      fill={fill}
      hoverStroke={hoverStroke}
      hoverFill={hoverFill}
      onClick={onClick}
    >
      <Icon />
    </StyledIcon>
  );
};

type StyledIconProps = {
  width?: string;
  stroke?: string;
  fill?: string;
  hoverStroke?: string;
  hoverFill?: string;
  onClick?: (() => void) | undefined | null;
};

type IconProps = StyledIconProps & {
  Icon: React.FunctionComponent;
};
