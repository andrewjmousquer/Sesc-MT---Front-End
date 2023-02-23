import { Routes, Route } from "react-router-dom";
import Menu from "../pages/Home";

import { Services } from "../pages/Services";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Menu />} />
      <Route path="/servicos" element={<Services />} />
    </Routes>
  );
}


// element se tornar HOME adicionando todos os componentes de sua pasta criando um INDEX
