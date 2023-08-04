import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import CreatePlanPage from '../pages/CreatePlanPage';
const Root = () => {
  return (
   <BrowserRouter>
       <Routes>
         <Route path='/' element={<HomePage />} />
         <Route path="/home" element={<HomePage />} /> 
         <Route path="/about" element={<AboutPage />} /> 
         <Route path='/createplan' element={<CreatePlanPage />} />
      </Routes>
   </BrowserRouter>
  )
}

export default Root
