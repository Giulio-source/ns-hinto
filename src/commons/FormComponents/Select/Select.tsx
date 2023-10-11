import { useEffect, useRef, useState } from "react";
import { Alert } from "../../../components/Icons/Alert";
import { Check } from "../../../components/Icons/Check";
import { ChevronDown } from "../../../components/Icons/ChevronDown";
import { Icon } from "../../../components/Icons/Icon";
import { Colors } from "../../Theme";
import {
  StyledInputError,
  StyledInputHelp,
  StyledInputLabel,
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

export const Select = ({
  id,
  label,
  errorMessage,
  helpText,
  options,
  value,
  onChange,
  disabled = false,
  theme = "light",
}: SelectProps) => {
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const selectRef = useRef<HTMLDivElement>(null);

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

  return (
    <StyledSelectWrapper>
      {label && (
        <StyledInputLabel as="div" id={id}>
          {label}
        </StyledInputLabel>
      )}
      <StyledDropdownWrapper theme={theme}>
        <StyledSelect
          value={value}
          onChange={(e) => onChange && onChange(e.target.value)}
          $hasError={!!errorMessage}
          aria-labelledby={id}
          disabled={disabled}
          theme={theme}
        >
          <option value="" disabled>
            Select...
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
            $showDropdown={showDropdown}
            disabled={disabled}
            theme={theme}
            onClick={() => !disabled && setShowDropdown((prev) => !prev)}
          >
            {value || "Select..."}
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
      {helpText && !errorMessage && (
        <StyledInputHelp theme={theme}>{helpText}</StyledInputHelp>
      )}
    </StyledSelectWrapper>
  );
};
