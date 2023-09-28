import { Button } from "../../commons/Button";
import { Body, Grid, Heading } from "../../commons/Theme";
import { ChevronDown } from "../Icons/ChevronDown";
import {
  StyledArticoliButton,
  StyledHero,
  StyledHeroLeft,
  StyledHeroRightContent,
  StyledHeroRightImage,
  StyledImageDodge,
  StyledVerticalDivider,
} from "./Hero.style";
import { HeroProps } from "./Hero.types";

export const Hero = ({
  title,
  body,
  imgUrl,
  imgDodgeUrl,
  contentRight,
}: HeroProps) => {
  return (
    <StyledHero>
      <Grid>
        <StyledHeroLeft>
          {title && <Heading size="m">{title}</Heading>}
          {body && <Body size="m" dangerouslySetInnerHTML={{ __html: body }} />}
          {contentRight && (
            <StyledArticoliButton>
              <Button
                label="Scopri tutti gli articoli"
                theme="dark"
                iconPosition="left"
                CustomIcon={ChevronDown}
                type="ghost"
                href="#articoli"
              />
            </StyledArticoliButton>
          )}
        </StyledHeroLeft>
        {contentRight && (
          <>
            <StyledVerticalDivider />
            <StyledHeroRightContent>{contentRight}</StyledHeroRightContent>
          </>
        )}
        {!contentRight && (
          <StyledHeroRightImage>
            {imgUrl && <img src={imgUrl} alt="Hero image" />}
            {imgDodgeUrl && (
              <StyledImageDodge src={imgDodgeUrl} alt="Hero image" />
            )}
          </StyledHeroRightImage>
        )}
      </Grid>
    </StyledHero>
  );
};
