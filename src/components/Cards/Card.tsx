import '../../styles/component/card-block/card-block.css'

interface CardProps {
   title: string;
   image: string;
}

 const Card = ({title, image}: CardProps) => {
   return (
      <>
      <div>
         <div className="card">
            <div className="card-auxblock1">
               <img src={image} alt="" />
            </div>
            <div className="card-auxblock2">
               <span>{title}</span>
            </div>
         </div>
      </div>
      
      </>
      
   )
}

export {Card}