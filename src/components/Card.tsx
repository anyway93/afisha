interface CardProps {
   title?: string;
   image?: string;
}

 const Card = ({title, image}: CardProps) => {
   return (
      <div className="card">
         <div className="card-auxblock1">
            <img src={image} alt="" />
         </div>
         <div className="card-auxblock2">
            <span>{title}</span>
         </div>
      </div>
   )
}

export {Card}