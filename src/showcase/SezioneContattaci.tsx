import styled from "styled-components";
import { Section } from "../commons/Section";
import {
  Body,
  Colors,
  DesktopBR,
  Grid,
  Heading,
  WhiteBlur_CSS,
} from "../commons/Theme";
import { FormContattaci } from "../components/FormContattaci/FormContattaci";

const StyledColumnLeft = styled.div`
  grid-column: 1 / span 4;

  height: fit-content;

  display: flex;
  flex-direction: column;
  gap: 24px;

  ${WhiteBlur_CSS}
`;

const StyledColumnRight = styled.div`
  margin-top: 24px;
  grid-column: 1 / span 4;

  padding: 36px 24px;
  border: 1px solid ${Colors.blue400};
  border-radius: 24px;

  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(4px);

  @media screen and (min-width: ${DesktopBR}) {
    margin-top: 0px;
    grid-column: 6 / span 7;
    padding: 64px;
  }
`;

const StyledTitle = styled.div`
  margin-bottom: 36px;

  @media screen and (min-width: ${DesktopBR}) {
    margin-bottom: 80px;
  }
`;

const StyledSezioneContattaci = styled.div`
  padding: 120px 0 80px;
`;

export const SezioneContattaci = () => {
  return (
    <Section>
      <StyledSezioneContattaci>
        <StyledTitle>
          <Heading size="m">Siamo qui per te</Heading>
        </StyledTitle>
        <Grid>
          <StyledColumnLeft>
            <Body size="m">
              Desideri esplorare <strong>nuovi orizzonti</strong> nel mercato
              digitale? Hai un'idea che desideri trasformare in una{" "}
              <strong>soluzione vincente?</strong> Necessiti di{" "}
              <strong>supporto, consulenza o formazione</strong> da parte dei
              nostri esperti? Vuoi sapere di più su Hinto Group?
            </Body>
            <Body size="l">
              Per tutto questo e molto altro, puoi contare su di noi: scrivici
              ora.
            </Body>
          </StyledColumnLeft>
          <StyledColumnRight>
            <FormContattaci />
          </StyledColumnRight>
        </Grid>
      </StyledSezioneContattaci>
    </Section>
  );
};
