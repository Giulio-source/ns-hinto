import { useState } from "react";
import {
  Checkbox,
  CheckboxGroup,
} from "../commons/FormComponents/Checkbox/Checkbox";
import { Input } from "../commons/FormComponents/Input/Input";
import { Select } from "../commons/FormComponents/Select/Select";
import { TextArea } from "../commons/FormComponents/TextArea/TextArea";
import { Section } from "../commons/Section";
import { Flex } from "../commons/Theme";
import { Plus } from "../components/Icons/Plus";
import customIconUrl from "../assets/icons/minus.svg";

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
      <Section $defaultPadding>
        <h1>Showcase: Form components</h1>
        <Flex $gap={40}>
          <Flex direction="column" $gap={24}>
            <CheckboxGroup
              label="Checkbox group verticale"
              description="Description"
            >
              {options.map((opt, i) => (
                <Checkbox
                  key={`checkbox-${opt}`}
                  id={`checkbox-${opt}`}
                  label={opt}
                  onChange={() => {}}
                  disabled={i > 3}
                  defaultValue={i > 5}
                />
              ))}
            </CheckboxGroup>
            <CheckboxGroup
              label="Checkbox group verticale con icona custom"
              description="Description"
            >
              {options.map((opt, i) => (
                <Checkbox
                  key={`checkbox2-${opt}`}
                  id={`checkbox2-${opt}`}
                  label={opt}
                  onChange={() => {}}
                  disabled={i > 3}
                  defaultValue={i > 5}
                  customIconUrl={customIconUrl}
                />
              ))}
            </CheckboxGroup>
            <CheckboxGroup
              layout="row"
              label="Checkbox group orizzontale"
              description="Description"
            >
              {options.map((opt, i) => (
                <Checkbox
                  key={`checkbox3-${opt}`}
                  id={`checkbox3-${opt}`}
                  label={opt}
                  onChange={() => {}}
                  disabled={i > 3}
                  defaultValue={i > 5}
                />
              ))}
            </CheckboxGroup>
            <CheckboxGroup
              layout="row"
              label="Checkbox group orizzontale"
              description="Description"
            >
              {options.map((opt, i) => (
                <Checkbox
                  key={`checkbox4-${opt}`}
                  id={`checkbox4-${opt}`}
                  label={opt}
                  onChange={() => {}}
                  disabled={i > 3}
                  defaultValue={i > 5}
                  customIconUrl={customIconUrl}
                />
              ))}
            </CheckboxGroup>
          </Flex>
          <Select
            label="Select regular"
            description="Help text"
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
            description="Help text"
            id="fruit-select2"
            options={options}
            disabled
            // value={select1}
            // onChange={(value) => setSelect1(value)}
          />
          <Select
            label="Select disabled"
            description="Help text"
            id="fruit-select2"
            options={options}
            disabled
            value={"Orange"}
            // onChange={(value) => setSelect1(value)}
          />
          <Input
            label="normal input"
            placeholder="Placeholder"
            description="Help text"
          />
          <Input
            label="input with error"
            placeholder="Placeholder"
            description="Help text"
            errorMessage="Error message"
          />
          <Input
            label="input disabled"
            placeholder="Placeholder"
            description="Help text"
            disabled
          />
          <Input
            label="input with icon"
            placeholder="Placeholder"
            description="Help text"
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
            description="Help text"
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
      <Section theme="dark" $defaultPadding>
        <h1>Showcase: Dark selects</h1>
        <Flex $gap={40}>
          <Select
            theme="dark"
            label="Select regular"
            description="Help text"
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
            description="Help text"
            id="fruit-select3"
            options={options}
            disabled
            // value={select1}
            // onChange={(value) => setSelect1(value)}
          />
          <Select
            theme="dark"
            label="Select disabled"
            description="Help text"
            id="fruit-select4"
            options={options}
            disabled
            value={"Orange"}
            // onChange={(value) => setSelect1(value)}
          />
        </Flex>
      </Section>
    </>
  );
};
