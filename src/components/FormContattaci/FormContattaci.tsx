import { useState } from "react";
import { Checkbox } from "../../commons/FormComponents/Checkbox/Checkbox";
import { Input } from "../../commons/FormComponents/Input/Input";
import { Select } from "../../commons/FormComponents/Select/Select";
import { TextArea } from "../../commons/FormComponents/TextArea/TextArea";
import { Body, Flex } from "../../commons/Theme";
import { Button } from "../../commons/UI/Button";
import {
  isValidEmail,
  isValidName,
  isValidTelephone,
} from "../../commons/utils";
import {
  StyledFormContattaci,
  StyledPrivacy,
  StyledTwoCols,
} from "./FormContattaci.style";
import { FormErrors } from "./FormContattaci.types";

const motiviOptions = [
  "Sono interessato",
  "Voglio lavorare con voi",
  "Non saprei",
];

export const FormContattaci = () => {
  const [nome, setNome] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [azienda, setAzienda] = useState<string>("");
  const [motivo, setMotivo] = useState<string>("");
  const [messaggio, setMessaggio] = useState<string>("");
  const [datiPersonali, setDatiPersonali] = useState<boolean>(false);
  const [newsletter, setNewsletter] = useState<boolean>(false);
  const [formErrors, setFormErrors] = useState<FormErrors>({});

  function onSubmit() {
    console.table({
      nome,
      email,
      phone,
      azienda,
      motivo,
      messaggio,
      datiPersonali,
      newsletter,
    });
  }

  return (
    <StyledFormContattaci>
      <Input
        label="nome e cognome"
        placeholder="Es. Mario Rossi"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        errorMessage={formErrors.nome}
        onBlur={() => {
          const error = !nome
            ? "Campo obbligatorio"
            : !isValidName(nome)
            ? "Nome e cognome errato"
            : "";
          setFormErrors((prev) => ({ ...prev, nome: error }));
        }}
        required
      />
      <StyledTwoCols>
        <Input
          label="email"
          type="email"
          placeholder="La tua email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          errorMessage={formErrors.email}
          onBlur={() => {
            const error = !email
              ? "Campo obbligatorio"
              : !isValidEmail(email)
              ? "Email errata"
              : "";
            setFormErrors((prev) => ({ ...prev, email: error }));
          }}
          required
        />
        <Input
          label="telefono"
          type="tel"
          placeholder="Il tuo numero di cellulare"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          errorMessage={formErrors.phone}
          onBlur={() => {
            const error = !phone
              ? "Campo obbligatorio"
              : !isValidTelephone(phone)
              ? "Telefono errato"
              : "";
            setFormErrors((prev) => ({ ...prev, phone: error }));
          }}
          required
        />
      </StyledTwoCols>
      <Input
        label="azienda"
        placeholder="La tua azienda"
        value={azienda}
        onChange={(e) => setAzienda(e.target.value)}
        errorMessage={formErrors.azienda}
        onBlur={() => {
          const error = !azienda ? "Campo obbligatorio" : "";
          setFormErrors((prev) => ({ ...prev, azienda: error }));
        }}
        required
      />
      <Select
        label="motivo"
        options={motiviOptions}
        required
        value={motivo}
        onChange={setMotivo}
        errorMessage={formErrors.motivo}
        onBlur={() => {
          const error = !motivo
            ? "Campo obbligatorio"
            : "";
          setFormErrors((prev) => ({ ...prev, motivo: error }));
        }}
        onFocus={() => setFormErrors((prev) => ({ ...prev, motivo: "" }))}
      />
      <TextArea
        label="messaggio"
        placeholder="Scrivi il tuo messaggio"
        required
        value={messaggio}
        onChange={(e) => setMessaggio(e.target.value)}
        errorMessage={formErrors.messaggio}
        onBlur={() => {
          const error = !messaggio ? "Campo obbligatorio" : "";
          setFormErrors((prev) => ({ ...prev, messaggio: error }));
        }}
      />
      <Flex direction="column" $gap={8}>
        <Checkbox
          label="Accetto il trattamento dei dati personali"
          required
          onChange={setDatiPersonali}
        />
        <StyledPrivacy>
          <Body size="xs">
            <strong>
              Informativa sul trattamento dei dati personali (art. 13 GDPR
              679/2016) <br />
              Soggetti Interessati : Utenti sezione web “Contattaci”
            </strong>
            <br />
            Hinto S.r.l., in qualità di ‘Titolare del Trattamento’ dei suoi dati
            personali, nella persona del Legale Rappresentante, ai sensi e per
            gli effetti del Regolamento Europeo sulla protezione dei dati
            personali in acronimo GDPR (General Data Protection Regulation)
            679/2016, con la presente La informa che la citata normativa prevede
            la tutela delle persone e di altri soggetti rispetto al trattamento
            dei dati personali e che tale trattamento sarà improntato ai
            principi di correttezza, liceità, trasparenza e di tutela della Sua
            riservatezza e dei Suoi diritti, come da art. 5 della predetta
            norma. I Suoi dati personali, previa accettazione con la spunta
            della casella che precede questa informativa, verranno trattati in
            accordo alle disposizioni legislative della normativa sopra
            richiamata e degli obblighi di riservatezza ivi previsti. La
            finalità del trattamento dei dati è meramente propedeutica ad
            avviare un canale di contatto con Lei, al fine di rispondere alle
            Sue esigenze o richieste di chiarimento, e dunque non verranno
            impiegati per scopi commerciali né ceduti a terzi. I dati verranno
            impiegati dal personale di Hinto al solo fine predetto, e quindi
            usati per comunicazioni dirette a Voi prive di finalità commerciali
            o terze, ma finalizzate a rispondere alle Vostre istanze. A fronte
            di ciò, il conferimento dei dati richiesti è necessario per gli
            scopi di contatto anzidetti, peraltro da Voi richiesti: nel caso in
            cui essi non vengano forniti, non si potrà dare corso alle risposte
            del caso e non potremo contattarVi. In ogni momento Voi avrete
            diritto di accesso ai Vostri dati, ovvero alla loro cancellazione o
            ad esercitare le altre opzioni e diritti previsti dall’ordinamento
            scrivendo ai seguenti recapiti mail o PEC: info@hinto.com /
            hinto@postecert.it
          </Body>
        </StyledPrivacy>
        <Checkbox label="Iscriviti alla newsletter" onChange={setNewsletter} />
      </Flex>
      <Button
        label="Invia"
        onClick={onSubmit}
        disabled={
          !(
            nome &&
            email &&
            phone &&
            azienda &&
            motivo &&
            messaggio &&
            datiPersonali
          ) || Object.values(formErrors).filter((x) => x).length > 0
        }
      />
    </StyledFormContattaci>
  );
};
