import styled from 'styled-components';

const StyledSpinner = styled.span`
  width: ${({width}) => width || '48px'};
  height: ${({height}) => height || '48px'};
  border-radius: 50%;
  display: inline-block;
  border-top: 4px solid #333;
  border-right: 4px solid transparent;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
  &::after {
    content: '';
    box-sizing: border-box;
    position: absolute;
    left: 0;
    top: 0;
    width: ${({width}) => width || '48px'};
    height: ${({height}) => height || '48px'};
    border-radius: 50%;
    border-bottom: 4px solid orange;
    border-left: 4px solid transparent;
  }
  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export function Spinner({width, height, style}) {
  return (
    <StyledSpinner
      className="spinner"
      width={width}
      height={height}
      style={style}
    ></StyledSpinner>
  );
}
