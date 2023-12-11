import './PageTitle.scss';

import { Typography } from '@mui/material';

const PageTitle = ({
  title,
  description,
}) => {
  return (
    <>
      <div className="page-title">
        <Typography variant="h1">{title}</Typography>
        {
          description && <Typography >{description}</Typography> 
        }
      </div>
    </>
  )
}
export default PageTitle;