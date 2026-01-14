import { Routes, Route } from "react-router-dom";
import DemoUseState from "./pages/UseState_Demo";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/demo-useState" element={<DemoUseState />} />
    </Routes>
  );
}

export default App;