import { useState } from "react";
import "./App.css";
import Button from "./Components/Button";
import Counter from "./Components/Counter";
import Slider from "./Components/Slider";

function App() {
  const [theme, setTheme] = useState("light");
  return (
    <div className="App">
      <h1>Theme is {theme}</h1>
      <Button
        colorScheme={"crimson"}
        variant={"outline"}
        // onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        onClick={() =>
          theme === "light" ? setTheme("dark") : setTheme("light")
        }
      >
        Click Me
      </Button>

      <hr />

      <Counter />

      <hr />
      <Slider />
    </div>
  );
}

export default App;
