import styled from "styled-components";
import { Section } from "../commons/Section";
import { Grid } from "../commons/Theme";

const GridColumn = styled.div`
  background: hsla(348, 71%, 96%, 0.6);
  backdrop-filter: blur(16px);
  height: 400px;
`;

export const ShowcaseGrid = () => {
  return (
    <Section $defaultPadding title="Grid">
      <Grid>
        {Array.from({ length: 12 }).map((_, i) => (
          <GridColumn key={i} />
        ))}
      </Grid>
    </Section>
  );
};
