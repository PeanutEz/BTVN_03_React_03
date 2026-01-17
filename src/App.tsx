import { Routes, Route } from "react-router-dom";
import DemoUseState from "./pages/UseState_Demo";
import UnionTypesDemo from "./pages/UnionTypes_Demo";
import Home from "./pages/Home";
import UseReducer_Demo from "./pages/useReducer";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/demo-usestate" element={<DemoUseState />} />
      <Route path="/demo-uniontypes" element={<UnionTypesDemo />} />
      <Route path="/use-reducer" element={<UseReducer_Demo />}/>
    </Routes>
  );
}

export default App;