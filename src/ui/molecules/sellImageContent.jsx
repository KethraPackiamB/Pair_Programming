import { BlackButton } from "../atoms/BlackButton";
import { BoldTinyText } from "../atoms/BoldTinyText";
import { HeadingTwo } from "../atoms/HeadingTwo";
import { TinyText } from "../atoms/TinyText";
import { TransparentButton } from "../atoms/TransparentButton";
import {SellImage} from "../atoms/SellImage";


export const SellImageContent=()=>{
return(
    <div>
        <SellImage/>
        <BoldTinyText text="01"/>
        <HeadingTwo text="Sell online with a website"/>
        <TinyText text="Sell anythink from physical products to download and services,"/>
        <TinyText text="and manage it all in one place"/>
        <div className="d-flex gap-3">
        <BlackButton label="Get Started"/>
        <TransparentButton label="Learn More"/>
        </div>
    </div>
)
}