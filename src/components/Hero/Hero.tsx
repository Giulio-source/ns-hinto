import { Body, Grid, Heading } from "../../commons/Theme";
import { StyledHero, StyledHeroLeft, StyledHeroRight, StyledImageDodge } from "./Hero.style";
import { HeroProps } from "./Hero.types";

export const Hero = ({ title, body, imgUrl, imgDodgeUrl }: HeroProps) => {
  return (
    <StyledHero>
      <Grid>
        <StyledHeroLeft>
          {title && <Heading size="m">{title}</Heading>}
          {body && <Body size="m" dangerouslySetInnerHTML={{ __html: body }} />}
        </StyledHeroLeft>
        <StyledHeroRight>
          {imgUrl && <img src={imgUrl} alt="Hero iamge" />}
          {imgDodgeUrl && <StyledImageDodge src={imgDodgeUrl} alt="Hero iamge" />}
        </StyledHeroRight>
      </Grid>
    </StyledHero>
  );
};
