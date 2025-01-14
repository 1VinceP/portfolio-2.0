import { Routes, Route } from 'react-router';
import App from '../App';
import { Home } from '../views/Home';
import { Projects } from '../views/Projects';
import { About } from '../views/About';
import { Contact } from '../views/Contact';

const Router = () => (
   <Routes>
      <Route path="/" element={<App />}>
         <Route index element={<Home />} />
         <Route path="/about" element={<About />} />
         <Route path="/projects" element={<Projects />} />
         <Route path="/contact" element={<Contact />} />
      </Route>
   </Routes>
);

export default Router;
