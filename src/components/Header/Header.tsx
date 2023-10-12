import { StyledSectionContent } from "../../commons/Section";
import { Flex } from "../../commons/Theme";
import { MenuItem } from "../../commons/UI/MenuItem";
import { Icon } from "../Icons/Icon";
import { MainLogo } from "../Icons/MainLogo";
import { StyledHeader } from "./Header.style";

const menuOptions = {
  label: "About",
  url: "/",
  children: [
    { label: "Company", url: "/company" },
    { label: "Openings", url: "/openings" },
    { label: "Manifesto", url: "/manifesto" },
  ],
};

const menuOptions2 = {
  label: "Contact us",
  url: "/contact",
};

const menuOptions3 = {
  label: "Home",
  url: "/ns-hinto/",
};

export const Header = () => {
  return (
    <StyledHeader>
      <StyledSectionContent>
        <Flex $alignItems="center" $gap={8} wrap="nowrap">
          <Icon
            Icon={MainLogo}
            width="160px"
            $desktopWidth="200px"
            fill="currentColor"
          />
          <Flex $gap={8}>
            <MenuItem label={menuOptions3.label} url={menuOptions3.url} />
            <MenuItem
              label={menuOptions.label}
              url={menuOptions.url}
              options={menuOptions.children}
            />
            <MenuItem label={menuOptions2.label} url={menuOptions2.url} />
          </Flex>
        </Flex>
      </StyledSectionContent>
    </StyledHeader>
  );
};
