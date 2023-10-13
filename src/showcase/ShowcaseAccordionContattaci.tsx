import { Section } from "../commons/Section";
import { AccordionContattaci } from "../components/AccordionContattaci/AccordionContattaci";
import { FormContattaci } from "../components/FormContattaci/FormContattaci";

export const ShowcaseAccordionContattaci = () => {
  return (
    <Section $defaultPadding>
      <h1>Showcase: Accordion Contattaci</h1>
      <AccordionContattaci
        label={
          <>
            Clicca <i>Contattaci</i> e invia la tua richiesta tramite il form:
            risponderemo al più presto per darti tutte le informazioni di cui
            hai bisogno.
          </>
        }
      >
        <FormContattaci />
      </AccordionContattaci>
    </Section>
  );
};
