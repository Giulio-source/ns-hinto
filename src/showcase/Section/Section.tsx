import { Colors, Grid } from "../../commons/Theme";
import {
  StyledSection,
  StyledSectionContent,
  StyledSectionTitle,
} from "./Section.style";

export const Section = ({
  title,
  background,
  color = Colors.neutral900,
  children,
}: {
  title: string;
  background?: string;
  color?: string;
  children: React.ReactNode;
}) => {
  return (
    <StyledSection background={background}>
      <Grid>
        <StyledSectionContent>
          <StyledSectionTitle color={color}>
            Showcase: {title}
          </StyledSectionTitle>
          {children}
        </StyledSectionContent>
      </Grid>
    </StyledSection>
  );
};
