import logo from './logo.svg';
import './App.css';

import { SearchBox } from './ui/atoms/SearchBox';
import { SearchButton } from './ui/atoms/SearchButton';
import { BoldTinyText } from './ui/atoms/BoldTinyText';
import { BannerContent } from './ui/molecules/BannerContent';
import { SideBanner } from './ui/molecules/SideBanner';
import { SellImageContent } from './ui/molecules/sellImageContent';
import { SuccessImageContent } from './ui/molecules/SuccessImageContent';
import { SaveImageContent } from './ui/molecules/SaveImageContent';
import { HeaderPage } from './modules/HeaderPage';
import { ImageBanner } from './ui/molecules/ImageBanner';

import { InformationTable } from './ui/molecules/InformationTable';
import { SignUpBlackTheme } from './ui/atoms/SignUpBlackTheme';

import { SectionPage } from './modules/SectionPage';
import { GoDaddy } from './pages/GoDaddy';
import { SectionImages } from './ui/molecules/SectionImages';
import { SectionContent } from './modules/SubSectionPage';



function App() {
  return (
    <div>
      {/* <HeaderNavbar/> */}
      {/* <SearchBox/> */}
      {/* <SearchButton/> */}

      {/* <SectionPage/> */}

      {/* <BoldTinyText/> */}
      {/* <BannerContent/> */}
      {/* <SideBanner/> */}

      {/* <HeaderPage/> */}
      {/* <ImageBanner/> */}
      {/* <InformationTable/> */}
      {/* <SignUpBlackTheme/> */}
      <SectionContent/>



      {/* <HeaderPage/> */}
      {/* <ImageBanner/> */}
      {/* <GoDaddy/> */}
      


    
    </div>
  );
}

export default App;
