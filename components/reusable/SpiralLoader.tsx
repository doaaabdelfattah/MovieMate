import styled, { keyframes } from "styled-components";

const spinAnimation = keyframes`
  0%, 100% {
    box-shadow: 0em -2.6em 0em 0em #ffffff, 
                1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2), 
                2.5em 0em 0 0em rgba(255, 255, 255, 0.2), 
                1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2), 
                0em 2.5em 0 0em rgba(255, 255, 255, 0.2), 
                -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2), 
                -2.6em 0em 0 0em rgba(255, 255, 255, 0.5), 
                -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.7);
  }
  12.5% {
    box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.7), 
                1.8em -1.8em 0 0em #ffffff, 
                2.5em 0em 0 0em rgba(255, 255, 255, 0.2), 
                1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2), 
                0em 2.5em 0 0em rgba(255, 255, 255, 0.2), 
                -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2), 
                -2.6em 0em 0 0em rgba(255, 255, 255, 0.2), 
                -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.5);
  }
  25% {
    box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.5), 
                1.8em -1.8em 0 0em rgba(255, 255, 255, 0.7), 
                2.5em 0em 0 0em #ffffff, 
                1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2), 
                0em 2.5em 0 0em rgba(255, 255, 255, 0.2), 
                -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2), 
                -2.6em 0em 0 0em rgba(255, 255, 255, 0.2), 
                -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);
  }
`;

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

const Loader = styled.span`
  font-size: 10px;
  width: 1em;
  height: 1em;
  border-radius: 50%;
  position: relative;
  text-indent: -9999em;
  animation: ${spinAnimation} 1.1s infinite ease;
  transform: translateZ(0);
`;

const SpiralLoader = () => {
  return (
    <LoaderWrapper>
      <Loader />
    </LoaderWrapper>
  );
};

export default SpiralLoader;
