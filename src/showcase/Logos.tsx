import { Section } from "../commons/Section";
import { Flex } from "../commons/Theme";
import { Icon } from "../components/Icons/Icon";
import { MainLogo } from "../components/Icons/MainLogo";
import { MonogramLogo } from "../components/Icons/MonogramLogo";

export const ShowcaseLogos = () => {
  return (
    <>
      <Section>
        <h1>Showcase: Logos</h1>
        <Flex gap={40}>
          <Icon Icon={MainLogo} width="500px" />
          <Icon Icon={MonogramLogo} width="50px" />
        </Flex>
      </Section>
      <Section theme="dark">
        <h1>Showcase: Logos Dark</h1>
        <Flex gap={40}>
          <Icon Icon={MainLogo} width="500px" fill="white" />
          <Icon Icon={MonogramLogo} width="50px" fill="white" />
        </Flex>
      </Section>
    </>
  );
};
