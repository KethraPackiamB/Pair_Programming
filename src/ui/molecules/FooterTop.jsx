import { FooterText } from "../atoms/FooterTexts";
import { SignUpBlackTheme } from "../atoms/SignUpBlackTheme";
import { Container,Row,Col } from "react-bootstrap";

export const FooterTop = () => {

    return(
        <div>
            <Container className="py-4" >
                <Row>
                    <Col sm={8}>
                     <FooterText textone="Sign up for news and special offers"/>
                     <SignUpBlackTheme/>
                     </Col>

                     <Col sm={4} style={{lineHeight:"4px"}}>
                     <FooterText texttwo="We love taking your call."/>
                     <div className="d-flex gap-3">
                     <FooterText textthree="GoDaddy guides"/>
                     
                     </div>
                     </Col>
                </Row>
               </Container>
               <hr />
        </div>
    )
}