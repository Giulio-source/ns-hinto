import { useEffect, useRef, useState } from "react";
import { Body, Grid } from "../../commons/Theme";
import { Button } from "../../commons/UI/Button";
import { Close } from "../Icons/Close";
import {
  StyledAccordionContattaci,
  StyledAccordionContattaciBody,
  StyledAccordionContattaciHeader,
  StyledAccordionHeaderGrid,
} from "./AccordionContattaci.style";
import { AccordionContattaciProps } from "./AccordionContattaci.types";

const DEFAULT_HEADER_HEIGHT = 196;
const DEFAULT_BODY_HEIGHT = 1008;

export const AccordionContattaci = ({
  label,
  children,
}: AccordionContattaciProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const [headerHeight, setHeaderHeight] = useState<number>(
    DEFAULT_HEADER_HEIGHT
  );
  const [bodyHeight, setBodyHeight] = useState<number>(DEFAULT_BODY_HEIGHT);
  const headerRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function measureComponent() {
      setTimeout(() => {
        const headerClientHeight = headerRef.current?.clientHeight;
        const bodyClientHeight = bodyRef.current?.clientHeight;
        setHeaderHeight(headerClientHeight || DEFAULT_HEADER_HEIGHT);
        setBodyHeight(bodyClientHeight || DEFAULT_BODY_HEIGHT);
      }, 200);
    }

    window.addEventListener("resize", measureComponent);

    measureComponent();

    return () => window.removeEventListener("resize", measureComponent);
  }, []);

  return (
    <StyledAccordionContattaci
      $open={open}
      $maxHeight={open ? headerHeight + bodyHeight - 28 : headerHeight}
    >
      <StyledAccordionHeaderGrid $open={open} ref={headerRef}>
        <StyledAccordionContattaciHeader>
          <Body size="l">{label}</Body>
          <Button
            label={open ? "Chiudi" : "Contattaci"}
            type={open ? "ghost" : "primary"}
            theme="dark"
            onClick={() => setOpen((prev) => !prev)}
            iconPosition="left"
            CustomIcon={open ? Close : undefined}
          />
        </StyledAccordionContattaciHeader>
      </StyledAccordionHeaderGrid>
      <Grid ref={bodyRef}>
        <StyledAccordionContattaciBody>
          {children}
        </StyledAccordionContattaciBody>
      </Grid>
    </StyledAccordionContattaci>
  );
};
