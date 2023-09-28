import { Section } from "../commons/Section";
import { Hero } from "../components/Hero/Hero";

export const ShowcaseHero = () => {
  return (
    <Section theme="dark">
      <Hero
        title="Soluzioni"
        body={`In un contesto digitale sempre più complesso, non esiste un'unica soluzione valida sempre: ogni sfida, ogni idea, ogni progetto ha bisogno di una risposta su misura. In Hinto®Group lo sappiamo bene: abbiamo le competenze e l'esperienza per offrirti una vasta gamma di soluzioni integrate con cui valorizzare ogni aspetto del tuo business.`}
        imgUrl={
          import.meta.env.DEV
            ? "/images/soluzioni-normal.png"
            : "/ns-hinto/images/soluzioni-normal.png"
        }
        imgDodgeUrl={
          import.meta.env.DEV
            ? "/images/soluzioni-dodge.png"
            : "/ns-hinto/images/soluzioni-dodge.png"
        }
      />
      <hr />
      <Hero
        title="Competenze"
        body={`Combiniamo competenze eterogenee e specialistiche in diversi ambiti per trasformare idee innovative in soluzioni digitali di successo. Esplora le nostre aree di expertise.`}
        imgUrl={
          import.meta.env.DEV
            ? "/images/competenze-normal.png"
            : "/ns-hinto/images/competenze-normal.png"
        }
        imgDodgeUrl={
          import.meta.env.DEV
            ? "/images/competenze-dodge.png"
            : "/ns-hinto/images/competenze-dodge.png"
        }
      />
      <hr />
      <Hero
        title="Partner ⚠️"
        body={`Le partnership sono il nostro valore aggiunto per offrire soluzioni innovative e all'avanguardia. Collaboriamo con leader globali per combinare la nostra competenza con strumenti di qualità.`}
        imgUrl={
          import.meta.env.DEV
            ? "/images/partner-normal.png"
            : "/ns-hinto/images/partner-normal.png"
        }
        imgDodgeUrl={
          import.meta.env.DEV
            ? "/images/partner-dodge.png"
            : "/ns-hinto/images/partner-dodge.png"
        }
      />
      <hr />
      <Hero
        title="Portfolio ⚠️"
        body={`
          <figure>
            <blockquote>
              "Il valore di un'idea sta nel metterla in pratica"
            </blockquote>
            <figcaption>Thomas E. Edison</figcaption>
          </figure>
          <br />
          <p>
            Scopri come abbiamo trasformato idee dei nostri clienti in soluzioni di
            valore dall'impatto concreto.
          </p>
        `}
        imgUrl={
          import.meta.env.DEV
            ? "/images/portfolio-normal.png"
            : "/ns-hinto/images/portfolio-normal.png"
        }
        imgDodgeUrl={
          import.meta.env.DEV
            ? "/images/portfolio-dodge.png"
            : "/ns-hinto/images/portfolio-dodge.png"
        }
      />
    </Section>
  );
};
