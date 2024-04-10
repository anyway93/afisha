import React, {useState} from "react";
import '../styles/mainpage/mainpage.css';
import { Datesort } from "../components/sections/Datesort";
import { Search } from "../components/sections/Search";
import { Sliderblock } from "../components/sections/Sliderblock";
import { Cardblock } from "../components/sections/Cardblock";




const Mainpage: React.FC = () => {
  

  const [searchValue, setSearchValue] = React.useState('');
  console.log(searchValue)

  return (
    <>
    
    <Search searchValue={searchValue} setSearchValue={setSearchValue} />
    <Datesort />
    <div className="main-block">
      
    <Sliderblock searchValue={searchValue} />
    <Cardblock searchValue={searchValue}/>

    </div>

      
    </>
  );
}

export { Mainpage };
