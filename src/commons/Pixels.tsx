import gsap from "gsap";
import { useEffect } from "react";
import styled from "styled-components";
import { Colors } from "./Theme";

const StyledPixel = styled.div`
  position: fixed;

  &.small {
    position: fixed;
    width: 30px;
    height: 30px;
    z-index: -2;

    &.red {
      top: 20%;
      left: 30%;
    }

    &.blue {
      top: 40%;
      left: 70%;
    }

    &.green {
      top: 70%;
      left: 50%;
      background: ${Colors.aquamarine400};
    }
  }

  &.big {
    position: fixed;
    width: 300px;
    height: 250px;
    border-radius: 80px;
    z-index: -4;

    &.red {
      top: calc(20% - 110px);
      left: calc(30% - 125px);
    }

    &.blue {
      top: calc(40% - 110px);
      left: calc(70% - 125px);
    }

    &.green {
      background: rgba(71, 209, 156, 0.7);
      top: calc(70% - 110px);
      left: calc(50% - 125px);
    }
  }

  &.red {
    background: ${Colors.magenta400};
  }

  &.blue {
    background: ${Colors.blue400};
  }
`;

const StyledPaths = styled.svg`
  position: fixed;
  inset: 0;
  pointer-events: none;
  width: 100%;
  height: 100%;
`;

export const Pixels = () => {
  useEffect(() => {
    gsap
      .timeline({ repeat: -1 })
      .add("start")
      .to(
        ".pixel.red",
        {
          duration: 10,
          ease: "linear",
          motionPath: {
            path: "#path-red",
            align: "#path-red",
            alignOrigin: [0.5, 0.5],
          },
        },
        "start"
      )
      .to(
        ".pixel.green",
        {
          duration: 10,
          ease: "linear",
          motionPath: {
            path: "#path-green",
            align: "#path-green",
            alignOrigin: [0.5, 0.5],
          },
        },
        "start"
      )
      .to(
        ".pixel.blue",
        {
          duration: 10,
          ease: "linear",
          motionPath: {
            path: "#path-blue",
            align: "#path-blue",
            alignOrigin: [0.5, 0.5],
          },
        },
        "start"
      )
      .timeScale(0.25);
  }, []);

  return (
    <>
      <StyledPixel className="pixel small red" />
      <StyledPixel className="pixel small blue" />
      <StyledPixel className="pixel small green" />
      <StyledPixel className="pixel big red" />
      <StyledPixel className="pixel big blue" />
      <StyledPixel className="pixel big green" />
      <StyledPaths
        preserveAspectRatio="none"
        viewBox="0 0 1440 1080"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M-14.5 157.5C28.5312 59.1663 74.1041 -2.4828 173.5 -43C253.322 -75.5382 313.924 -84.9088 394 -53C469.293 -22.9969 512.981 16.8223 542 92.5C585.645 206.32 462.827 269.066 447.5 390C421.206 597.472 646.637 731.591 548 916C467.529 1066.45 333.292 1200.81 173.5 1141C53.6991 1096.16 -1.52137 995.777 -7.49997 868C-12.2183 767.159 69.0137 726.512 86 627C117.55 442.169 -89.6703 329.277 -14.5 157.5Z"
          // stroke="green"
          id="path-green"
        />
        <path
          d="M962 32C1078.85 -9.09641 1134.11 -109.004 1256 -87C1346.39 -70.6834 1408.23 -37.7482 1452 43C1508.29 146.837 1407.55 223.894 1406.5 342C1405.1 499.823 1539.73 593.615 1479.5 739.5C1387.98 961.17 1117.58 892.301 879 868C693.812 849.138 500.089 880.446 430 708C370.719 562.145 488.319 468.192 548 322.5C579.789 244.899 581.193 188.751 639 128C729.712 32.6688 837.862 75.6613 962 32Z"
          // stroke="red"
          id="path-red"
        />
        <path
          d="M1466.5 390C1505.85 460.57 1518.24 519.611 1490.5 595.5C1455.28 691.867 1221.39 662.012 1186.5 758.5C1145.06 873.101 1481.4 944.641 1398 1033.5C1331.59 1104.26 1140.41 1042.88 1043.5 1048C870.625 1057.14 785.835 1108.14 623.5 1048C534.5 1015.03 489.923 1003.82 461 876.5C430.995 744.412 466 671 604 560.5C742 450 1028 342 1028 342C1028 342 1382.61 239.538 1466.5 390Z"
          // stroke="blue"
          id="path-blue"
        />
      </StyledPaths>
    </>
  );
};
