import { GlobalStyle } from "./commons/Theme";
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
      <ShowcasePalette />
      <ShowcaseGrid />
      <ShowcaseIcons />
      <ShowcaseLogos />
      <ShowcaseTypography />
      <ShowcaseButtons />
    </>
  );
}

export default App;
