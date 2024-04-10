import React from 'react'


interface SearchProps {
   searchValue: string;
   setSearchValue: React.Dispatch<React.SetStateAction<string>>;
 }
 
export const Search: React.FC<SearchProps> = ({ searchValue, setSearchValue }) => {
   return (
      <div className="search-block">
         <input 
         onChange={event => setSearchValue(event.target.value)} 
         value={searchValue}
         type="text" 
         placeholder='Что будем искать?'
         />
         <div className="button-block">
            <button></button>
         </div>
      </div>
   )
};

