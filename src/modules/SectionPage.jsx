import { SellImage } from "../ui/atoms/SellImage"
import { SaveImageContent } from "../ui/molecules/SaveImageContent";
import { SellImageContent } from "../ui/molecules/sellImageContent"
import { Container,Row,Col} from "react-bootstrap";
import { SuccessImageContent } from "../ui/molecules/SuccessImageContent";

export const SectionPage=()=>{
    return(
        <div className="section-wrapper">
         <Row>    
            <Col sm={6} style={{marginTop: "327px",paddingLeft: "290px"}}>
            <SuccessImageContent/>
            </Col>
            <Col sm={6} style={{paddingLeft:"100px"}}>
               <SellImageContent/>
               <SaveImageContent/>  
            </Col>
         </Row>

        </div>
    );
};