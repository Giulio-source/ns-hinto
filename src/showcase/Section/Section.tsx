import { Grid } from "../../commons/Theme";
import {
  StyledSection,
  StyledSectionContent,
  StyledSectionTitle,
} from "./Section.style";

export const Section = ({
  title,
  background,
  children,
}: {
  title: string;
  background?: string;
  children: React.ReactNode;
}) => {
  return (
    <StyledSection background={background}>
      <Grid>
        <StyledSectionContent>
          <StyledSectionTitle>Showcase: {title}</StyledSectionTitle>
          {children}
        </StyledSectionContent>
      </Grid>
    </StyledSection>
  );
};
