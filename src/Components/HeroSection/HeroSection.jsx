import styled from "styled-components";
import { keyframes } from "styled-components";

const trackingInExpand = keyframes`
  0% {
    letter-spacing: -0.5em;
    opacity: 0;
  }
  40% {
    opacity: 0.6;
  }
  100% {
    opacity: 1;
  }
`;

const scaleUpCenter = keyframes`
  0% {
    transform: scale(0.5);
  }
  100% {
    transform: scale(1);
  }
`;

// const AnimatedText = styled.h1`
//   display: inline-block;
//   font-size: 2rem;
//   animation: ${trackingInExpand} 0.7s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
// `;

const HeroContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  max-height: 100vh;
  display: flex;
`;

const Apresentation = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  /* padding-left:  0px; */
  align-items: center;
  justify-content: center;
`;
const Texts = styled.p`
  font-size: 2rem;
  color: white;
  display: flex;
  align-items: start;
  width: 42%;
  animation: ${trackingInExpand} 2s cubic-bezier(0.215, 0.61, 0.355, 1) both;
  margin: 0;
  padding: 0;
`;

const Title = styled.h1`
  font-size: 6rem;
  font-family: "Roboto";
  animation: ${trackingInExpand} 2s cubic-bezier(0.215, 0.61, 0.355, 1) both;
`;

const Perfil = styled.div`
  display: flex;
  width: 60%;
  align-items: center;
  justify-content: center;
`;

const Elipse = styled.div`
  width: 50%;
  position: relative;
  box-shadow: 0px 5px 34px 2px rgba(0, 0, 0, 0.25);
  border-radius: 50%;
  background-color: #2d2d2d;
  height: 526px;
`;

const ReactElipse = styled.div`
  width: 13%;
  position: relative;
  top: 150px;
  right: 600px;
  box-shadow: 0px 4px 4px 5px rgba(0, 0, 0, 0.06);
  border-radius: 50%;
  background-color: #333;
  height: 150px;
  animation: ${scaleUpCenter} 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
`;

const JsElipse = styled.div`
  width: 10%;
  position: relative;
  top: 220px;
  right: 280px;
  box-shadow: 0px 4px 4px 5px rgba(0, 0, 0, 0.06);
  border-radius: 50%;
  background-color: #333;
  height: 120px;
  animation: ${scaleUpCenter} 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
`;

const NodeElipse = styled.div`
  width: 10%;
  position: relative;
  bottom: 150px;
  right: 360px;
  box-shadow: 0px 4px 4px 5px rgba(0, 0, 0, 0.06);
  border-radius: 50%;
  background-color: #333;
  height: 120px;
  animation: ${scaleUpCenter} 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
`;

export default function HeroSection() {
  return (
    <>
      <HeroContainer>
        <Apresentation>
          <Texts>Hello , i am</Texts>
          <Title>
            <code style={{ color: "#70ff00" }}>
              &lt; Jesse <br /> Alve /&gt;
            </code>
          </Title>

          <Texts
            style={{ fontSize: "3.6rem", width: "90%", paddingLeft: "180px" }}
          >
            FullStack Developer
          </Texts>

          <h2>2</h2>
        </Apresentation>

        <Perfil>
          <Elipse>
            <img
              style={{
                objectFit: "cover",
                position: "relative",
                left: "25px",
              }}
              src="public\images\av-removebg-preview-1.png"
              alt=""
            />
          </Elipse>

          <ReactElipse>
            <img
              style={{
                objectFit: "cover",
                position: "relative",
                left: "12px",
                top: "10px",
              }}
              src="public\images\react-original-2.svg"
              alt="React icon"
            />
          </ReactElipse>

          <JsElipse>
            <img
              style={{
                objectFit: "cover",
                position: "relative",
                left: "26px",
                top: "30px",
              }}
              src="public\images\javascript-original-2.svg"
              alt="JavaScript icon"
            />
          </JsElipse>


          <NodeElipse>
            <img
             style={{
              objectFit: "cover",
              position: "relative",
              left: "19px",
              top: "20px",
            }} src="public\images\nodejs-original-2.svg" alt="" />
          </NodeElipse>
        </Perfil>
      </HeroContainer>
    </>
  );
}
