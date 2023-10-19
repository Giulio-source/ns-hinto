import styled, { css } from "styled-components";
import { Colors, DesktopBR, Heading } from "./Theme";

export const StyledSection = styled.div<Pick<SectionProps, "theme">>`
  position: relative;
  box-sizing: content-box;

  ${({ theme }) =>
    theme === "light"
      ? css`
          background: transparent;

          a {
            color: ${Colors.blue400};
            &:hover {
              color: ${Colors.blue600};
            }
          }

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

          a {
            color: ${Colors.neutral0};
            &:hover {
              color: ${Colors.blue100};
            }
          }

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

export const StyledSectionContent = styled.div<{
  $defaultPadding: boolean;
  $spaceTopMobile?: string;
  $spaceTopDesktop?: string;
}>`
  width: 100%;
  margin: 0 auto;
  padding: ${({ $defaultPadding }) =>
    $defaultPadding ? "32px 16px" : "0px 16px"};

  padding-top: ${({ $spaceTopMobile }) => $spaceTopMobile};

  max-width: 1304px; // 1240px (content) + 64px (horizontal padding)

  @media screen and (min-width: ${DesktopBR}) {
    padding: ${({ $defaultPadding }) =>
      $defaultPadding ? "80px 32px" : "0px 32px"};
    padding-top: ${({ $spaceTopDesktop }) => $spaceTopDesktop};
  }
`;

const StyledTitle = styled.div`
  margin-bottom: 36px;

  @media screen and (min-width: ${DesktopBR}) {
    margin-bottom: 80px;
  }
`;

export const Section = ({
  theme = "light",
  children,
  title,
  $defaultPadding = false,
  spaceTopMobile,
  spaceTopDesktop,
}: SectionProps) => {
  return (
    <StyledSection theme={theme}>
      <StyledSectionContent
        $defaultPadding={$defaultPadding}
        $spaceTopMobile={spaceTopMobile}
        $spaceTopDesktop={spaceTopDesktop}
      >
        {title && (
          <StyledTitle>
            <Heading size="m">{title}</Heading>
          </StyledTitle>
        )}
        {children}
      </StyledSectionContent>
    </StyledSection>
  );
};

type SectionProps = {
  theme?: Theme;
  children: React.ReactNode;
  $defaultPadding?: boolean;
  title?: string;
  spaceTopMobile?: string;
  spaceTopDesktop?: string;
};

export type Theme = "light" | "dark";
