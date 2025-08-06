import { BlackButton } from "../atoms/BlackButton";
import { BoldTinyText } from "../atoms/BoldTinyText";
import { HeadingTwo } from "../atoms/HeadingTwo";
import { TinyText } from "../atoms/TinyText";
import { TransparentButton } from "../atoms/TransparentButton";
import { SaveImage } from "../atoms/SaveImage";

export const SaveImageContent=()=>{
return(
    <div className="mt-5">
        <SaveImage/>
        <BoldTinyText text="03"/>
        <HeadingTwo text="Sell in-person and on the go"/>
        <div >
        <TinyText text="Our nwe ponit of sale devices are designed to fit any bussiness and"/>
        <TinyText text="nusget.choose the one that's right you."/>
        </div>
        <BlackButton label="Learn More"/>
    </div>
)
}