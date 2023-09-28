import { Pixels } from "./commons/Pixels";
import { Section } from "./commons/Section";
import { GlobalStyle } from "./commons/Theme";
import { Hero } from "./components/Hero/Hero";
import { ShowcaseButtons } from "./showcase/Buttons";
import { ShowcaseGrid } from "./showcase/Grid";
import { ShowcaseIcons } from "./showcase/Icons";
import { ShowcaseLogos } from "./showcase/Logos";
import { ShowcasePalette } from "./showcase/Palette";
import { ShowcaseTypography } from "./showcase/Typography";

function App() {
  return (
    <>
      <GlobalStyle />
      <Section theme="dark">
        <Hero
          title="Competenze"
          body={`Combiniamo competenze eterogenee e <strong>specialistiche</strong> in diversi ambiti per trasformare idee innovative in soluzioni digitali di successo. Esplora le nostre aree di expertise.`}
          imgUrl={'/images/competenze-normal.png'}
          imgDodgeUrl={'/images/competenze-dodge.png'}
       />
      </Section>
      <ShowcasePalette />
      <ShowcaseGrid />
      <ShowcaseIcons />
      <ShowcaseLogos />
      <ShowcaseTypography />
      <ShowcaseButtons />
      <Pixels />
    </>
  );
}

export default App;
