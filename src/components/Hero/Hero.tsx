import Lottie from "lottie-react";
import { Button } from "../../commons/Button";
import { Body, Grid, Heading, Label } from "../../commons/Theme";
import { ArrowLeft } from "../Icons/ArrowLeft";
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
  subtitle,
  body,
  imgUrl,
  imgDodgeUrl,
  contentRight,
  $isDetailContent = false,
  backButton,
  bottomButton,
  lottieJson,
}: HeroProps) => {
  return (
    <StyledHero>
      <Grid>
        <StyledHeroLeft $isDetailContent={$isDetailContent}>
          {backButton && (
            <Button
              label={backButton.label}
              href={backButton.url}
              iconPosition="left"
              CustomIcon={ArrowLeft}
              type="ghost"
              theme="dark"
            />
          )}
          {title && (
            <Heading size={$isDetailContent ? "s" : "m"}>{title}</Heading>
          )}
          {subtitle && <Label size="xl">{subtitle}</Label>}
          {body && <Body size="m" dangerouslySetInnerHTML={{ __html: body }} />}
          {bottomButton && (
            <StyledArticoliButton>
              <Button
                label={bottomButton.label}
                theme="dark"
                iconPosition="left"
                CustomIcon={ChevronDown}
                type="ghost"
                href={bottomButton.url}
              />
            </StyledArticoliButton>
          )}
        </StyledHeroLeft>
        {contentRight && (
          <>
            {!$isDetailContent && <StyledVerticalDivider />}
            <StyledHeroRightContent>{contentRight}</StyledHeroRightContent>
          </>
        )}
        {!contentRight && (
          <StyledHeroRightImage $isDetailContent={$isDetailContent}>
            {lottieJson ? (
              <Lottie animationData={lottieJson} loop={true} />
            ) : (
              <>
                {imgUrl && <img src={imgUrl} alt="Hero image" />}
                {imgDodgeUrl && (
                  <StyledImageDodge src={imgDodgeUrl} alt="Hero image" />
                )}
              </>
            )}
          </StyledHeroRightImage>
        )}
      </Grid>
    </StyledHero>
  );
};
