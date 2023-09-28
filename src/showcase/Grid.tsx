import styled from "styled-components";
import { Colors, Grid } from "../commons/Theme";
import { Section } from "../commons/Section";

const GridColumn = styled.div`
  background: ${Colors.magenta50};
  height: 400px;
`;

export const ShowcaseGrid = () => {
  return (
    <Section>
      <h1>Showcase: Grid</h1>
      <Grid>
        {Array.from({ length: 12 }).map(() => (
          <GridColumn />
        ))}
      </Grid>
    </Section>
  );
};
