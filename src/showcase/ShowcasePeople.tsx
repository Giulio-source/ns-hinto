import { useEffect, useMemo, useState } from "react";
import { Select } from "../commons/FormComponents/Select/Select";
import { Section } from "../commons/Section";
import { Flex } from "../commons/Theme";
import { Spacer } from "../commons/UI/Spacer";
import { onlyUnique, shuffleArray } from "../commons/utils";
import { CustomGrid } from "../components/CustomGrid/CustomGrid";
import { PersonCard } from "../components/PersonCard/PersonCard";
import { PersonCardProps } from "../components/PersonCard/PersonCard.types";
import { useWindowMedia } from "../hooks/useWindowMedia";

const peopleData: PersonCardProps[] = [
  {
    jobTitle: "UX/UI DESIGNER",
    fullName: "Jessica Marangoni 1",
    imageGrey: "/ns-hinto/images/jessica-bw.jpeg",
    imageColor: "/ns-hinto/images/jessica-color.jpeg",
    cardColor: "pink",
    description:
      "Proprio come i suoi gatti, è curiosa e ama guardare il mondo da molte prospettive: una delle sue preferite è a testa in giù, girando velocissima su un palo di pole dance.",
  },
  {
    jobTitle: "UX/UI DESIGNER",
    fullName: "Jessica Marangoni 2",
    imageGrey: "/ns-hinto/images/jessica-bw.jpeg",
    imageColor: "/ns-hinto/images/jessica-color.jpeg",
    cardColor: "green",
    description:
      "Proprio come i suoi gatti, è curiosa e ama guardare il mondo da molte prospettive: una delle sue preferite è a testa in giù, girando velocissima su un palo di pole dance.",
  },
  {
    jobTitle: "UX/UI DESIGNER",
    fullName: "Jessica Marangoni 3",
    imageGrey: "/ns-hinto/images/jessica-bw.jpeg",
    imageColor: "/ns-hinto/images/jessica-color.jpeg",
    cardColor: "purple",
    description:
      "Proprio come i suoi gatti, è curiosa e ama guardare il mondo da molte prospettive: una delle sue preferite è a testa in giù, girando velocissima su un palo di pole dance.",
  },
  {
    jobTitle: "UX/UI DESIGNER",
    fullName: "Ester Barbato 1",
    imageGrey: "/ns-hinto/images/ester-bw.jpeg",
    imageColor: "/ns-hinto/images/ester-color.jpeg",
    cardColor: "pink",
    description:
      "Colei che ammette di giudicare i libri dalle copertine. Amante del bello, disegnatrice instancabile, consumatrice massiva di post-it.",
  },
  {
    jobTitle: "UX/UI DESIGNER",
    fullName: "Ester Barbato 2",
    imageGrey: "/ns-hinto/images/ester-bw.jpeg",
    imageColor: "/ns-hinto/images/ester-color.jpeg",
    cardColor: "green",
    description:
      "Colei che ammette di giudicare i libri dalle copertine. Amante del bello, disegnatrice instancabile, consumatrice massiva di post-it.",
  },
  {
    jobTitle: "UX/UI DESIGNER",
    fullName: "Ester Barbato 3",
    imageGrey: "/ns-hinto/images/ester-bw.jpeg",
    imageColor: "/ns-hinto/images/ester-color.jpeg",
    cardColor: "purple",
    description:
      "Colei che ammette di giudicare i libri dalle copertine. Amante del bello, disegnatrice instancabile, consumatrice massiva di post-it.",
  },
  {
    jobTitle: "SEO and Web Marketing Specialist",
    fullName: "Matteo Spini 1",
    imageGrey: "/ns-hinto/images/matteo-bw.jpeg",
    imageColor: "/ns-hinto/images/matteo-color.jpeg",
    cardColor: "pink",
    description:
      "Non è un segreto che il suo corpo funzioni diversamente da quello degli altri comuni mortali: non grazie all'ossigeno, ma grazie all'immenso potere della pastasciutta!",
  },
  {
    jobTitle: "SEO and Web Marketing Specialist",
    fullName: "Matteo Spini 2",
    imageGrey: "/ns-hinto/images/matteo-bw.jpeg",
    imageColor: "/ns-hinto/images/matteo-color.jpeg",
    cardColor: "green",
    description:
      "Non è un segreto che il suo corpo funzioni diversamente da quello degli altri comuni mortali: non grazie all'ossigeno, ma grazie all'immenso potere della pastasciutta!",
  },
  {
    jobTitle: "SEO and Web Marketing Specialist",
    fullName: "Matteo Spini 3",
    imageGrey: "/ns-hinto/images/matteo-bw.jpeg",
    imageColor: "/ns-hinto/images/matteo-color.jpeg",
    cardColor: "purple",
    description:
      "Non è un segreto che il suo corpo funzioni diversamente da quello degli altri comuni mortali: non grazie all'ossigeno, ma grazie all'immenso potere della pastasciutta!",
  },
  {
    jobTitle: "Digital and Innovation Manager",
    fullName: "Maria Luisa Zappalà 1",
    imageGrey: "/ns-hinto/images/luisa-bw.jpeg",
    imageColor: "/ns-hinto/images/luisa-color.jpeg",
    cardColor: "pink",
    description:
      "Sportiva, amante del mare e dell'arte... ma anche una buona forchetta! A cosa non può rinunciare? Ovviamente a Lolita, la sua cagnolina nonchè coinquilina.",
  },
  {
    jobTitle: "Digital and Innovation Manager",
    fullName: "Maria Luisa Zappalà 2",
    imageGrey: "/ns-hinto/images/luisa-bw.jpeg",
    imageColor: "/ns-hinto/images/luisa-color.jpeg",
    cardColor: "green",
    description:
      "Sportiva, amante del mare e dell'arte... ma anche una buona forchetta! A cosa non può rinunciare? Ovviamente a Lolita, la sua cagnolina nonchè coinquilina.",
  },
  {
    jobTitle: "Digital and Innovation Manager",
    fullName: "Maria Luisa Zappalà 3",
    imageGrey: "/ns-hinto/images/luisa-bw.jpeg",
    imageColor: "/ns-hinto/images/luisa-color.jpeg",
    cardColor: "purple",
    description:
      "Sportiva, amante del mare e dell'arte... ma anche una buona forchetta! A cosa non può rinunciare? Ovviamente a Lolita, la sua cagnolina nonchè coinquilina.",
  },
];

export const ShowcasePeople = () => {
  const { isMobile } = useWindowMedia();
  const [people, setPeople] = useState<PersonCardProps[]>([]);
  const [jobFilter, setJobFilter] = useState<string>("Tutti");

  const jobRoles = useMemo(() => {
    return [
      "Tutti",
      ...people.map((person) => person.jobTitle).filter(onlyUnique),
    ];
  }, [people]);

  const filteredPeople = useMemo(() => {
    return jobFilter === "Tutti"
      ? people
      : people.filter((person) => person.jobTitle === jobFilter);
  }, [people, jobFilter]);

  useEffect(() => {
    setPeople(shuffleArray(peopleData));
  }, []);

  return (
    <Section
      theme="dark"
      title="Le persone"
      spaceTopMobile="100px"
      spaceTopDesktop="150px"
    >
      <CustomGrid mobileCols={4} desktopCols={4}>
        <Select
          theme="dark"
          label="filtra per"
          options={jobRoles}
          value={jobFilter}
          onChange={setJobFilter}
        />
      </CustomGrid>
      <Spacer mobile={24} desktop={48} />
      {isMobile ? (
        <Flex $gap={16}>
          <Flex direction="column" $gap={16} style={{ flex: 1 }}>
            {filteredPeople
              .slice(0, Math.ceil(filteredPeople.length / 2))
              .map((data) => (
                <PersonCard key={data.fullName} {...data} />
              ))}
          </Flex>
          <Flex direction="column" $gap={16} style={{ flex: 1 }}>
            {filteredPeople
              .slice(Math.ceil(filteredPeople.length / 2))
              .map((data) => (
                <PersonCard key={data.fullName} {...data} />
              ))}
          </Flex>
        </Flex>
      ) : (
        <CustomGrid mobileCols={2} desktopCols={3} largeCols={2}>
          {filteredPeople.map((data) => (
            <PersonCard key={data.fullName} {...data} />
          ))}
        </CustomGrid>
      )}
      <Spacer mobile={64} desktop={80} />
    </Section>
  );
};
