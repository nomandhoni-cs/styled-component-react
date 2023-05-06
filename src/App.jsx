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

function App() {
  const [count, setCount] = useState(0);
  const backgroundColor = {
    dark: "#393939",
    light: "#f9f9f9ff",
  };
  const [theme, setTheme] = useState(true);

  return (
    <>
      <Container
        backgroundColor={theme ? backgroundColor.dark : backgroundColor.light}
      >
        <Nav>
          <button onClick={() => setTheme(!theme)}>
            {theme ? "Light" : "Dark"}
          </button>
        </Nav>
        <HeroBanner>
          <Halfgrid>
            <Tag color={theme ? backgroundColor.light : backgroundColor.dark}>
              Learning Styled Components
            </Tag>
          </Halfgrid>
          <Halfgrid>
            <Image src={Banner} />
          </Halfgrid>
        </HeroBanner>
        <HeroBanner>
        <Tag color={theme ? backgroundColor.light : backgroundColor.dark}>
          Vite + React
        </Tag>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <Paragraph
            color={theme ? backgroundColor.light : backgroundColor.dark}
          >
            Edit <code>src/App.jsx</code> and save to test HMR
          </Paragraph>
        </div>
        <Paragraph color={theme ? backgroundColor.light : backgroundColor.dark}>
          Click on the Vite and React logos to learn more
        </Paragraph>
        </HeroBanner>
      </Container>
    </>
  );
}

export default App;
