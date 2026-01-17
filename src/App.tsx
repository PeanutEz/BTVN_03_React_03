import { Routes, Route } from "react-router-dom";
import DemoUseState from "./pages/UseState_Demo";
import UnionTypesDemo from "./pages/UnionTypes_Demo";
import EnumDemo from "./pages/Enum_Demo";
import UseEffectDemo from "./pages/UseEffect_Demo";
import Home from "./pages/Home";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/demo-usestate" element={<DemoUseState />} />
      <Route path="/demo-uniontypes" element={<UnionTypesDemo />} />
      <Route path="/demo-enum" element={<EnumDemo />} />
      <Route path="/demo-useeffect" element={<UseEffectDemo />} />
    </Routes>
  );
}

export default App;