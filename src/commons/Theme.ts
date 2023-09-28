import styled, { createGlobalStyle, css } from "styled-components";
import Gilroy300 from "../assets/fonts/gilroy-300.woff2";
import Gilroy600 from "../assets/fonts/gilroy-600.woff2";
import WorkSans400 from "../assets/fonts/work-sans-400.woff2";
import WorkSans500 from "../assets/fonts/work-sans-500.woff2";
import WorkSans600 from "../assets/fonts/work-sans-600.woff2";
import WorkSans700 from "../assets/fonts/work-sans-700.woff2";

export const DesktopBR = "768px";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    font-family: "Work Sans", monospace;
  }

  strong,
  b {
    font-weight: 600;
  }

  figure {
    blockquote {
      font-size: 20px;
      line-height: 24px;
      font-weight: 300;
      font-family: "Gilroy", sans-serif;
    }
    figcaption {
      font-size: 16px;
      line-height: 24px;
      font-weight: 600;
    }
  }

  @media screen and (min-width: ${DesktopBR}) {   
      figure {
        blockquote {
          font-size: 28px;
          line-height: 36px;
        }
        figcaption {
          font-size: 18px;
          line-height: 30px;
          font-weight: 600;
        }
      }
    }

   /* Gilroy */
   @font-face {
    font-display: swap;
    font-family: "Gilroy";
    font-style: normal;
    font-weight: 300;
    src: url(${Gilroy300}) format("woff2");
  }
  @font-face {
    font-display: swap;
    font-family: "Gilroy";
    font-style: normal;
    font-weight: 600;
    src: url(${Gilroy600}) format("woff2");
  }

  /* Work Sans */
  @font-face {
    font-display: swap;
    font-family: "Work Sans";
    font-style: normal;
    font-weight: 400;
    src: url(${WorkSans400}) format("woff2");
  }
  @font-face {
    font-display: swap;
    font-family: "Work Sans";
    font-style: normal;
    font-weight: 500;
    src: url(${WorkSans500}) format("woff2");
  }
  @font-face {
    font-display: swap;
    font-family: "Work Sans";
    font-style: normal;
    font-weight: 600;
    src: url(${WorkSans600}) format("woff2");
  }
  @font-face {
    font-display: swap;
    font-family: "Work Sans";
    font-style: normal;
    font-weight: 700;
    src: url(${WorkSans700}) format("woff2");
  }
`;

export const Colors = {
  neutral0: "#FFFFFF",
  neutral50: "#F5F5F5",
  neutral100: "#E0E0E0",
  neutral200: "#B8B8B8",
  neutral300: "#A3A3A3",
  neutral400: "#8F8F8F",
  neutral500: "#7A7A7A",
  neutral600: "#525252",
  neutral700: "#3D3D3D",
  neutral800: "#292929",
  neutral900: "#141414",
  magenta50: "#FCEDF0",
  magenta100: "#F7C9D3",
  magenta200: "#ED8299",
  magenta300: "#E85E7C",
  magenta400: "#E12D54",
  aquamarine50: "#EFFBF6",
  aquamarine100: "#CEF3E5",
  aquamarine300: "#78DDB7",
  aquamarine400: "#47D19C",
  blue50: "#EDEBFF",
  blue100: "#CAC2FF",
  blue200: "#8370FF",
  blue300: "#6047FF",
  blue400: "#2B0AFF",
  blue600: "#1600A3 ",
};

export const Grid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 16px;
  row-gap: 32px;
  max-width: 1240px;
  margin: auto;

  @media screen and (min-width: ${DesktopBR}) {
    grid-template-columns: repeat(12, 1fr);
    column-gap: 32px;
  }
`;

export const Flex = styled.div<{
  direction?: "row" | "column";
  gap?: number;
  wrap?: "wrap" | "nowrap";
  alignItems?: "start" | "center" | "end";
}>`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  gap: ${({ gap = 24 }) => `${gap}px`};
  flex-wrap: ${({ wrap = "wrap" }) => wrap};
  align-items: ${({ alignItems = "start" }) => alignItems};
`;

export const Heading = styled.div<{
  size: "l" | "m" | "s" | "xs";
  weight?: 300 | 600;
}>`
  font-family: "Gilroy", sans-serif;
  font-weight: ${({ weight = 600 }) => weight};

  ${({ size }) => {
    if (size === "l") {
      return css`
        font-size: 46px;
        line-height: 52px;
      `;
    }
    if (size === "m") {
      return css`
        font-size: 34px;
        line-height: 40px;
      `;
    }
    if (size === "s" || size === "xs") {
      return css`
        font-size: 28px;
        line-height: 34px;
      `;
    }
  }};

  @media screen and (min-width: ${DesktopBR}) {
    ${({ size }) => {
      if (size === "l") {
        return css`
          font-size: 92px;
          line-height: 110px;
        `;
      }
      if (size === "m") {
        return css`
          font-size: 64px;
          line-height: 74px;
        `;
      }
      if (size === "s") {
        return css`
          font-size: 44px;
          line-height: 52px;
        `;
      }
      if (size === "xs") {
        return css`
          font-size: 34px;
          line-height: 40px;
        `;
      }
    }};
  }
`;

export const Body = styled.div<{
  size: "l" | "m" | "s" | "xs";
  weight?: 400 | 500 | 600 | 700;
  underline?: boolean;
  narrow?: boolean;
}>`
  font-family: "Work Sans", sans-serif;
  font-weight: ${({ weight = 400 }) => weight};
  text-decoration: ${({ underline }) => (underline ? "underline" : "none")};

  ${({ size }) => {
    if (size === "l") {
      return css`
        font-size: 20px;
        line-height: 30px;
      `;
    }
    if (size === "m") {
      return css`
        font-size: 16px;
        line-height: 24px;
      `;
    }
    if (size === "s" || size === "xs") {
      return css`
        font-size: 12px;
        line-height: 20px;
      `;
    }
  }};

  @media screen and (min-width: ${DesktopBR}) {
    ${({ size, narrow }) => {
      if (size === "l") {
        return css`
          font-size: 22px;
          line-height: 34px;
        `;
      }
      if (size === "m") {
        return css`
          font-size: 18px;
          line-height: 30px;
        `;
      }
      if (size === "s") {
        return css`
          font-size: 16px;
          line-height: ${narrow ? "24px" : "28px"};
        `;
      }
      if (size === "xs") {
        return css`
          font-size: 12px;
          line-height: 20px;
        `;
      }
    }};
  }
`;

export const Label = styled.div<{
  font?: "Work Sans" | "Gilroy";
  size: "xl" | "l" | "m" | "s" | "xs";
  weight?: 300 | 400 | 500 | 600 | 700;
  uppercase?: boolean;
  underline?: boolean;
}>`
  font-family: ${({ font = "Gilroy" }) => font}, sans-serif;
  font-weight: ${({ weight = 500 }) => weight};
  text-transform: ${({ uppercase }) => (uppercase ? "uppercase" : "none")};
  text-decoration: ${({ underline }) => (underline ? "underline" : "none")};

  strong,
  b {
    font-weight: 600;
  }

  ${({ size }) => {
    if (size === "xl" || size === "l") {
      return css`
        font-size: 20px;
        line-height: 24px;
      `;
    }
    if (size === "m") {
      return css`
        font-size: 16px;
        line-height: 20px;
      `;
    }
    if (size === "s" || size === "xs") {
      return css`
        font-size: 12px;
        line-height: 16px;
      `;
    }
  }};

  @media screen and (min-width: ${DesktopBR}) {
    ${({ size }) => {
      if (size === "xl") {
        return css`
          font-size: 28px;
          line-height: 36px;
        `;
      }
      if (size === "l") {
        return css`
          font-size: 24px;
          line-height: 28px;
        `;
      }
      if (size === "m") {
        return css`
          font-size: 18px;
          line-height: 24px;
        `;
      }
      if (size === "s") {
        return css`
          font-size: 16px;
          line-height: 20px;
        `;
      }
      if (size === "xs") {
        return css`
          font-size: 12px;
          line-height: 16px;
        `;
      }
    }};
  }
`;
