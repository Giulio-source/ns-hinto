import { useLayoutEffect, useRef, useState } from "react";
import { Body, Colors, Label } from "../../commons/Theme";
import { useWindowMedia } from "../../hooks/useWindowMedia";
import { Icon } from "../Icons/Icon";
import { Plus } from "../Icons/Plus";
import {
  StyledMobilePersonCard,
  StyledMobilePersonCardInfo,
  StyledMobilePersonCardInfoDescription,
  StyledMobilePersonCardWrapper,
  StyledPersonCard,
  StyledPersonCardIcon,
  StyledPersonCardImageBW,
  StyledPersonCardImageColor,
  StyledPersonCardInfo,
  StyledPersonCardInfoDescription,
} from "./PersonCard.style";
import { PersonCardProps } from "./PersonCard.types";

const cardColorHandler = {
  pink: Colors.magenta200,
  purple: Colors.blue200,
  green: Colors.aquamarine300,
};

export const PersonCard = ({
  jobTitle,
  fullName,
  cardColor = "pink",
  imageColor,
  imageGrey,
  description,
}: PersonCardProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const [bottomHeight, setBottomHeight] = useState<number>(64);
  const [mobileBottomHeight, setMobileBottomHeight] = useState<number>(58);
  const [descriptionHeight, setDescriptionHeight] = useState<number>(0);
  const [mobileDescriptionHeight, setMobileDescriptionHeight] =
    useState<number>(0);
  const infoRef = useRef<HTMLDivElement>(null);
  const mobileInfoRef = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef<HTMLDivElement>(null);
  const mobileDescriptionRef = useRef<HTMLDivElement>(null);
  const { isMobile } = useWindowMedia();

  function measureDOMElements() {
    descriptionRef.current?.clientHeight &&
      setDescriptionHeight(descriptionRef.current?.clientHeight);
    infoRef.current?.clientHeight &&
      setBottomHeight(infoRef.current?.clientHeight + 2);
    mobileInfoRef.current?.clientHeight &&
      setMobileBottomHeight(mobileInfoRef.current?.clientHeight + 2);
    mobileDescriptionRef.current?.clientHeight &&
      setMobileDescriptionHeight(
        mobileDescriptionRef.current?.clientHeight + 2
      );
  }

  function handleOnClick() {
    setOpen((prev) => !prev);
    descriptionRef.current?.clientHeight &&
      setDescriptionHeight(descriptionRef.current?.clientHeight);
    mobileDescriptionRef.current?.clientHeight &&
      setMobileDescriptionHeight(mobileDescriptionRef.current?.clientHeight);
  }

  useLayoutEffect(() => {
    setTimeout(() => {
      measureDOMElements();
    }, 100);

    window.addEventListener("resize", measureDOMElements);

    return () => {
      window.removeEventListener("resize", measureDOMElements);
    };
  }, []);

  if (isMobile) {
    return (
      <StyledMobilePersonCardWrapper
        $cardColor={cardColorHandler[cardColor]}
        onClick={handleOnClick}
        $open={open}
        $bottomHeight={mobileBottomHeight}
        $descriptionHeight={mobileDescriptionHeight}
      >
        <StyledMobilePersonCard $bottomHeight={mobileBottomHeight}>
          <StyledPersonCardImageBW src={imageGrey} alt={fullName} />
          <StyledPersonCardImageColor src={imageColor} alt={fullName} />
          <StyledMobilePersonCardInfo
            ref={mobileInfoRef}
            $bottomHeight={mobileBottomHeight}
          >
            <Label $font="Work Sans" size="xs" $uppercase>
              {jobTitle}
            </Label>
            <Label style={{ marginTop: "2px" }} $weight={600} size="s">
              {fullName}
            </Label>
          </StyledMobilePersonCardInfo>
        </StyledMobilePersonCard>
        <StyledMobilePersonCardInfoDescription ref={mobileDescriptionRef}>
          <Body size="xs" $weight={500}>
            {description}
          </Body>
        </StyledMobilePersonCardInfoDescription>
        <StyledPersonCardIcon>
          <Icon width="16px" fill={Colors.neutral900} Icon={Plus} />
        </StyledPersonCardIcon>
      </StyledMobilePersonCardWrapper>
    );
  }

  return (
    <StyledPersonCard
      $cardColor={cardColorHandler[cardColor]}
      onClick={handleOnClick}
      $open={open}
      $bottomHeight={bottomHeight}
      $descriptionHeight={descriptionHeight}
    >
      <StyledPersonCardImageBW src={imageGrey} alt={fullName} />
      <StyledPersonCardImageColor src={imageColor} alt={fullName} />
      <StyledPersonCardInfo ref={infoRef}>
        <Label $font="Work Sans" size="xs" $uppercase>
          {jobTitle}
        </Label>
        <Label style={{ marginTop: "2px" }} $weight={600} size="s">
          {fullName}
        </Label>
        <StyledPersonCardInfoDescription ref={descriptionRef}>
          <Body size="xs" $weight={500}>
            {description}
          </Body>
        </StyledPersonCardInfoDescription>
      </StyledPersonCardInfo>
      <StyledPersonCardIcon>
        <Icon width="16px" fill={Colors.neutral900} Icon={Plus} />
      </StyledPersonCardIcon>
    </StyledPersonCard>
  );
};
