import styled, { keyframes } from "styled-components";
import { Colors } from "./Theme";

const redFloat = keyframes`
    25% {
      transform: translate(-15vw, 15vh);
    }
    50% {
      transform: translate(0vw, 50vh);
    }
    75% {
      transform: translate(10vw, 30vh);
    }
    100% {
      transform: translate(0, 0);
    }
`;

const greenFloat = keyframes`
    25% {
      transform: translate(-15vw, 5vh);
    }
    50% {
      transform: translate(-20vw, -50vh);
    }
    75% {
      transform: translate(10vw, -65vh);
    }
    100% {
      transform: translate(0, 0);
    }
`;

const blueFloat = keyframes`
    25% {
      transform: translate(-10vw, 5vh);
    }
    50% {
      transform: translate(-15vw, 40vh);
    }
    75% {
      transform: translate(5vw, 35vh);
    }
    100% {
      transform: translate(0, 0);
    }
`;

const StyledPixel = styled.div`
  position: fixed;

  &.small {
    position: fixed;
    width: 40px;
    height: 40px;
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
    }
  }

  &.big {
    position: fixed;
    width: 250px;
    height: 200px;
    border-radius: 80px;
    z-index: -4;

    &.red {
      top: calc(20% - 80px);
      left: calc(30% - 105px);
    }

    &.blue {
      top: calc(40% - 80px);
      left: calc(70% - 105px);
    }

    &.green {
      top: calc(70% - 80px);
      left: calc(50% - 105px);
    }
  }

  &.red {
    background: ${Colors.magenta400};
    animation: ${redFloat} 20s linear infinite forwards;
  }

  &.blue {
    background: ${Colors.blue400};
    animation: ${greenFloat} 20s linear infinite forwards;
  }

  &.green {
    background: ${Colors.aquamarine400};
    animation: ${blueFloat} 20s linear infinite forwards;
  }
`;

export const Pixels = () => {
  return (
    <>
      <StyledPixel className="small red" />
      <StyledPixel className="small blue" />
      <StyledPixel className="small green" />
      <StyledPixel className="big red" />
      <StyledPixel className="big blue" />
      <StyledPixel className="big green" />
    </>
  );
};
