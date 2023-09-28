import { Section } from "../commons/Section";
import { Grid } from "../commons/Theme";
import { Alert } from "../components/Icons/Alert";
import { ArrowDown } from "../components/Icons/ArrowDown";
import { ArrowDownLeft } from "../components/Icons/ArrowDownLeft";
import { ArrowDownRight } from "../components/Icons/ArrowDownRight";
import { ArrowLeft } from "../components/Icons/ArrowLeft";
import { ArrowRight } from "../components/Icons/ArrowRight";
import { ArrowUp } from "../components/Icons/ArrowUp";
import { ArrowUpLeft } from "../components/Icons/ArrowUpLeft";
import { ArrowUpRight } from "../components/Icons/ArrowUpRight";
import { Check } from "../components/Icons/Check";
import { ChevronDown } from "../components/Icons/ChevronDown";
import { ChevronUp } from "../components/Icons/ChevronUp";
import { Close } from "../components/Icons/Close";
import { Download } from "../components/Icons/Download";
import { Filter } from "../components/Icons/Filter";
import { GridBig } from "../components/Icons/GridBig";
import { GridSmall } from "../components/Icons/GridSmall";
import { Icon } from "../components/Icons/Icon";
import { Maximize } from "../components/Icons/Maximize";
import { Menu } from "../components/Icons/Menu";
import { Minimize } from "../components/Icons/Minimize";
import { Minus } from "../components/Icons/Minus";
import { Paperclip } from "../components/Icons/Paperclip";
import { Plus } from "../components/Icons/Plus";
import { Slider } from "../components/Icons/Slider";
import { ZoomIn } from "../components/Icons/ZoomIn";
import { ZoomOut } from "../components/Icons/ZoomOut";

export const ShowcaseIcons = () => {
  return (
    <Section $defaultPadding>
      <h1>Showcase: Icons</h1>
      <Grid style={{ rowGap: "24px" }}>
        <Icon Icon={ArrowRight} />
        <Icon Icon={ArrowLeft} />
        <Icon Icon={ArrowUp} />
        <Icon Icon={ArrowDown} />
        <Icon Icon={ArrowUpLeft} />
        <Icon Icon={ArrowUpRight} />
        <Icon Icon={ArrowDownLeft} />
        <Icon Icon={ArrowDownRight} />
        <Icon Icon={Close} />
        <Icon Icon={Plus} />
        <Icon Icon={Minus} />
        <Icon Icon={GridBig} />
        <Icon Icon={Slider} />
        <Icon Icon={GridSmall} />
        <Icon Icon={ZoomIn} />
        <Icon Icon={ZoomOut} />
        <Icon Icon={ChevronDown} />
        <Icon Icon={ChevronUp} />
        <Icon Icon={Minimize} />
        <Icon Icon={Maximize} />
        <Icon Icon={Paperclip} />
        <Icon Icon={Alert} />
        <Icon Icon={Menu} />
        <Icon Icon={Download} />
        <Icon Icon={Filter} />
        <Icon Icon={Check} />
      </Grid>
    </Section>
  );
};
