import { BlackButton } from "../atoms/BlackButton"
import { BoldTinyText } from "../atoms/BoldTinyText"
import { HeadingTwo } from "../atoms/HeadingTwo"
import { TinyText } from "../atoms/TinyText"
import { TransparentButton } from "../atoms/TransparentButton"

export const SellImageContent=()=>{
return(
    <div>
        <BoldTinyText text="01"/>
        <HeadingTwo text="Sell online with a website"/>
        <TinyText text="Sell anythink from physical products to download and services,"/>
         <TinyText text="and manage it all in one place"/>
        <BlackButton label="Get Started"/>
        <TransparentButton label="Learn More"/>
    </div>
)
}