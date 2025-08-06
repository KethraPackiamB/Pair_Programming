import { BannerContent } from "./BannerContent";
import commerce from "../../assets/commerce3.jpg"


export const ImageBanner = () => {

    return(
        <div style={{
            backgroundImage :`url(${commerce})`,
            backgroundSize: 'cover',
            height:"60vh",
            width: "100%",

        }}>
            <div className="container p-5 " >
          <BannerContent/>
          </div>
        </div>
    )
}