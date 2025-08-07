import { SmallDetailValues } from "../atoms/SmallDetailValues"
import { VeryTinyText } from "../atoms/VeryTinyText"

export const PrivacyPolicy = () => {

    return(
        <div style={{
            color:"#81836C",
            lineHeight:"2px"}}>
            <div className="d-flex gap-2">
            <VeryTinyText text="Legal"/>
            <VeryTinyText text="Privacy Policy"/>
            <VeryTinyText text="Cookies"/>
            </div>
            <VeryTinyText text="Don't sell my personal information"/>
           
        </div>
    )
}