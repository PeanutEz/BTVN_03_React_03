import { Routes, Route } from "react-router-dom";
import DemoUseState from "./pages/UseState_Demo";
import UnionTypesDemo from "./pages/UnionTypes_Demo";
import InterfaceAndTypeDemo from "./pages/InterfaceAndType_Demo";
import EnumDemo from "./pages/Enum_Demo";
import UseEffectDemo from "./pages/UseEffect_Demo";
import Home from "./pages/Home";
import UseReducer_Demo from "./pages/useReducer";
import UseRef_Demo from "./pages/UseRef_Demo";
import UseMemo_Demo from "./pages/UseMemo_Demo";



function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/demo-usestate" element={<DemoUseState />} />
      <Route path="/demo-uniontypes" element={<UnionTypesDemo />} />
      <Route path="/demo-interfaceandtype" element={<InterfaceAndTypeDemo />} />
      <Route path="/demo-enum" element={<EnumDemo />} />
      <Route path="/demo-useeffect" element={<UseEffectDemo />} />
      <Route path="/use-reducer" element={<UseReducer_Demo />} />
      <Route path="/demo-useref" element={<UseRef_Demo />} />
      <Route path="/demo-usememo" element={<UseMemo_Demo />} />
    </Routes>
  );
}

export default App;