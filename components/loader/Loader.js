import styled from "styled-components";

const Wrapper = styled.div`
display:flex;
justify-content:center;
`

const Loading = styled.div`
  display: inline-block;
  position: relative;
  margin-top: 30%;
  width: 80px;
  height: 80px;
  &:after {
    content: " ";
    display: block;
    border-radius: 50%;
    width: 0;
    height: 0;
    margin: 8px;
    box-sizing: border-box;
    border: 32px solid #fff;
    border-color: #000 transparent #000 transparent;
    animation: lds-hourglass 1.2s infinite;
  }
  @keyframes lds-hourglass {
    0% {
      transform: rotate(0);
      animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }
    50% {
      transform: rotate(900deg);
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    100% {
      transform: rotate(1800deg);
    }
  }
`;

const Loader = () => {
  return (
    <Wrapper>
      <Loading className="lds-hourglass" />
    </Wrapper>
  );
};

export default Loader;
