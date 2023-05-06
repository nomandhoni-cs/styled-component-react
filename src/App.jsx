import { useState } from "react";
import "./App.css";
import Container from "./Components/Styles/Container.styles";
import Image from "./Components/Styles/Image.styles";
import Banner from "./assets/images/banner.png";
import Tag from "./Components/Styles/Tag.styles";
import Nav from "./Components/Styles/Nav.styles";
import HeroBanner from "./Components/Styles/Herobanner.styles";
import Halfgrid from "./Components/Styles/Halfgrid.styles";
import Paragraph from "./Components/Styles/Paragraph.styles";
import { ThemeProvider } from "styled-components";

function App() {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState(true);
  const defultTheme = {
    fg: "#ffffff",
    bg: "#074232e3",
  };
  const invertTheme = () => ({
    fg: "#ffffff",
    bg: "#747bff",
  });

  return (
    <>
      <ThemeProvider theme={theme ? defultTheme : invertTheme}>
        <Container>
          <Nav>
            <button onClick={() => setTheme(!theme)}>
              {theme ? "Purple" : "Green"}
            </button>
          </Nav>
          <HeroBanner>
            <Halfgrid>
              <Tag>Learning Styled Components</Tag>
            </Halfgrid>
            <Halfgrid>
              <Image src={Banner} />
            </Halfgrid>
          </HeroBanner>
          <HeroBanner>
            <Tag>Vite + React</Tag>
            <div className="card">
              <button onClick={() => setCount((count) => count + 1)}>
                count is {count}
              </button>
              <Paragraph>
                Edit <code>src/App.jsx</code> and save to test HMR
              </Paragraph>
            </div>
            <Paragraph>
              Click on the Vite and React logos to learn more
            </Paragraph>
          </HeroBanner>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
