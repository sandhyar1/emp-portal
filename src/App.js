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

     {/* <BrowserRouter>
      <Routes> */}
       <Header />
        {/* <Route exact path="/"  element={<EmpLogin /> } /> */}
         {/* <Route exact path="/header" element={<Header />} > */}
         {/* <Route exact path="/corousel" element={<Corousel />} />
         <Route exact path="/unitnews" element={ <UnitNews />} />
          <Route exact path="/contactForm" element={<ContactForm />} />
          <Route exact path="/ceoConnect" element={<CeoConnect />} />
          <Route exact path="/footer" element={<Footer />} />
         </Route> */}
         
          {/* <Route exact path="*" element= {<NoPage />} /> */}

         
     {/* </Routes>
     </BrowserRouter>  */}

    </>
  )

}


export default App;
