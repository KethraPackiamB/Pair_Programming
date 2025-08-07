import { AboutGoDaddy } from "../molecules/AboutGoDaddy";
import { HelpCenter } from "../molecules/HelpCenter";
import { PartnerPrograms } from "../molecules/PartnerPrograms";
import { Shopping } from "../molecules/Shopping";
import { Account } from "../molecules/Account";
import { Resources } from "../molecules/Resources";
import { Row, Col} from "react-bootstrap";
import { HeadingTwo } from "../atoms/HeadingTwo";
import { DropUpButton } from "../molecules/DropUpButton";
import { Icons } from "../molecules/Icons";

export const FooterSection = () => {

    return(
        <div>
        <div className="container d-flex gap-5" >
            <AboutGoDaddy/>
            <HelpCenter/>
            <Resources/>
            <PartnerPrograms/>
            <Account/>
            <Shopping/>
        </div>
        <div className="container">
        <Row>
            <Col className="d-flex gap-3">
            <HeadingTwo text="GoDaddy"/>
            <DropUpButton/>
            </Col>

            <Col className="d-flex justify-content-end">
               <Icons/>
            </Col>

        </Row>
        </div>
        <hr />
        </div>
    )
}