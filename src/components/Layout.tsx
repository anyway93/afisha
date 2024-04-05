import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
   return (
      <>
         <header>
            {/* <h1>Афиша Воронеж</h1> */}
            <Link className='header-link' to="/">Афиша Воронеж</Link>
            <div className="header-menu">
               <Link to="/sport">Спорт</Link>
               <Link to="/movies">Кино</Link>
               <Link to="/theaters">Театры</Link>
               <Link to="/concerts">Концерты</Link>
               <Link to="/others">Разное</Link>
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