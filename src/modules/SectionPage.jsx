import { SellImage } from "../ui/atoms/SellImage"
import { SaveImageContent } from "../ui/molecules/SaveImageContent";
import { SellImageContent } from "../ui/molecules/sellImageContent"
import { Container,Row,Col} from "react-bootstrap";
import { SuccessImageContent } from "../ui/molecules/SuccessImageContent";
import { HeadingOne } from "../ui/atoms/HeadingOne";

export const SectionPage=()=>{
    return(
        <div className="section-wrapper my-5">
            <Container>
               
         <Row> 

        <Col sm={6} style={{marginTop: "15px",paddingLeft: "150px"}}>

           <div style={{paddingBottom:"230px"}}>
            <HeadingOne text="Success in"/>
            <HeadingOne text="3 easy steps."/>
            </div>
            <SuccessImageContent/>
            </Col>
            <Col sm={6} >
               <SellImageContent/>
               <SaveImageContent/>  
            </Col>
         </Row>
         </Container>

        </div>
    );
};

// paddingLeft: "290px"

// style={{paddingLeft:"100px"}}