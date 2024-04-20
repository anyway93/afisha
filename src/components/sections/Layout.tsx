import { Link, Outlet, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Layout = () => {
   const location = useLocation();
   const [currentTime, setCurrentTime] = useState(new Date());

   useEffect(() => {
      const timerID = setInterval(() => tick(), 1000);
      return () => clearInterval(timerID); // Очистка таймера при размонтировании компонента
   }, []);

   const tick = () => {
      setCurrentTime(new Date());
   };

   return (
      <>
         <header>
            <Link className='header-link' to="/">Афиша Воронеж</Link>
            <div className="header-menu">
               <Link to="/sport" className={location.pathname === '/sport' ? 'active' : ''}>Спорт</Link>
               <Link to="/movies" className={location.pathname === '/movies' ? 'active' : ''}>Кино</Link>
               <Link to="/theaters" className={location.pathname === '/theaters' ? 'active' : ''}>Театры</Link>
               <Link to="/concerts" className={location.pathname === '/concerts' ? 'active' : ''}>Концерты</Link>
               <Link to="/others" className={location.pathname === '/others' ? 'active' : ''}>Разное</Link>
            </div>
            
            <h3 className="date" id='date_time'>{currentTime.toLocaleString()}</h3>
         </header>

         <main className="container">
            <Outlet />
         </main>

         <footer>
            
         </footer>
      </>
   )
}

export { Layout }
