import { VeryTinyText } from "../atoms/VeryTinyText";
import { PrivacyPolicy } from "./PrivacyPolicy";
import { Row, Col} from "react-bootstrap";

export const FooterCopyright = () => {

    return(
        <div className="container">
            <Row>
                <Col sm={10}>
            <VeryTinyText text="Copyright © 1999 - 2025 GoDaddy Operating Company, LLC. All Rights Reserved. The GoDaddy word mark is a registered trademark of GoDaddy Operating Company, 
            LLC in the US and other countries. The “GO” logo is a registered trademark of GoDaddy.com, 
            LLC in the US."/>
           <VeryTinyText text="Use of this Site is subject to express terms of use. By using this site, you signify that you agree to be bound by these Universal Terms of Service"/>
           </Col>
           <Col sm={2}>
                <PrivacyPolicy/>
           </Col>
           </Row>
        </div>
    )
}