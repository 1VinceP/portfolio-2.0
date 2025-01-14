import { Outlet } from "react-router";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import $styles from './app.module.css';

function App() {
   return (
      <div className={$styles.app}>
         <Header />
         <Outlet />
         <Footer />
      </div>
   );
}

export default App
