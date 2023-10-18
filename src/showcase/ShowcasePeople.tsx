import { useEffect, useState } from "react";
import { Section } from "../commons/Section";
import { Flex } from "../commons/Theme";
import { shuffleArray } from "../commons/utils";
import { CustomGrid } from "../components/CustomGrid/CustomGrid";
import { PersonCard } from "../components/PersonCard/PersonCard";
import { PersonCardProps } from "../components/PersonCard/PersonCard.types";
import { useWindowMedia } from "../hooks/useWindowMedia";

const peopleData: PersonCardProps[] = [
  {
    jobTitle: "UX/UI DESIGNER",
    fullName: "Jessica Marangoni",
    imageGrey: "/ns-hinto/images/jessica-bw.jpeg",
    imageColor: "/ns-hinto/images/jessica-color.jpeg",
    cardColor: "pink",
    description:
      "Proprio come i suoi gatti, è curiosa e ama guardare il mondo da molte prospettive: una delle sue preferite è a testa in giù, girando velocissima su un palo di pole dance.",
  },
  {
    jobTitle: "UX/UI DESIGNER",
    fullName: "Jessica Marangoni",
    imageGrey: "/ns-hinto/images/jessica-bw.jpeg",
    imageColor: "/ns-hinto/images/jessica-color.jpeg",
    cardColor: "green",
    description:
      "Proprio come i suoi gatti, è curiosa e ama guardare il mondo da molte prospettive: una delle sue preferite è a testa in giù, girando velocissima su un palo di pole dance.",
  },
  {
    jobTitle: "UX/UI DESIGNER",
    fullName: "Jessica Marangoni",
    imageGrey: "/ns-hinto/images/jessica-bw.jpeg",
    imageColor: "/ns-hinto/images/jessica-color.jpeg",
    cardColor: "purple",
    description:
      "Proprio come i suoi gatti, è curiosa e ama guardare il mondo da molte prospettive: una delle sue preferite è a testa in giù, girando velocissima su un palo di pole dance.",
  },
  {
    jobTitle: "UX/UI DESIGNER",
    fullName: "Ester Barbato",
    imageGrey: "/ns-hinto/images/ester-bw.jpeg",
    imageColor: "/ns-hinto/images/ester-color.jpeg",
    cardColor: "pink",
    description:
      "Colei che ammette di giudicare i libri dalle copertine. Amante del bello, disegnatrice instancabile, consumatrice massiva di post-it.",
  },
  {
    jobTitle: "UX/UI DESIGNER",
    fullName: "Ester Barbato",
    imageGrey: "/ns-hinto/images/ester-bw.jpeg",
    imageColor: "/ns-hinto/images/ester-color.jpeg",
    cardColor: "green",
    description:
      "Colei che ammette di giudicare i libri dalle copertine. Amante del bello, disegnatrice instancabile, consumatrice massiva di post-it.",
  },
  {
    jobTitle: "UX/UI DESIGNER",
    fullName: "Ester Barbato",
    imageGrey: "/ns-hinto/images/ester-bw.jpeg",
    imageColor: "/ns-hinto/images/ester-color.jpeg",
    cardColor: "purple",
    description:
      "Colei che ammette di giudicare i libri dalle copertine. Amante del bello, disegnatrice instancabile, consumatrice massiva di post-it.",
  },
  {
    jobTitle: "SEO and Web Marketing Specialist",
    fullName: "Matteo Spini",
    imageGrey: "/ns-hinto/images/matteo-bw.jpeg",
    imageColor: "/ns-hinto/images/matteo-color.jpeg",
    cardColor: "pink",
    description:
      "Non è un segreto che il suo corpo funzioni diversamente da quello degli altri comuni mortali: non grazie all'ossigeno, ma grazie all'immenso potere della pastasciutta!",
  },
  {
    jobTitle: "SEO and Web Marketing Specialist",
    fullName: "Matteo Spini",
    imageGrey: "/ns-hinto/images/matteo-bw.jpeg",
    imageColor: "/ns-hinto/images/matteo-color.jpeg",
    cardColor: "green",
    description:
      "Non è un segreto che il suo corpo funzioni diversamente da quello degli altri comuni mortali: non grazie all'ossigeno, ma grazie all'immenso potere della pastasciutta!",
  },
  {
    jobTitle: "SEO and Web Marketing Specialist",
    fullName: "Matteo Spini",
    imageGrey: "/ns-hinto/images/matteo-bw.jpeg",
    imageColor: "/ns-hinto/images/matteo-color.jpeg",
    cardColor: "purple",
    description:
      "Non è un segreto che il suo corpo funzioni diversamente da quello degli altri comuni mortali: non grazie all'ossigeno, ma grazie all'immenso potere della pastasciutta!",
  },
  {
    jobTitle: "Digital and Innovation Manager",
    fullName: "Maria Luisa Zappalà",
    imageGrey: "/ns-hinto/images/luisa-bw.jpeg",
    imageColor: "/ns-hinto/images/luisa-color.jpeg",
    cardColor: "pink",
    description:
      "Sportiva, amante del mare e dell'arte... ma anche una buona forchetta! A cosa non può rinunciare? Ovviamente a Lolita, la sua cagnolina nonchè coinquilina.",
  },
  {
    jobTitle: "Digital and Innovation Manager",
    fullName: "Maria Luisa Zappalà",
    imageGrey: "/ns-hinto/images/luisa-bw.jpeg",
    imageColor: "/ns-hinto/images/luisa-color.jpeg",
    cardColor: "green",
    description:
      "Sportiva, amante del mare e dell'arte... ma anche una buona forchetta! A cosa non può rinunciare? Ovviamente a Lolita, la sua cagnolina nonchè coinquilina.",
  },
  {
    jobTitle: "Digital and Innovation Manager",
    fullName: "Maria Luisa Zappalà",
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

  useEffect(() => {
    setPeople(shuffleArray(peopleData));
  }, []);

  return (
    <Section theme="dark" $defaultPadding>
      <div style={{ marginTop: "120px" }}></div>
      {isMobile ? (
        <Flex $gap={16}>
          <Flex direction="column" $gap={16} style={{ flex: 1 }}>
            {people.slice(0, people.length / 2).map((data) => (
              <PersonCard key={data.fullName} {...data} />
            ))}
          </Flex>
          <Flex direction="column" $gap={16} style={{ flex: 1 }}>
            {people.slice(people.length / 2).map((data) => (
              <PersonCard key={data.fullName} {...data} />
            ))}
          </Flex>
        </Flex>
      ) : (
        <CustomGrid mobileCols={2} desktopCols={3} largeCols={2}>
          {people.map((data) => (
            <PersonCard key={data.fullName} {...data} />
          ))}
        </CustomGrid>
      )}
    </Section>
  );
};
