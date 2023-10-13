import { useEffect, useId, useRef, useState } from "react";
import { Alert } from "../../../components/Icons/Alert";
import { Check } from "../../../components/Icons/Check";
import { ChevronDown } from "../../../components/Icons/ChevronDown";
import { Icon } from "../../../components/Icons/Icon";
import { Colors } from "../../Theme";
import {
  StyledInputError,
  StyledInputHelp,
  StyledInputLabel,
  StyledRedSpan,
} from "../Input/Input.style";
import {
  StyledCustomDropdown,
  StyledCustomDropdownItem,
  StyledCustomDropdownLabel,
  StyledCustomSelect,
  StyledDropdownWrapper,
  StyledSelect,
  StyledSelectIcon,
  StyledSelectWrapper,
} from "./Select.style";
import { SelectProps } from "./Select.types";

// Took this approach for accessibility: https://css-tricks.com/striking-a-balance-between-native-and-custom-select-elements/

const SELECT_DEFAULT = "Seleziona...";

export const Select = ({
  label,
  errorMessage,
  description,
  options,
  value,
  onChange,
  onBlur,
  onFocus,
  disabled = false,
  theme = "light",
  required,
}: SelectProps) => {
  const [showDropdown, setShowDropdown] = useState<boolean>();
  const [openedOnce, setOpenedOnce] = useState<boolean>(false);
  const selectRef = useRef<HTMLDivElement>(null);
  const selectId = useId();

  useEffect(() => {
    function handleClickOut(e: MouseEvent) {
      if (selectRef.current && !selectRef.current.contains(e.target as Node)) {
        setShowDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOut);
    return () => {
      document.removeEventListener("mousedown", handleClickOut);
    };
  }, []);

  useEffect(() => {
    if (
      typeof showDropdown === "boolean" &&
      showDropdown === false &&
      openedOnce === true
    ) {
      onBlur && onBlur();
    }
    if (showDropdown === true) {
      setOpenedOnce(true);
    }
  }, [showDropdown]);

  return (
    <StyledSelectWrapper>
      {label && (
        <StyledInputLabel as="div" id={selectId}>
          {label}
          {required && <StyledRedSpan>*</StyledRedSpan>}
        </StyledInputLabel>
      )}
      <StyledDropdownWrapper theme={theme}>
        <StyledSelect
          value={value}
          onChange={(e) => onChange && onChange(e.target.value)}
          onBlur={onBlur}
          onFocus={onFocus}
          $hasError={!!errorMessage}
          aria-labelledby={selectId}
          disabled={disabled}
          theme={theme}
          required={required}
        >
          <option value="" disabled>
            {SELECT_DEFAULT}
          </option>
          {options.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </StyledSelect>
        <StyledCustomSelect aria-hidden="true" ref={selectRef}>
          <StyledCustomDropdownLabel
            value={!!value}
            $hasError={!!errorMessage}
            $showDropdown={!!showDropdown}
            disabled={disabled}
            theme={theme}
            onClick={() => !disabled && setShowDropdown((prev) => !prev)}
          >
            {value || SELECT_DEFAULT}
            <Icon
              Icon={ChevronDown}
              width="16px"
              fill={disabled ? Colors.neutral200 : Colors.neutral900}
            />
          </StyledCustomDropdownLabel>
          {showDropdown && (
            <StyledCustomDropdown>
              {options.map((opt) => (
                <StyledCustomDropdownItem
                  key={opt}
                  $isSelected={opt === value}
                  onClick={() => {
                    onChange && onChange(opt);
                    setShowDropdown(false);
                  }}
                >
                  {opt}
                  {opt === value && (
                    <Icon width="24px" Icon={Check} fill={Colors.blue400} />
                  )}
                </StyledCustomDropdownItem>
              ))}
            </StyledCustomDropdown>
          )}
        </StyledCustomSelect>
        <StyledSelectIcon>
          <Icon
            Icon={ChevronDown}
            width="16px"
            fill={disabled ? Colors.neutral200 : Colors.neutral900}
          />
        </StyledSelectIcon>
      </StyledDropdownWrapper>
      {errorMessage && (
        <StyledInputError>
          <Icon Icon={Alert} width="16px" fill="currentColor" />
          {errorMessage}
        </StyledInputError>
      )}
      {description && !errorMessage && (
        <StyledInputHelp theme={theme}>{description}</StyledInputHelp>
      )}
    </StyledSelectWrapper>
  );
};
