import React from "react";
import '../styles/mainpage/mainpage.css';
import { Search } from "../components/sections/Search";
import { Sliderblock } from "../components/sections/Sliderblock";
import { Cardblock } from "../components/sections/Cardblock";




const Mainpage: React.FC = () => {
  

  const [searchValue, setSearchValue] = React.useState('');
  console.log(searchValue)

  return (
    <>
    <div className="mg-top">
      <Search searchValue={searchValue} setSearchValue={setSearchValue} />
    </div>
    
    <div className="main-block">
      
    <Sliderblock searchValue={searchValue} />
    <Cardblock searchValue={searchValue}/>

    </div>

      
    </>
  );
}

export { Mainpage };
