import { StyledSectionContent } from "../../commons/Section";
import { Icon } from "../Icons/Icon";
import { MainLogo } from "../Icons/MainLogo";
import { StyledHeader } from "./Header.style";
export const Header = () => {
  return (
    <StyledHeader>
      <StyledSectionContent>
        <Icon Icon={MainLogo} width="160px" $desktopWidth="200px" fill="currentColor" />
      </StyledSectionContent>
    </StyledHeader>
  );
};
