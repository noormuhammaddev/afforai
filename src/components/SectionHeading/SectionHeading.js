import { Typography } from '@mui/material';
import './SectionHeading.scss';

const SectionHeading = ({
  align,
  subHeading, 
  heading,
  paragraph,
  size
}) => {
  return (
    <div className={`section-heading ${size} ${align}`} >
      {subHeading && <Typography variant="h3">{subHeading}</Typography> }
      {heading && <Typography variant="h2">{heading}</Typography>}
      {paragraph && <Typography>{paragraph}</Typography>}
    </div>
  );
}
export default SectionHeading;