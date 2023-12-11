import { Typography } from '@mui/material';
import './Card.scss'

const Card = ({
  img, 
  heading,
  description
}) => {
  return (
    <div className="card">
      <div className="card-img">
        <img src={img} alt="" />
      </div>  
      <div className="card-body">
        <Typography variant="h4">{heading}</Typography>
        <Typography>{description}</Typography>
      
      </div>  
    </div>
  )
}
export default Card;