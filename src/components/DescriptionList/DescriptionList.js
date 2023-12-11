import { Typography } from '@mui/material';
import './DescriptionList.scss';

const DescriptionList = ({
  icon,
  heading,
  badge,
  DescriptionList
}) => {
  return (
    <div className="description-list">
      <div className="icon"><img src={icon} alt="" /></div>
      <div className="description">
        <Typography variant="h4">
          {heading}
          <span>{badge}</span>
        </Typography>
        <Typography>{DescriptionList}</Typography>
      </div>
    </div>
  )
}
export default DescriptionList;