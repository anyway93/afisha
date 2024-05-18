import { useLocation } from 'react-router-dom';
import { Cardblock } from '../components/sections/Cardblock';

import '../styles/genreblock/genreblock.css'

const GenreBlock = () => {
   const location = useLocation();
   const queryParams = new URLSearchParams(location.search);
   const title = queryParams.get('title');
   const image = queryParams.get('image');

   return (
      <>
      <div className='genreblock-container'>
         {image ? (
            <img src={image} />
         ) : (
            <p>No image provided</p>
         )}
         <div className="content-block">
            <div className="text-block">
               <h1>{title ? title : 'No title provided'}</h1>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit quia error possimus vitae, quo tempore! Aspernatur provident autem illum beatae nihil iusto, ut minus sit eum quia, nisi fugiat inventore? Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis necessitatibus, labore aut alias obcaecati dignissimos sit doloribus nisi aperiam praesentium qui quisquam possimus cumque, nam et repudiandae magnam fugiat laborum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore architecto cum, dolorem, aut ullam blanditiis consequatur temporibus veniam eius beatae fuga laudantium hic. Nemo eveniet iusto quaerat quis eos ipsam.</p>
            </div>
            <div className="div-button">
               <button>Купить</button>
            </div>
         </div>
      </div>

      </>
   );
};

export { GenreBlock };