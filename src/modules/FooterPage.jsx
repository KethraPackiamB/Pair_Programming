import { FooterCopyright } from "../ui/molecules/FooterCopyright"
import { FooterTop } from "../ui/molecules/FooterTop"
import { FooterSection } from "../ui/organisms/FooterSection"

export const FooterPage = () => {

    return(
        <div style={{background:"#000000",color:"#ffffff"}}>
            <FooterTop/>
            <FooterSection/>
            <FooterCopyright/>
        </div>
    )
}