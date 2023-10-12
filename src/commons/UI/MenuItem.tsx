import { useEffect, useState } from "react";
import styled from "styled-components";
import { BodyS_Narrow_CSS, Colors, DesktopBR } from "../Theme";

const StyledMenuDropdown = styled.div`
  position: absolute;
  z-index: 1;
  top: 100%;
  left: 0;
  transition: clip-path 0.3s ease-in-out;
  clip-path: polygon(0 0, 100% 0%, 100% 0%, 0 0%);

  background: white;
  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.08),
    0px 8px 16px 0px rgba(0, 0, 0, 0.04);
`;

const StyledMenuItem = styled.div`
  display: flex;
  align-items: center;
  background: white;

  height: 48px;
  padding: 12px 16px;

  cursor: pointer;
`;

const StyledMenuItemWrapper = styled.div`
  display: none;
  position: relative;

  a {
    text-decoration: none;
    color: ${Colors.neutral900};
  }

  &:hover {
    ${StyledMenuDropdown} {
      clip-path: polygon(
        -16px -16px,
        calc(100% + 16px) -16px,
        calc(100% + 16px) calc(100% + 16px),
        -16px calc(100% + 16px)
      );
    }
    ${StyledMenuItem} {
      span::before {
        transform: scaleX(1);
      }
    }
  }

  @media screen and (min-width: ${DesktopBR}) {
    display: block;
  }
`;

const StyledMenuSpan = styled.span<{ $isActive: boolean }>`
  text-decoration: none;
  ${BodyS_Narrow_CSS}
  position: relative;
  width: fit-content;

  &::before {
    content: "";
    display: block;
    width: 100%;
    height: 1px;
    background: ${Colors.neutral900};
    position: absolute;
    top: calc(100% - 2px);
    transition: transform 0.3s;
    transform-origin: 0 0;
    transform: scaleX(${({ $isActive }) => ($isActive ? "1" : "0")});
  }
`;

const StyledMenuItemChild = styled.div`
  display: flex;
  align-items: center;
  background: white;

  width: 320px;
  height: 48px;
  padding: 12px 16px;

  cursor: pointer;

  &:hover {
    span::before {
      transform: scaleX(1);
    }
  }
`;

export const MenuItem = ({ label, url, options }: MenuItemProps) => {
  const [pathname, setPathname] = useState<string>("");

  useEffect(() => {
    setPathname(window.location.pathname);
  }, []);

  return (
    <StyledMenuItemWrapper>
      <a href={url}>
        <StyledMenuItem>
          <StyledMenuSpan $isActive={url === pathname}>{label}</StyledMenuSpan>
        </StyledMenuItem>
      </a>
      {options && (
        <StyledMenuDropdown>
          {options?.map((opt) => (
            <a key={opt.label} href={opt.url}>
              <StyledMenuItemChild>
                <StyledMenuSpan $isActive={opt.url === pathname}>
                  {opt.label}
                </StyledMenuSpan>
              </StyledMenuItemChild>
            </a>
          ))}
        </StyledMenuDropdown>
      )}
    </StyledMenuItemWrapper>
  );
};

type MenuItemProps = {
  label: string;
  url: string;
  options?: { label: string; url: string }[];
};
