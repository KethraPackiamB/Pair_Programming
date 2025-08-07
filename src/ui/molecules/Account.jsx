import { BoldTinyText } from "../atoms/BoldTinyText"
import { VeryTinyText } from "../atoms/VeryTinyText"

export const Account = () => {
    
    return(
        <div className="px-5">
            <BoldTinyText text="Account"/>
            <VeryTinyText text="My Products"/>
            <VeryTinyText text="Renewals & Billing"/>
            <VeryTinyText text="Create Account"/>
        </div>

    )
}