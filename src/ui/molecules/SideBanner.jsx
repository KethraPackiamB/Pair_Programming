import { VeryTinyText } from "../atoms/VeryTinyText";
import { HeadingTwo } from "../atoms/HeadingTwo";
import { TinyText } from "../atoms/TinyText";
import { BlackButton } from "../atoms/BlackButton";
import { BoldTinyText } from "../atoms/BoldTinyText";

export const SideBanner = () => {

    return(
        <div>
            <div style={{
                background:"#D8EFEF",
                maxWidth:"100%",
                padding:"51px",
                borderRadius: "3px",
                }}>
            <BoldTinyText text="Domain Names"/>
            <HeadingTwo text="Grab a .com for just"/>
            <HeadingTwo text="$0.01*/1st year"/>
            <TinyText text="2-year purchase required*"/>
            <BlackButton label="Find Your Domain"/>
            <TinyText text="Transfer Your Domains"/>
            <VeryTinyText text="Domains include free privacy protection forever*"/>
            </div>
           
        </div>
    )
}