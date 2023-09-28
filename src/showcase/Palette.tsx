import styled from "styled-components";
import { Section } from "../commons/Section";
import { Colors, DesktopBR } from "../commons/Theme";

const StyledPalette = styled.div`
  width: calc(100% / 3);
  height: 128px;
  font-size: 10px;

  @media screen and (min-width: ${DesktopBR}) {
    width: 128px;
    height: 128px;
  }
`;

export const ShowcasePalette = () => {
  return (
    <Section $defaultPadding>
      <h1>Showcase: Palette</h1>
      <br />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          margin: "auto",
        }}
      >
        {Object.entries(Colors).map(([key, value]) => (
          <StyledPalette
            key={key}
            style={{
              background: value,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: Number(key.replace(/\D/g, "")) >= 400 ? "white" : "black",
            }}
          >
            {key}
          </StyledPalette>
        ))}
      </div>
    </Section>
  );
};
