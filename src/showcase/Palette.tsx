import { Section } from "../commons/Section";
import { Colors } from "../commons/Theme";

export const ShowcasePalette = () => {
  return (
    <Section>
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
          <div
            key={key}
            style={{
              width: "128px",
              height: "128px",
              background: value,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: Number(key.replace(/\D/g, "")) >= 400 ? "white" : "black",
            }}
          >
            {key}
          </div>
        ))}
      </div>
    </Section>
  );
};
