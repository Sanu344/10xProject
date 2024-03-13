import PropertyView from "./components/property list/propertyview";
import Geninfo from "./components/addproperty/genralinfo/generalinfo";
import Locinfo from "./components/addproperty/locationinfo/locationinfo";
import Basinfo from "./components/addproperty/basicinfo/Basicinfo";
import Ppdinfo from "./components/addproperty/property details/pptdinfo";
import Protected from "./components/protected";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/login/login";
import Signup from "./components/signup/signup";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/basic" element={<Protected Page={Basinfo} />} />
          <Route path="/loc" element={<Protected Page={Locinfo} />} />
          <Route path="/gen" element={<Protected Page={Geninfo} />} />
          <Route path="/pptv" element={<Protected Page={PropertyView} />} />
          <Route path="/pptd" element={<Protected Page={Ppdinfo} />} />
          <Route path="/*" element={<Protected Page={PropertyView} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
