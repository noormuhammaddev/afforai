import { Typography } from '@mui/material';
import './SectionHeading.scss';

const SectionHeading = ({
  align,
  subHeading, 
  heading,
  paragraph,
  size,
  linkLabel,
  linkUrl
}) => {
  return (
    <div className={`section-heading ${size} ${align}`} >
      {subHeading && <Typography variant="h3">{subHeading}</Typography> }
      {heading && <Typography variant="h2">{heading}</Typography>}
      {paragraph && 
        <Typography>
          {paragraph} 

          {linkLabel && <a href={linkUrl}>{linkLabel}</a>} 
        </Typography>}
    </div>
  );
}
export default SectionHeading;