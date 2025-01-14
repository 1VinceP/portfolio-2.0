import { BrowserRouter } from 'react-router';
import { createRoot } from 'react-dom/client';
import Router from './router';
import './reset.css';
import './index.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";

createRoot(document.getElementById('root')!).render(
   <BrowserRouter>
      <Router />
   </BrowserRouter>,
);
