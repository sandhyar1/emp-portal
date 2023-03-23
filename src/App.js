import React from 'react';
import  'bootstrap/dist/css/bootstrap.css';
import EmpLogin from './Components/EmpLogin';
 import { BrowserRouter ,Routes,Route} from 'react-router-dom';
  import Header from './Components/Header';
import UnitNews from "./Components/UnitNews";
import CeoConnect from "./Components/CeoConnect";
import ContactForm from "./Components/ContactForm";
 import NoPage from "./Components/NoPage";
import Footer from "./Components/Footer";
import Corousel from './Components/Corousel';


function App() {






  return (
     <>

     <BrowserRouter>
      <Routes>
      
        <Route exact path="/"  element={<EmpLogin /> } />
         <Route exact path="/Home" element={
         <>
         <Header />,
         <Corousel />,
         <UnitNews />,
         <ContactForm />,
         <CeoConnect />,
         <Footer />,
         <NoPage />,
         </>
      }
      />
         
     </Routes>
     </BrowserRouter> 

    </>
  )

}


export default App;
