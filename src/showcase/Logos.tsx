import { Colors, Flex } from "../commons/Theme";
import { Icon } from "../components/Icons/Icon";
import { MainLogo } from "../components/Icons/MainLogo";
import { MonogramLogo } from "../components/Icons/MonogramLogo";
import { Section } from "./Section/Section";

export const ShowcaseLogos = () => {
  return (
    <Section title="Logos" background={Colors.magenta300}>
      <Flex gap={40}>
        <Icon Icon={MainLogo} width="500px" />
        <Icon Icon={MainLogo} width="500px" fill="white" />
        <Icon Icon={MonogramLogo} width="50px" />
        <Icon Icon={MonogramLogo} width="50px" fill="white" />
      </Flex>
    </Section>
  );
};
