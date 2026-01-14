import { Routes, Route } from "react-router-dom";
import DemoUseState from "./pages/UseState_Demo";

function App() {
  return (
    <Routes>
      <Route path="/demo-useState" element={<DemoUseState />} />
    </Routes>
  );
}

export default App;