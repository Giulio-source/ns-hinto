import { Children } from "react";
import styled from "styled-components";
import { Grid } from "../../commons/Theme";

const StyledGridChild = styled.div<{
  $mobileCols: number;
  $tabletCols: number;
  $desktopCols: number;
  $largeCols: number;
}>`
  grid-column: span ${({ $mobileCols }) => $mobileCols};

  @media screen and (min-width: 768px) {
    grid-column: span ${({ $tabletCols }) => $tabletCols};
  }

  @media screen and (min-width: 1024px) {
    grid-column: span ${({ $desktopCols }) => $desktopCols};
  }

  @media screen and (min-width: 1440px) {
    grid-column: span ${({ $largeCols }) => $largeCols};
  }
`;

export const CustomGrid = ({
  mobileCols,
  desktopCols,
  tabletCols = desktopCols,
  largeCols = desktopCols,
  children,
}: CustomGridProps) => {
  return (
    <Grid>
      {Children.map(children, (child) => (
        <StyledGridChild
          $mobileCols={mobileCols}
          $tabletCols={tabletCols}
          $desktopCols={desktopCols}
          $largeCols={largeCols}
        >
          {child}
        </StyledGridChild>
      ))}
    </Grid>
  );
};

type CustomGridProps = {
  mobileCols: number;
  tabletCols?: number;
  desktopCols: number;
  largeCols?: number;
  children: React.ReactNode;
};
