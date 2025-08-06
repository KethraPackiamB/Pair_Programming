import { HeaderNavbar } from "../ui/molecules/HeaderNavbar";
import { SearchButton } from "../ui/atoms/SearchButton";
import { SmallBadges } from "../ui/molecules/SmallBadges";
import {Row,Col,Container} from 'react-bootstrap';
import { ImageBanner } from "../ui/molecules/ImageBanner";
import { SideBanner } from "../ui/molecules/SideBanner";

export const HeaderPage = () => {

    return(
        <div>
            <HeaderNavbar/>
            <Container>
                <Row>
                    <Col sm={8}>
                        <SearchButton/>
                    </Col>
                    <Col sm={4}>
                        <SmallBadges/>
                    </Col>

                </Row>

                <Row>
                    <Col sm={8}>
                        <ImageBanner/>
                    </Col>
                    <Col sm={4}>
                        <SideBanner/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}