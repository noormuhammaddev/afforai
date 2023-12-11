import Box from '@mui/system/Box';
import DealLabel from "../components/DealLabel/DealLabel";
import PageTitle from '../components/PageTitle/PageTitle';
import FeaturesBlock from '../components/FeaturesBlock/FeaturesBlock';
import ContainerSection from '../components/ContainerSection/ContainerSection';
import FeatureMediaText from '../components/FeatureMediaText/FeatureMediaText';
import LaptopLanding4 from '../assets/images/laptop-landing-4.png';
import FeatureTextWithList from '../components/FeatureTextWithList/FeatureTextWithList';

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

        <ContainerSection childern={
          <>
            <FeatureMediaText 
              media={LaptopLanding4}
              detail={<FeatureTextWithList />}
            />
          </>
        }>
          
        </ContainerSection>
      </Box>
    </div>
  )
}
export default Home;