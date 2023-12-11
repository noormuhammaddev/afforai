import ChecklistItem from '../ChecklistItem/ChecklistItem';
import Box from '@mui/material/Box';
import './FeaturesBlock.scss';
import LinkButton from '../LinkButton/LinkButton';
import LaptopScreen from '../../assets/images/laptop-landing-1.png';
import UserShowCase from '../UserShowCase/UserShowCase';


const FeaturesBlock = () => {
  const checkListItems = [
    'Summarize Key Findings',
    'Compare Between Documents',
    'Search For Answers',
    'Ask in Any Language'
  ];

  return (
    <>
      <div className="features-block-wrapper">
        <div className="feature-checklist">
          {
            checkListItems.map((item, index) => (
              <ChecklistItem label={item} key={index} />
            ))
          }
        </div>

        <Box className="btn-wrapper">
          <LinkButton 
            variant="primary"
            label="Try for free"
            url="/"
            size="md"
          />

          <LinkButton 
            variant="grey"
            label="View Pricing"
            url="/"
            size="md"
          />
        </Box>
      </div>

      <div className="laptop-screen">
        <img src={LaptopScreen} alt="LaptopScreen"/>
      </div>
          
      <UserShowCase />
      
    </>
    
  )
}
export default FeaturesBlock;