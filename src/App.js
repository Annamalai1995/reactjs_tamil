
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SamplebootstrapExample } from "./BootstrapSample";

import { Parameter } from "./ParameterComponent";
import { TernaryOperator } from "./TernaryOperator";
import { FirstHook } from "./UseStateExample";
import { UseState2 } from "./UseStateNumber";
import Fun1, { Orderlist, Table1 } from "./function";
import { Usingobotstrap } from "./usingBootstrap";
import { Mainpage } from "./Mainpage";
// import { Mainpage } from "./HomePage";



function App() {
  return (
   <>
   {/* <Fun1/>
   <Orderlist/>
   <Table1/>
   <UseState2/>
   <FirstHook/> */}
   {/* <SamplebootstrapExample/>
   <Usingobotstrap/> */}
   {/* <TernaryOperator/> */}
   {/* <Parameter where="./sam.jpeg"uyram="500px" agalam="200px"/> */}

{/* <BrowserRouter>

<Mainpage/>
<Routes>
  <Route path="Update" exact element={<Table1/>}/>
  <Route path="Create" exact element={<h1>haii hello</h1>}/>

</Routes>
</BrowserRouter> */}
<Mainpage/>


   </>
  );
}

export default App;
