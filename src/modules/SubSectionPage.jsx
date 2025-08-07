import { BlackButton } from "../ui/atoms/BlackButton"
import { HeadingTwo } from "../ui/atoms/HeadingTwo";
import { SectionIcon } from "../ui/atoms/SectionIcon";
import { TinyText } from "../ui/atoms/TinyText"
import { SectionImages}  from "../ui/molecules/SectionImages"
import {Row,Col} from 'react-bootstrap';

export const SectionContent=()=>{
    return(
        <div className="container">
           <div className="text-center">
           <HeadingTwo text="Templates designed to sell"/>
           <TinyText text="choose from 100s of designs for every idea and industry"/>
           </div>
           <SectionImages/>
           <Row>
            <Col sm={6} className="text-center">
               <BlackButton label="Brwose All Templates" />
            </Col>
            <Col sm={6}>
               <SectionIcon/>
            </Col>
            </Row>
        </div>
    )
}