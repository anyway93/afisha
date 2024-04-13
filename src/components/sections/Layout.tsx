import { Link, Outlet, useLocation } from 'react-router-dom';

const Layout = () => {

   const location = useLocation();

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