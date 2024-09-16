import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import CreateForm from "./components/pages/CreateForm";
import Header from "./components/pages/Header";
import LandingPage from "./components/pages/LandingPage";
import FormModel from "./components/pages/FormModel";
import TextEditorQuill from "./components/pages/TextEditorQuill";
 import Responses from "./components/pages/Responses"
import FormOptions from "./components/pages/FormOptions";
import MainCard from "./components/pages/MainCard";
import SectionAppBar from "./components/pages/SectionAppBar";
import MainForm from "./components/pages/MainForm";
import FormContainer from "./components/pages/FormContainer";
import FormModule from "./components/pages/FormModule";
function App() {
  return (
    <div className="App">
     
      <Routes>
    <Route path='/' element={<LandingPage/>}/>
   <Route path='/Createform' element={<CreateForm/>}/>
   <Route path='/addform' element={<FormContainer/>}/>
   <Route path='/formcreation' element={<FormModule/>}/>
<Route path='/responses' element={<Responses/>}/>
   <Route path="/texteditor" element={<TextEditorQuill/>}/>
     </Routes>
    
    </div>
  );
}

export default App;
