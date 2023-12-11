import { Typography } from '@mui/material';
import TickIcon from '../../assets/images/check-circle.svg';
import './FeatureTextWithList.scss';

const ListItems = [
  'A whip smart research assistant',
  'We speak every language',
  'Reliable data citation for answers',
  'Fort-Knox level data security',
];

const FeatureTextWithList = () => {
  return (
    <div className="featured-text">
      <Typography variant="h2">Say goodbye to long, tiresome documents</Typography>
      <Typography>Afforai seamlessly translates documents, files, spreadsheets & websites, filtering out what you don’t need & answering your specific questions within seconds.</Typography>

      <ul>
        {
          ListItems.map( (item, index) => (
            <li key={index}><img src={TickIcon} alt="TickIcon" /> {item}</li>
          ))
        }
        <li>

        </li>
      </ul>
    </div>
  );
}
export default FeatureTextWithList;