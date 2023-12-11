import Box from '@mui/system/Box';
import DealLabel from "../components/DealLabel/DealLabel";
import PageTitle from '../components/PageTitle/PageTitle';
import FeaturesBlock from '../components/FeaturesBlock/FeaturesBlock';
import ContainerSection from '../components/ContainerSection/ContainerSection';
import FeatureMediaText from '../components/FeatureMediaText/FeatureMediaText';
import LaptopLanding4 from '../assets/images/laptop-landing-4.png';
import FeatureTextWithList from '../components/FeatureTextWithList/FeatureTextWithList';
import SectionHeading from '../components/SectionHeading/SectionHeading';
import Grid from '@mui/material/Grid';
import WorkFlowImg from '../assets/images/laptop-landing-5.png';
import ChatScreen from '../assets/images/laptop-landing-11.png';
import LinkButton from '../components/LinkButton/LinkButton';
import AssistanceImg from '../assets/images/laptop-landing-12.png';
import ForwardIcon from '../assets/images/fast-forward.svg';
import DescriptionList from '../components/DescriptionList/DescriptionList';
import PowerOff from '../assets/images/power-off.svg';
import SearchPlus from '../assets/images/search-plus.svg';
import LaptopLanding from '../assets/images/laptop-landing-13.png';
import LaptopLanding14 from '../assets/images/laptop-landing-14.png';
import LaptopLaanding15 from '../assets/images/laptop-landing-15.png';
import Card from '../components/Card/Card';
import LaptopLanding17 from '../assets/images/laptop-landing-17.png';
import LaptopLanding18 from '../assets/images/laptop-landing-18.png';
import LaptopLanding19 from '../assets/images/laptop-landing-19.png';
import PhReview from '../assets/images/ph-review.webp';
import Testimonial from '../components/Testimonial/Testimonial';
import DP from '../assets/images/0-0.webp';
import viewOnProduct from '../assets/images/viewOnProduct.jpg';


const descriptionLists = [
  {
    icon: ForwardIcon,
    heading: 'Fast Mode (default)',
    badgeText: '1 Credit',
    detail: 'Quickly ask a question and receive an answer from the AI. This mode is most suited for applications that require only a small part of the documents to be scanned (ex. FAQ Chatbot, Search).'
  },
  {
    icon: PowerOff,
    heading: 'Powerful Mode',
    badgeText: '4 Credits',
    detail: 'Get answers of extra high quality from the AI. This mode is most suited for applications that require inferences as well as the full documents to be scanned (ex. Textual Data Analysis, Search with Inference, Report Generation).'
  },
  {
    icon: SearchPlus,
    heading: 'Google Mode',
    badgeText: '5 Credits',
    detail: 'Supplement your answers with the top 3 results from Google Search. This adds extra reliability to back up our already incredibly accurate answers.'
  }
]

const testimonialData = [
  {
    message: 'AMAZING PRODUCT!, especially for low-tech but love new tech person like me!! Used it to craft emails because I spend wayyy too much time writing.',
    userImg: DP,
    userName: 'Thuy Nguyen, CEO Assistance',
    userActionImg: viewOnProduct,
    link: 'https://www.google.com'
  },
  {
    message: 'I have signed up and starting testing Afforai Ask for my next project business model, and I have had a great experience so far. It has been exactly what I needed with its fast response times. For now, I am considering purchasing the Afforai - Lite Plan.',
    userImg: DP,
    userName: 'Bayu Wilanda, Web & App Developer',
    userActionImg: viewOnProduct,
    link: 'https://www.google.com'
  },
  {
    message: 'AMAZING PRODUCT!, especially for low-tech but love new tech person like me!! Used it to craft emails because I spend wayyy too much time writing.',
    userImg: DP,
    userName: 'Thuy Nguyen, CEO Assistance',
    userActionImg: viewOnProduct,
    link: 'https://www.google.com'
  },
  {
    message: 'I have signed up and starting testing Afforai Ask for my next project business model, and I have had a great experience so far. It has been exactly what I needed with its fast response times. For now, I am considering purchasing the Afforai - Lite Plan.',
    userImg: DP,
    userName: 'Bayu Wilanda, Web & App Developer',
    userActionImg: viewOnProduct,
    link: 'https://www.google.com'
  },
  {
    message: 'AMAZING PRODUCT!, especially for low-tech but love new tech person like me!! Used it to craft emails because I spend wayyy too much time writing.',
    userImg: DP,
    userName: 'Thuy Nguyen, CEO Assistance',
    userActionImg: viewOnProduct,
    link: 'https://www.google.com'
  },
  {
    message: 'I have signed up and starting testing Afforai Ask for my next project business model, and I have had a great experience so far. It has been exactly what I needed with its fast response times. For now, I am considering purchasing the Afforai - Lite Plan.',
    userImg: DP,
    userName: 'Bayu Wilanda, Web & App Developer',
    userActionImg: viewOnProduct,
    link: 'https://www.google.com'
  },
]

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

        <ContainerSection childern={
          <>
            <SectionHeading 
              align="center"
              subHeading="10x your productivity"
              heading="Save yourself from stress & streamline your workflow"
              paragraph="The average worker spends 9 hours per week looking through & gathering information from thick stacks of documents. With Afforai, you can save yourself 8 hours per week (plus a lot of headaches)."
            />

            <Box sx={{maxWidth: '75%', margin: '0 auto'}}>
              <img src={WorkFlowImg} width="100%" alt="WorkFlowImg" />
            </Box>
          </>
        }>
        </ContainerSection>

        <ContainerSection childern={
          <>
            <SectionHeading 
              align="center"
              subHeading="Why choose us?"
              heading="Built for the user"
              paragraph="Afforai is where exceptional customer focus meets exceptional technology."
              size="sm"
            />
          </>
        }>
        </ContainerSection>

        <ContainerSection childern={
          <>
            <FeatureMediaText 
              media={ChatScreen}
              detail={
                <>
                  <SectionHeading 
                    subHeading="Most versatile"
                    heading="Create multiple chatbots for different purposes"
                    paragraph="Legal documents? Summarising a book? Extracting data from a website? We allow you to create multiple chatbots at one time, so you can use Afforai for a whole range of purposes."
                    size="sm"
                  />
                  
                  <Box sx={{display: 'flex', gap: '30px'}}>
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
                </>
              }
            />
          </>
        }>
        </ContainerSection>

        <ContainerSection childern={
          <>
            <FeatureMediaText 
              media={AssistanceImg}
              mediaAlign= "left"
              detail={
                <>
                  <SectionHeading 
                    subHeading="Different Modes Available"
                    heading="Customize your assistant with a range of different modes"
                    paragraph="Further power your questions with additional modes. Afforai allows you to switch between three different modes, each which have unique ways of utilising our AI tools to answer your question(s)."
                    size="full"
                  />
                  
                  {
                    descriptionLists.map((item, index) => (
                      <DescriptionList 
                        key = {index}
                        icon = {item.icon}
                        heading = {item.heading}
                        badge = {item.badgeText}
                        DescriptionList = {item.detail}
                      />
                    ))
                  }
                </>
              }
            />
          </>
        }>
        </ContainerSection>

        <ContainerSection childern={
          <>
            <FeatureMediaText 
              media={LaptopLanding}
              mediaAlign= "right"
              detail={
                <>
                  <SectionHeading 
                    subHeading="Multiple Language Supported"
                    heading="Regardless of where you are from, Afforai is for you"
                    paragraph="We support more than 100 Languages, meaning you can seamlessly use our services regardless of where you are from. Our Cross Language Querying feature also allows flawless translation of documents."
                  />
                  
                </>
              }
            />
          </>
        }>
        </ContainerSection>

        
        <ContainerSection childern={
          <>
            <FeatureMediaText 
              media={LaptopLanding14}
              mediaAlign= "left"
              detail={
                <>
                  <SectionHeading 
                    subHeading="Get more out of your files"
                    heading="File Wizard - a game changing new feature"
                    paragraph="Convert your files with less effort than ever. Afforai’s File Wizard feature allows you to transform your files, in limitless different ways. We can translate, summarize, or explain your upload in no time."
                  />
                </>
              }
            />
          </>
        }>
        </ContainerSection>

        <ContainerSection childern={
          <>
            <SectionHeading 
              align="center"
              subHeading="Seamless Integrations - Coming Soon"
              heading="FUpload Files directly from Google Drive, One Drive & Dropbox"
              paragraph="Afforai allows you to upload files directly from Google Drive, One Drive & Dropbox, meaning your experience will be smooth sailing regardless of your preferred"
            />

            <Box sx={{maxWidth: '616px', margin: '0 auto'}}>
              <img src={LaptopLaanding15} alt="" width="100%" />
            </Box>
          </>
        }>
        </ContainerSection>

        <ContainerSection childern={
          <>
            <SectionHeading 
              align="center"
              heading="Unquestionable accuracy & reliability"
              paragraph="We pride ourselves on the quality of our chatbot’s responses, and go the extra mile to ensure the accuracy & reliability of our answers."
            />

            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                  <Card 
                    img={LaptopLanding17}
                    heading="Trusted by users all over the World"
                    description="Afforai is used all around the World, saving thousands of people time and money with our speed & accuracy."
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <Card 
                    img={LaptopLanding18}
                    heading="Information filtering"
                    description="Afforai gives you the highest quality answers, and filters out any irrelevant information."
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <Card 
                    img={LaptopLanding19}
                    heading="Built in Comprehension Model"
                    description="Our powerful comprehension model increases the power of our data retrieval."
                  />
                </Grid>
              </Grid>
            </Box>
          </>
        }>
        </ContainerSection>
      
        <ContainerSection childern={
          <>
            <Box sx={{textAlign: 'center'}}>
              <img src={PhReview} alt="" />
            </Box>

            <SectionHeading 
              align="center"
              heading="See what our users say"
              paragraph="Loved by thousands, all around the World"
            />

            <Testimonial 
              data = {testimonialData}
            />
          </>
        }>
        </ContainerSection>
      
      
      </Box>
    </div>
  )
}
export default Home;