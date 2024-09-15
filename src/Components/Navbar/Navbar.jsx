import styled from "styled-components";

const Links = styled.a`
  font-size: 26px;
  color: #ffffff;
  text-decoration: none;
  margin: 0;
  padding: 0;
  transition: ease 1s;
  cursor: pointer;

 &:hover{
    transform: scale(1.1);
    border-bottom: 1px solid #70ff00;
 }
`;

const Fluidcontainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  padding: 10px 20px 10px 20px;
  flex-direction: row;
`;

const LogoSide = styled.div`
  display: flex;
  width: 40%;
  align-items: center;
  padding-left: 40px;
  justify-content: start;
`;

const LinksCenter = styled.div`
  display: flex;
  width: 60%;
  align-items: center;
  gap: 60px;
  justify-content: center;
`;

const MediasSide = styled.div`
  display: flex;
  width: 55%;
  align-items: center;
  justify-content: end;
  gap: 30px;
  margin-right: 30px;

`;

const Button = styled.button`
  width: 28%;
  display: flex;
  align-items: center;
  height: 45px;
  text-align: center;
  background-color: transparent;
  border-radius: 13px;
  padding: 10px;
  color: #fff;
  border: 2px solid rgba(112, 255, 0, 0.55);
  transition: ease 1s;

  &:hover {
    transform: scale(1.1);
    border-color: white;
    color: #70ff00;
    
  }
`;

export default function NavBar() {
  return (
    <>
      <Fluidcontainer>
        <LogoSide>
          <img
            src="public\images\Logo.svg"
            alt="Logo de perfil"
            width="63px"
            height="63px"
          />
        </LogoSide>

        <LinksCenter>
          <Links href="">About</Links>
          <Links href="">Skills</Links>
          <Links href="">Projects</Links>
        </LinksCenter>

        <MediasSide>
          <a
            href=""
            style={{
              fontSize: "26px",
              textDecoration: "none",
              color: "white",
              textAlign: "center",
            }}
          >
            <img
              style={{ paddingBottom: "4px" }}
              src="public\images\linkedin-11.svg"
              alt="linkedin"
            />
            Linkedin
          </a>

          <a
            href=""
            style={{ fontSize: "26px", textDecoration: "none", color: "white" }}
          >
            <img
              style={{ paddingBottom: "4px" }}
              src="public\images\github-12.svg"
              alt="github"
            />
            GitHub
          </a>

          <Button>
            <img
              style={{ paddingRight: "15px" }}
              
              src="public\images\email-fast-outline-2.svg"
              alt="contate-me"
            />
            Contacte me
          </Button>
        </MediasSide>
      </Fluidcontainer>
    </>
  );
}
