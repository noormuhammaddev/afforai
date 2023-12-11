import './LinkButton.scss';
import Link from '@mui/material/Link';

const LinkButton = ({variant, label, url, size}) => {
  let buttonClass = ''; // Default class for the button

  // Apply different variants based on the prop passed
  switch (variant) {
    case 'primary':
      buttonClass = 'button-primary';
      break;
    case 'grey':
      buttonClass = 'button-grey';
      break;
    case 'primary-outlined':
      buttonClass = 'button-primary-outlined';
      break;
    // Add more cases for other variants as needed
    default:
      buttonClass = 'button-default';
  }

  return (
    <Link class={`btn ${size} ${buttonClass}`} href={url}>{label}</Link>
  )
}
export default LinkButton;