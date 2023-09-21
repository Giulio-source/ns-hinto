import { GlobalStyle } from "./commons/Theme";
import { ShowcaseGrid } from "./showcase/Grid";
import { ShowcaseIcons } from "./showcase/Icons";
import { Palette } from "./showcase/Palette";
import {ShowcaseLogos} from './showcase/Logos';
import {ShowcaseTypography} from './showcase/Typography';

function App() {
  return (
    <>
      <GlobalStyle />
      <Palette />
      <ShowcaseGrid />
      <ShowcaseIcons />
      <ShowcaseLogos />
      <ShowcaseTypography />
    </>
  );
}

export default App;
