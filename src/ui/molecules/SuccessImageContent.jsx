import { BlackButton } from "../atoms/BlackButton"
import { BoldTinyText } from "../atoms/BoldTinyText"
import { HeadingTwo } from "../atoms/HeadingTwo"
import { TinyText } from "../atoms/TinyText"
import { TransparentButton } from "../atoms/TransparentButton"

export const SuccessImageContent=()=>{
return(
    <div>
        <BoldTinyText text="02"/>
        <HeadingTwo text="Save eith the lowest fees"/>
        <TinyText text="2.3% + 0$ per in-person transaction."/>
        <TinyText text="2.3% + 30$ per online transaction"/>
        <TinyText text="Enjoy the lowest transaction fees compared to other leading providers"/>
        <BlackButton label=" start Getting paid"/>
        <TransparentButton label="Learn More"/>
    </div>
)
}