import { useEffect, useState } from "react";
import { Label } from "../../commons/Theme";
import { Button } from "../../commons/UI/Button";
import { ChevronDown } from "../Icons/ChevronDown";
import { Icon } from "../Icons/Icon";
import {
  StyledFilter,
  StyledFilterBody,
  StyledFilterHeader,
} from "./Filter.style";
import { FilterProp } from "./Filter.type";

const heightClosedFilter = 56;
const heightSelectWithPadding = 112;
const heightButtonWithPadding = 80;
const heightBorder = 2;

export const Filter = ({
  filters,
  disabled,
  onFilter,
  activeFilters,
}: FilterProp) => {
  const [open, setOpen] = useState<boolean>(false);
  const [showOverflow, setShowOverflow] = useState<boolean>(false);
  const numberOfFilters = activeFilters.filter((x) => x).length;

  useEffect(() => {
    if (open) {
      setTimeout(() => {
        setShowOverflow(open);
      }, 400);
    } else {
      setShowOverflow(open);
    }
  }, [open]);

  return (
    <StyledFilter
      $open={open}
      $showOverflow={showOverflow}
      $maxHeight={
        filters.props.children.length * heightSelectWithPadding +
        heightButtonWithPadding +
        heightClosedFilter +
        heightBorder
      }
    >
      <StyledFilterHeader $open={open} onClick={() => setOpen((prev) => !prev)}>
        <Label size="m" $weight={600}>
          Filtri {numberOfFilters > 0 ? `(${numberOfFilters})` : null}
        </Label>
        <Icon width="24px" fill="currentColor" Icon={ChevronDown} />
      </StyledFilterHeader>
      <StyledFilterBody>
        {filters}
        <Button
          label="Applica"
          disabled={disabled}
          onClick={() => {
            onFilter();
            setOpen(false);
          }}
        />
      </StyledFilterBody>
    </StyledFilter>
  );
};
