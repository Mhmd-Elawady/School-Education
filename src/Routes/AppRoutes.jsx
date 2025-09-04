import { Routes, Route } from 'react-router-dom';
import Home from "../pages/Home";
import About from '../pages/About';
import Academics from '../pages/Academics';
import Admission from '../pages/Admission';
import Contact from '../pages/Contact';
import StudentLife from '../pages/StudentLife';


export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
       <Route path="/academics" element={<Academics />} />
      <Route path="/admissions" element={<Admission />} />
       <Route path="/contact" element={<Contact />} />
      <Route path="/student-life" element={<StudentLife />} />
    </Routes>
  );
}
