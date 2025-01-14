import { Outlet, useLocation } from "react-router";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import $styles from './app.module.css';
import { useEffect } from "react";

function App() {
   const location = useLocation();

   useEffect(() => {
      window.scrollTo(0, 0);
   }, [location]);

   return (
      <div className={$styles.app}>
         <Header />
         <Outlet />
         <Footer />
      </div>
   );
}

export default App
