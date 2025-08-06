import { BlackButton } from "../atoms/BlackButton"
import { BoldTinyText } from "../atoms/BoldTinyText";
import { TransparentButton } from "../atoms/TransparentButton";
import { HeadingOne} from "../atoms/HeadingOne";
import { TinyText } from "../atoms/TinyText";
import { VeryTinyText } from "../atoms/VeryTinyText";

export const BannerContent = () => {

    return(
        <div>
            <BoldTinyText text="Websites & Commerce"/>
            <HeadingOne text="Tools for all your"/>
            <HeadingOne text="business first"/>
            <TinyText text="Website and Store solutions for any small business."/>
            <div className="d-flex gap-2">
            <BlackButton label="Get Started"/>
            <TransparentButton label="Learn More"/>
            </div>
            <VeryTinyText text="No credit card required**"/>
        </div>
    )
}