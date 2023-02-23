import { BrowserRouter } from "react-router-dom";
import { Router } from "./routes/Router";
import "./App.scss";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Router/>
      </BrowserRouter>
    </div>
  );
}

export default App;
