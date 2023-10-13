import { Pixels } from "./commons/Pixels";
import { GlobalStyle } from "./commons/Theme";
import { Header } from "./components/Header/Header";
import { ShowcaseButtons } from "./showcase/Buttons";
import { ShowcaseGrid } from "./showcase/Grid";
import { ShowcaseIcons } from "./showcase/Icons";
import { ShowcaseLogos } from "./showcase/Logos";
import { ShowcasePalette } from "./showcase/Palette";
import { SezioneContattaci } from "./showcase/SezioneContattaci";
import { ShowcaseAccordionContattaci } from "./showcase/ShowcaseAccordionContattaci";
import { ShowcaseForm } from "./showcase/ShowcaseForm";
import { ShowcaseHero } from "./showcase/ShowcaseHero";
import { ShowcaseTypography } from "./showcase/Typography";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <ShowcaseAccordionContattaci />
      <SezioneContattaci />
      <ShowcaseForm />
      <ShowcaseHero />
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
