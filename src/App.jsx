import { useState } from "react";
import "./App.css";
import Container from "./Components/Styles/Container.styles";
import Image from "./Components/Styles/Image.styles";
import Banner from "./assets/images/banner.png";
import Tag from "./Components/Styles/Tag.styles";

function App() {
  const [count, setCount] = useState(0);


  return (
    <>
      <Container backgroundColor="#393939">
        <Tag>Learning Styled Components</Tag>
        <Image src={Banner} />
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      </Container>
    </>
  );
}

export default App;
