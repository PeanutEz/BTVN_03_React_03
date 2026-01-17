import { Routes, Route } from "react-router-dom";
import DemoUseState from "./pages/UseState_Demo";
import Home from "./pages/Home";
import TypeAnnotationDemo from "./pages/TypeAnnotation_Demo";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/demo-usestate" element={<DemoUseState />} />
      <Route path="/demo-type-annotation" element={<TypeAnnotationDemo />} />
    </Routes>
  );
}

export default App;