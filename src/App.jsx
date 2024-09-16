import NavBar from "./Components/Navbar/Navbar";
import { BodyStyled } from "./Components/Globals/style";
import HeroSection from "./Components/HeroSection/HeroSection";

function App() {
  return (
    <>
      <BodyStyled>
        <NavBar/>
        <HeroSection/>
      </BodyStyled>
    </>
  );
}

export default App;
