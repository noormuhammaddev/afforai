import ChecklistItem from '../ChecklistItem/ChecklistItem';
import Box from '@mui/material/Box';
import './FeaturesBlock.scss';
import LinkButton from '../LinkButton/LinkButton';


const FeaturesBlock = () => {
  const checkListItems = [
    'Summarize Key Findings',
    'Compare Between Documents',
    'Search For Answers',
    'Ask in Any Language'
  ];

  return (
    <div className="features-block-wrapper">
      <div className="feature-checklist">
        {
          checkListItems.map((item, index) => (
            <ChecklistItem label={item} key={index} />
          ))
        }
      </div>

      <Box sx={{display: 'flex', justifyContent: 'center', marginTop: '24px', gap: '24px'}}>
        <LinkButton 
          variant="primary"
          label="Try for free"
          url="/"
        />
        <LinkButton 
          variant="grey"
          label="View Pricing"
          url="/"
        />
      </Box>
    </div>
  )
}
export default FeaturesBlock;