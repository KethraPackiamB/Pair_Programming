import logo from './logo.svg';
import './App.css';

import { SearchBox } from './ui/atoms/SearchBox';
import { SearchButton } from './ui/atoms/SearchButton';
import { BodyPageImages } from './ui/molecules/BodyPageImages';
import { BoldTinyText } from './ui/atoms/BoldTinyText';
import { BannerContent } from './ui/molecules/BannerContent';
import { SideBanner } from './ui/molecules/SideBanner';
import { SellImageContent } from './ui/molecules/sellImageContent';
import { SuccessImageContent } from './ui/molecules/SuccessImageContent';
import { SaveImageContent } from './ui/molecules/SaveImageContent';
import { HeaderPage } from './modules/HeaderPage';
import { ImageBanner } from './ui/molecules/ImageBanner';



function App() {
  return (
    <div>
      {/* <HeaderNavbar/> */}
      {/* <SearchBox/> */}
      {/* <SearchButton/> */}

      <BodyPageImages/>
      <SellImageContent/>
      <SuccessImageContent/>
      <SaveImageContent/>

      {/* <BoldTinyText/> */}
      {/* <BannerContent/> */}
      {/* <SideBanner/> */}



      <HeaderPage/>
      {/* <ImageBanner/> */}
      

    
    </div>
  );
}

export default App;
