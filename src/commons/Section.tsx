import styled, { css } from "styled-components";
import { Colors, DesktopBR } from "./Theme";

export const StyledSection = styled.div<Pick<SectionProps, "theme">>`
  position: relative;
  box-sizing: content-box;

  ${({ theme }) =>
    theme === "light"
      ? css`
          background: transparent;

          &::before {
            content: "";
            position: absolute;
            inset: 0;
            background: white;
            z-index: -3;
          }
        `
      : css`
          background: transparent;
          color: white;

          &::before {
            content: "";
            position: absolute;
            inset: 0;
            background: ${Colors.neutral900};
            z-index: -5;
          }

          &::after {
            content: "";
            position: absolute;
            inset: 0;
            background: transparent;
            z-index: -1;
            backdrop-filter: blur(70px);
            -webkit-backdrop-filter: blur(70px);
          }
        `};
`;

export const StyledSectionContent = styled.div<
  Pick<SectionProps, "$defaultPadding">
>`
  width: 100%;
  margin: 0 auto;
  padding: ${({ $defaultPadding = false }) =>
    $defaultPadding ? "32px 16px" : "0px 16px"};

  max-width: 1304px; // 1240px (content) + 64px (horizontal padding)

  @media screen and (min-width: ${DesktopBR}) {
    padding: ${({ $defaultPadding = false }) =>
      $defaultPadding ? "80px 32px" : "0px 32px"};
  }
`;

export const Section = ({
  theme = "light",
  children,
  $defaultPadding = false,
}: SectionProps) => {
  return (
    <StyledSection theme={theme}>
      <StyledSectionContent $defaultPadding={$defaultPadding}>
        {children}
      </StyledSectionContent>
    </StyledSection>
  );
};

type SectionProps = {
  theme?: "light" | "dark";
  children: React.ReactNode;
  $defaultPadding?: boolean;
};
