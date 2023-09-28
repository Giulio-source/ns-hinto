import { Section } from "../commons/Section";
import { Body, Flex, Heading, Label } from "../commons/Theme";

export const ShowcaseTypography = () => {
  return (
    <Section defaultPadding>
      <h1>Showcase: Typography</h1>
      <Flex gap={24} direction="column">
        <Flex>
          <Heading size="l">Heading L</Heading>
          <Heading size="l" weight={300}>
            Heading L
          </Heading>
        </Flex>
        <Flex>
          <Heading size="m">Heading M</Heading>
          <Heading size="m" weight={300}>
            Heading M
          </Heading>
        </Flex>
        <Flex>
          <Heading size="s">Heading S</Heading>
          <Heading size="s" weight={300}>
            Heading S
          </Heading>
        </Flex>
        <Flex>
          <Heading size="xs">Heading XS</Heading>
          <Heading size="xs" weight={300}>
            Heading XS
          </Heading>
        </Flex>
        <Flex alignItems="end">
          <Body size="l" weight={700}>
            Body L 700
          </Body>
          <Body size="l" weight={500}>
            Body L 500
          </Body>
          <Body size="m" weight={600}>
            Body M 600
          </Body>
          <Body size="m" weight={400}>
            Body M 400
          </Body>
          <Body size="s" weight={400}>
            Body S 400
            <br />
            Body S 400
          </Body>
          <Body size="s" weight={400} underline>
            Body S 400
          </Body>
          <Body size="s" weight={600}>
            Body S 600
          </Body>
          <Body size="s" weight={400} narrow>
            Body S 400 narrow
            <br />
            Body S 400 narrow
          </Body>
          <Body size="xs" weight={500}>
            Body XS 500
          </Body>
        </Flex>
        <Flex alignItems="end">
          <Label size="xl" weight={300}>
            Label XL 300
          </Label>
          <Label size="xl" weight={600}>
            Label XL 600
          </Label>
          <Label size="xl" weight={600} underline>
            Label XL 600
          </Label>
          <Label size="l" weight={300}>
            Label L 300
          </Label>
          <Label size="l" weight={600}>
            Label L 600
          </Label>
          <Label size="l" weight={600} underline>
            Label L 600
          </Label>
          <Label size="l" weight={700}>
            Label L 700
          </Label>
          <Label size="m" weight={300}>
            Label M 300
          </Label>
          <Label size="m" weight={600}>
            Label M 600
          </Label>
          <Label size="s" weight={400}>
            Label S 400
          </Label>
          <Label size="s" weight={600}>
            Label S 600
          </Label>
          <Label font="Work Sans" size="s" uppercase>
            Label S
          </Label>
          <Label font="Work Sans" size="xs" uppercase>
            Label XS
          </Label>
        </Flex>
      </Flex>
    </Section>
  );
};
