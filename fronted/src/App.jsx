import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Home from './Pages/Home.jsx';
import NotFound from "./Pages/NotFound.jsx";
import Success from "./Pages/Success.jsx";
const App = () => {

   return (
      <div>
         <Router>
            <Toaster />
            <Routes>
               <Route path='/' element={<Home />} />
               <Route path='/success' element={<Success />} />
               <Route path='*' element={<NotFound />} />
            </Routes>
         </Router>
      </div>
   )
}

export default App
