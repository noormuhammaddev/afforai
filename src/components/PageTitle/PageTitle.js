import './PageTitle.scss';

import { Typography } from '@mui/material';

const PageTitle = ({
  title,
  description,
}) => {
  return (
    <>
      <div className="page-title">
        <Typography align="center" variant="h1">{title}</Typography>
        {
          description && <Typography align="center">{description}</Typography> 
        }
      </div>
    </>
  )
}
export default PageTitle;