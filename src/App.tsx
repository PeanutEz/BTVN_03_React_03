import { Routes, Route } from "react-router-dom";
import DemoUseState from "./pages/UseState_Demo";
import UnionTypesDemo from "./pages/UnionTypes_Demo";
import InterfaceAndTypeDemo from "./pages/InterfaceAndType_Demo";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/demo-usestate" element={<DemoUseState />} />
      <Route path="/demo-uniontypes" element={<UnionTypesDemo />} />
      <Route path="/demo-interfaceandtype" element={<InterfaceAndTypeDemo />} />
    </Routes>
  );
}

export default App;