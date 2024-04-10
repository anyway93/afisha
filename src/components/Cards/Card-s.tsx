import '../../styles/component/card-slider/card-slider.css'

interface CardProps {
   title: string;
   image: string;
}

 const CardSlider = ({title, image}: CardProps) => {
   return (
      <>
      <div>
         <div className="slider-card">
            <div className="slider-card-auxblock1">
               <img src={image} alt="" />
            </div>
            <div className="slider-card-auxblock2">
               <span>{title}</span>
            </div>
         </div>
      </div>
      
      </>
      
   )
}

export {CardSlider}