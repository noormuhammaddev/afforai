import Box from '@mui/system/Box';
import DealLabel from "../components/DealLabel/DealLabel";
import PageTitle from '../components/PageTitle/PageTitle';
import FeaturesBlock from '../components/FeaturesBlock/FeaturesBlock';

const Home = () => {
  return (
    <div className="container">
      <Box sx={{padding: '24px 0'}}>
        <DealLabel />
        <PageTitle 
          title = "Your second brain for maximizing productivity"
          description = "Afforai is an AI chatbot that searches, summarizes, and translates info from multiple sources to produce trustworthy research. Feed lengthy research documents to stacks of dry compliance requirements and extract the key findings you need."
        />

        <FeaturesBlock />
      </Box>
    </div>
  )
}
export default Home;