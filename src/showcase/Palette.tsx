import { Colors } from "../commons/Theme";
import { Section } from "./Section/Section";

export const Palette = () => {
  return (
    <Section title="Palette">
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
              width: "120px",
              height: "120px",
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
