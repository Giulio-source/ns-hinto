import { Button } from "../commons/Button";
import { Section } from "../commons/Section";
import { Flex } from "../commons/Theme";
import { ArrowRight } from "../components/Icons/ArrowRight";

export const ShowcaseButtons = () => {
  return (
    <>
      <Section defaultPadding>
        <h1>Showcase: Buttons Light</h1>
        <h2>Primary buttons</h2>
        <br />
        <Flex gap={16} alignItems="center">
          <Button onClick={() => {}} label="Action verb" />
          <Button
            onClick={() => {}}
            label="Action verb"
            CustomIcon={ArrowRight}
          />
          <Button
            onClick={() => {}}
            label="Action verb"
            CustomIcon={ArrowRight}
            iconPosition="left"
          />
          <Button
            onClick={() => {}}
            CustomIcon={ArrowRight}
            iconPosition="left"
          />
          <Button disabled onClick={() => {}} label="Action verb" />
          <Button
            disabled
            onClick={() => {}}
            label="Action verb"
            CustomIcon={ArrowRight}
          />
          <Button
            disabled
            onClick={() => {}}
            label="Action verb"
            CustomIcon={ArrowRight}
            iconPosition="left"
          />
          <Button
            disabled
            onClick={() => {}}
            CustomIcon={ArrowRight}
            iconPosition="left"
          />

          <Button size="s" onClick={() => {}} label="Action verb" />
          <Button
            size="s"
            onClick={() => {}}
            label="Action verb"
            CustomIcon={ArrowRight}
          />
          <Button
            size="s"
            onClick={() => {}}
            label="Action verb"
            CustomIcon={ArrowRight}
            iconPosition="left"
          />
          <Button
            size="s"
            onClick={() => {}}
            CustomIcon={ArrowRight}
            iconPosition="left"
          />

          <Button disabled size="s" onClick={() => {}} label="Action verb" />
          <Button
            size="s"
            disabled
            onClick={() => {}}
            label="Action verb"
            CustomIcon={ArrowRight}
          />
          <Button
            size="s"
            disabled
            onClick={() => {}}
            label="Action verb"
            CustomIcon={ArrowRight}
            iconPosition="left"
          />
          <Button
            size="s"
            disabled
            onClick={() => {}}
            CustomIcon={ArrowRight}
            iconPosition="left"
          />
        </Flex>
        <br />
        <h2>Secondary buttons</h2>
        <br />
        <Flex gap={16} alignItems="center">
          <Button onClick={() => {}} label="Action verb" type="secondary" />
          <Button
            onClick={() => {}}
            label="Action verb"
            type="secondary"
            CustomIcon={ArrowRight}
          />
          <Button
            onClick={() => {}}
            label="Action verb"
            type="secondary"
            CustomIcon={ArrowRight}
            iconPosition="left"
          />
          <Button
            onClick={() => {}}
            type="secondary"
            CustomIcon={ArrowRight}
            iconPosition="left"
          />
          <Button
            disabled
            onClick={() => {}}
            label="Action verb"
            type="secondary"
          />
          <Button
            disabled
            onClick={() => {}}
            label="Action verb"
            type="secondary"
            CustomIcon={ArrowRight}
          />
          <Button
            disabled
            onClick={() => {}}
            label="Action verb"
            type="secondary"
            CustomIcon={ArrowRight}
            iconPosition="left"
          />
          <Button
            disabled
            onClick={() => {}}
            type="secondary"
            CustomIcon={ArrowRight}
            iconPosition="left"
          />
          <Button
            size="s"
            onClick={() => {}}
            label="Action verb"
            type="secondary"
          />
          <Button
            size="s"
            onClick={() => {}}
            label="Action verb"
            type="secondary"
            CustomIcon={ArrowRight}
          />
          <Button
            size="s"
            onClick={() => {}}
            label="Action verb"
            type="secondary"
            CustomIcon={ArrowRight}
            iconPosition="left"
          />
          <Button
            size="s"
            onClick={() => {}}
            type="secondary"
            CustomIcon={ArrowRight}
            iconPosition="left"
          />
          <Button
            size="s"
            disabled
            onClick={() => {}}
            label="Action verb"
            type="secondary"
          />
          <Button
            size="s"
            disabled
            onClick={() => {}}
            label="Action verb"
            type="secondary"
            CustomIcon={ArrowRight}
          />
          <Button
            size="s"
            disabled
            onClick={() => {}}
            label="Action verb"
            type="secondary"
            CustomIcon={ArrowRight}
            iconPosition="left"
          />
          <Button
            size="s"
            disabled
            onClick={() => {}}
            type="secondary"
            CustomIcon={ArrowRight}
            iconPosition="left"
          />
        </Flex>
        <br />
        <h2>Ghost buttons</h2>
        <br />
        <Flex gap={16} alignItems="center">
          <Button onClick={() => {}} label="Action verb" type="ghost" />
          <Button
            onClick={() => {}}
            label="Action verb"
            type="ghost"
            CustomIcon={ArrowRight}
          />
          <Button
            onClick={() => {}}
            label="Action verb"
            type="ghost"
            CustomIcon={ArrowRight}
            iconPosition="left"
          />
          <Button
            onClick={() => {}}
            type="ghost"
            CustomIcon={ArrowRight}
            iconPosition="left"
          />
          <Button
            disabled
            onClick={() => {}}
            label="Action verb"
            type="ghost"
          />
          <Button
            disabled
            onClick={() => {}}
            label="Action verb"
            type="ghost"
            CustomIcon={ArrowRight}
          />
          <Button
            disabled
            onClick={() => {}}
            label="Action verb"
            type="ghost"
            CustomIcon={ArrowRight}
            iconPosition="left"
          />
          <Button
            disabled
            onClick={() => {}}
            type="ghost"
            CustomIcon={ArrowRight}
            iconPosition="left"
          />
          <Button
            size="s"
            onClick={() => {}}
            label="Action verb"
            type="ghost"
          />
          <Button
            size="s"
            onClick={() => {}}
            label="Action verb"
            type="ghost"
            CustomIcon={ArrowRight}
          />
          <Button
            size="s"
            onClick={() => {}}
            label="Action verb"
            type="ghost"
            CustomIcon={ArrowRight}
            iconPosition="left"
          />
          <Button
            size="s"
            onClick={() => {}}
            type="ghost"
            CustomIcon={ArrowRight}
            iconPosition="left"
          />
          <Button
            size="s"
            disabled
            onClick={() => {}}
            label="Action verb"
            type="ghost"
          />
          <Button
            size="s"
            disabled
            onClick={() => {}}
            label="Action verb"
            type="ghost"
            CustomIcon={ArrowRight}
          />
          <Button
            size="s"
            disabled
            onClick={() => {}}
            label="Action verb"
            type="ghost"
            CustomIcon={ArrowRight}
            iconPosition="left"
          />
          <Button
            size="s"
            disabled
            onClick={() => {}}
            type="ghost"
            CustomIcon={ArrowRight}
            iconPosition="left"
          />
        </Flex>
      </Section>
      <Section theme="dark" defaultPadding>
        <h1>Showcase: Buttons Dark</h1>
        <h2 style={{ color: "white" }}>Primary buttons</h2>
        <br />
        <Flex gap={16} alignItems="center">
          <Button onClick={() => {}} label="Action verb" theme="dark" />
          <Button
            onClick={() => {}}
            label="Action verb"
            CustomIcon={ArrowRight}
            theme="dark"
          />
          <Button
            onClick={() => {}}
            label="Action verb"
            CustomIcon={ArrowRight}
            iconPosition="left"
            theme="dark"
          />
          <Button
            onClick={() => {}}
            CustomIcon={ArrowRight}
            iconPosition="left"
            theme="dark"
          />
          <Button
            disabled
            onClick={() => {}}
            label="Action verb"
            theme="dark"
          />
          <Button
            disabled
            onClick={() => {}}
            label="Action verb"
            CustomIcon={ArrowRight}
            theme="dark"
          />
          <Button
            disabled
            onClick={() => {}}
            label="Action verb"
            CustomIcon={ArrowRight}
            iconPosition="left"
            theme="dark"
          />
          <Button
            disabled
            onClick={() => {}}
            CustomIcon={ArrowRight}
            iconPosition="left"
            theme="dark"
          />
          <Button
            size="s"
            onClick={() => {}}
            label="Action verb"
            theme="dark"
          />
          <Button
            size="s"
            onClick={() => {}}
            label="Action verb"
            CustomIcon={ArrowRight}
            theme="dark"
          />
          <Button
            size="s"
            onClick={() => {}}
            label="Action verb"
            CustomIcon={ArrowRight}
            iconPosition="left"
            theme="dark"
          />
          <Button
            size="s"
            onClick={() => {}}
            CustomIcon={ArrowRight}
            iconPosition="left"
            theme="dark"
          />
          <Button
            size="s"
            disabled
            onClick={() => {}}
            label="Action verb"
            theme="dark"
          />
          <Button
            size="s"
            disabled
            onClick={() => {}}
            label="Action verb"
            CustomIcon={ArrowRight}
            theme="dark"
          />
          <Button
            size="s"
            disabled
            onClick={() => {}}
            label="Action verb"
            CustomIcon={ArrowRight}
            iconPosition="left"
            theme="dark"
          />
          <Button
            size="s"
            disabled
            onClick={() => {}}
            CustomIcon={ArrowRight}
            iconPosition="left"
            theme="dark"
          />
        </Flex>
        <br />
        <h2 style={{ color: "white" }}>Secondary buttons</h2>
        <br />
        <Flex>
          <Button
            onClick={() => {}}
            label="Action verb"
            type="secondary"
            theme="dark"
          />
          <Button
            onClick={() => {}}
            label="Action verb"
            type="secondary"
            theme="dark"
            CustomIcon={ArrowRight}
          />
          <Button
            onClick={() => {}}
            label="Action verb"
            type="secondary"
            theme="dark"
            CustomIcon={ArrowRight}
            iconPosition="left"
          />
          <Button
            onClick={() => {}}
            type="secondary"
            theme="dark"
            CustomIcon={ArrowRight}
            iconPosition="left"
          />
          <Button
            disabled
            onClick={() => {}}
            label="Action verb"
            type="secondary"
            theme="dark"
          />
          <Button
            disabled
            onClick={() => {}}
            label="Action verb"
            type="secondary"
            theme="dark"
            CustomIcon={ArrowRight}
          />
          <Button
            disabled
            onClick={() => {}}
            label="Action verb"
            type="secondary"
            theme="dark"
            CustomIcon={ArrowRight}
            iconPosition="left"
          />
          <Button
            disabled
            onClick={() => {}}
            type="secondary"
            theme="dark"
            CustomIcon={ArrowRight}
            iconPosition="left"
          />
          <Button
            size="s"
            onClick={() => {}}
            label="Action verb"
            type="secondary"
            theme="dark"
          />
          <Button
            size="s"
            onClick={() => {}}
            label="Action verb"
            type="secondary"
            theme="dark"
            CustomIcon={ArrowRight}
          />
          <Button
            size="s"
            onClick={() => {}}
            label="Action verb"
            type="secondary"
            theme="dark"
            CustomIcon={ArrowRight}
            iconPosition="left"
          />
          <Button
            size="s"
            onClick={() => {}}
            type="secondary"
            theme="dark"
            CustomIcon={ArrowRight}
            iconPosition="left"
          />
          <Button
            size="s"
            disabled
            onClick={() => {}}
            label="Action verb"
            type="secondary"
            theme="dark"
          />
          <Button
            size="s"
            disabled
            onClick={() => {}}
            label="Action verb"
            type="secondary"
            theme="dark"
            CustomIcon={ArrowRight}
          />
          <Button
            size="s"
            disabled
            onClick={() => {}}
            label="Action verb"
            type="secondary"
            theme="dark"
            CustomIcon={ArrowRight}
            iconPosition="left"
          />
          <Button
            size="s"
            disabled
            onClick={() => {}}
            type="secondary"
            theme="dark"
            CustomIcon={ArrowRight}
            iconPosition="left"
          />
        </Flex>
        <br />
        <h2 style={{ color: "white" }}>Ghost buttons</h2>
        <br />
        <Flex>
          <Button
            onClick={() => {}}
            label="Action verb"
            type="ghost"
            theme="dark"
          />
          <Button
            onClick={() => {}}
            label="Action verb"
            type="ghost"
            theme="dark"
            CustomIcon={ArrowRight}
          />
          <Button
            onClick={() => {}}
            label="Action verb"
            type="ghost"
            theme="dark"
            CustomIcon={ArrowRight}
            iconPosition="left"
          />
          <Button
            onClick={() => {}}
            type="ghost"
            theme="dark"
            CustomIcon={ArrowRight}
            iconPosition="left"
          />
          <Button
            disabled
            onClick={() => {}}
            label="Action verb"
            type="ghost"
            theme="dark"
          />
          <Button
            disabled
            onClick={() => {}}
            label="Action verb"
            type="ghost"
            theme="dark"
            CustomIcon={ArrowRight}
          />
          <Button
            disabled
            onClick={() => {}}
            label="Action verb"
            type="ghost"
            theme="dark"
            CustomIcon={ArrowRight}
            iconPosition="left"
          />
          <Button
            disabled
            onClick={() => {}}
            type="ghost"
            theme="dark"
            CustomIcon={ArrowRight}
            iconPosition="left"
          />
          <Button
            size="s"
            onClick={() => {}}
            label="Action verb"
            type="ghost"
            theme="dark"
          />
          <Button
            size="s"
            onClick={() => {}}
            label="Action verb"
            type="ghost"
            theme="dark"
            CustomIcon={ArrowRight}
          />
          <Button
            size="s"
            onClick={() => {}}
            label="Action verb"
            type="ghost"
            theme="dark"
            CustomIcon={ArrowRight}
            iconPosition="left"
          />
          <Button
            size="s"
            onClick={() => {}}
            type="ghost"
            theme="dark"
            CustomIcon={ArrowRight}
            iconPosition="left"
          />
          <Button
            size="s"
            disabled
            onClick={() => {}}
            label="Action verb"
            type="ghost"
            theme="dark"
          />
          <Button
            size="s"
            disabled
            onClick={() => {}}
            label="Action verb"
            type="ghost"
            theme="dark"
            CustomIcon={ArrowRight}
          />
          <Button
            size="s"
            disabled
            onClick={() => {}}
            label="Action verb"
            type="ghost"
            theme="dark"
            CustomIcon={ArrowRight}
            iconPosition="left"
          />
          <Button
            size="s"
            disabled
            onClick={() => {}}
            type="ghost"
            theme="dark"
            CustomIcon={ArrowRight}
            iconPosition="left"
          />
        </Flex>
      </Section>
    </>
  );
};
