import gsap from "gsap";
import MotionPathPlugin from "gsap/dist/MotionPathPlugin";
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
import { ShowcasePeople } from "./showcase/ShowcasePeople";
import { ShowcaseTypography } from "./showcase/Typography";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    gsap.registerPlugin(MotionPathPlugin);
  }, []);

  return (
    <>
      <GlobalStyle />
      <Header />
      <ShowcasePeople />
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
