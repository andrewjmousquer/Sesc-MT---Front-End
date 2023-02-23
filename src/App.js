import { BrowserRouter } from "react-router-dom";
import { Router } from "./routes/Router";
import "./App.scss";
import Hero from "./pages/Home/Hero";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Router/>
        <Hero />
      </BrowserRouter>
    </div>
  );
}

export default App;
