import { useState } from "react";
import { Input } from "../commons/FormComponents/Input/Input";
import { Select } from "../commons/FormComponents/Select/Select";
import { TextArea } from "../commons/FormComponents/TextArea/TextArea";
import { Section } from "../commons/Section";
import { Flex } from "../commons/Theme";
import { Plus } from "../components/Icons/Plus";

const options = [
  "Orange",
  "Apple",
  "Banana",
  "Pear",
  "Mango",
  "Pineapple",
  "Strawberry",
  "Blueberry",
  "Raspberry",
];

export const ShowcaseForm = () => {
  const [textArea1, setTextArea1] = useState<string>("");
  const [textArea2, setTextArea2] = useState<string>("");
  const [textArea3, setTextArea3] = useState<string>("");
  const [textArea4, setTextArea4] = useState<string>("");
  const [select1, setSelect1] = useState<string>("");
  const [select2, setSelect2] = useState<string>("");

  return (
    <>
      <Section theme="dark" $defaultPadding>
        <h1>Showcase: Dark selects</h1>
        <Flex $gap={40}>
          <Select
            theme="dark"
            label="Select regular"
            helpText="Help text"
            id="fruit-select"
            options={options}
            value={select1}
            onChange={(value) => setSelect1(value)}
          />
          <Select
            theme="dark"
            label="Select with error"
            errorMessage="Error message"
            id="fruit-select2"
            options={options}
            value={select2}
            onChange={(value) => setSelect2(value)}
          />
          <Select
            theme="dark"
            label="Select disabled"
            helpText="Help text"
            id="fruit-select3"
            options={options}
            disabled
            // value={select1}
            // onChange={(value) => setSelect1(value)}
          />
          <Select
            theme="dark"
            label="Select disabled"
            helpText="Help text"
            id="fruit-select4"
            options={options}
            disabled
            value={"Orange"}
            // onChange={(value) => setSelect1(value)}
          />
        </Flex>
      </Section>
      <Section $defaultPadding>
        <h1>Showcase: Form components</h1>
        <Flex $gap={40}>
          <Select
            label="Select regular"
            helpText="Help text"
            id="fruit-select"
            options={options}
            value={select1}
            onChange={(value) => setSelect1(value)}
          />
          <Select
            label="Select with error"
            errorMessage="Error message"
            id="fruit-select2"
            options={options}
            value={select2}
            onChange={(value) => setSelect2(value)}
          />
          <Select
            label="Select disabled"
            helpText="Help text"
            id="fruit-select2"
            options={options}
            disabled
            // value={select1}
            // onChange={(value) => setSelect1(value)}
          />
          <Select
            label="Select disabled"
            helpText="Help text"
            id="fruit-select2"
            options={options}
            disabled
            value={"Orange"}
            // onChange={(value) => setSelect1(value)}
          />
          <Input
            label="normal input"
            placeholder="Placeholder"
            helpText="Help text"
          />
          <Input
            label="input with error"
            placeholder="Placeholder"
            helpText="Help text"
            errorMessage="Error message"
          />
          <Input
            label="input disabled"
            placeholder="Placeholder"
            helpText="Help text"
            disabled
          />
          <Input
            label="input with icon"
            placeholder="Placeholder"
            helpText="Help text"
            CustomIcon={Plus}
          />
          <TextArea
            id="textarea1"
            label="textarea normal"
            placeholder="Placeholder"
            value={textArea1}
            onChange={(e) => setTextArea1(e.target.value)}
          />
          <TextArea
            id="textarea2"
            label="textarea with help"
            placeholder="Placeholder"
            helpText="Help text"
            value={textArea2}
            onChange={(e) => setTextArea2(e.target.value)}
          />
          <TextArea
            id="textarea3"
            label="textarea with error"
            placeholder="Placeholder"
            errorMessage="Error message"
            value={textArea3}
            onChange={(e) => setTextArea3(e.target.value)}
          />
          <TextArea
            id="textarea4"
            label="textarea disabled"
            placeholder="Placeholder"
            disabled
            value={textArea4}
            onChange={(e) => setTextArea4(e.target.value)}
          />
        </Flex>
      </Section>
    </>
  );
};
