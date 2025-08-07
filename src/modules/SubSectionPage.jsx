import { BlackButton } from "../ui/atoms/BlackButton"
import { HeadingTwo } from "../ui/atoms/HeadingTwo";
import { TinyText } from "../ui/atoms/TinyText"
import { SectionImages}  from "../ui/molecules/SectionImages"


export const SubSectionPage=()=>{
    return(
        <div style={{background:"#dededeff",paddingBottom:"20px"}} >
           <div className="text-center py-4">
           <HeadingTwo text="Templates designed to sell"/>
           <TinyText text="Choose from 100s of designs for every idea and industry"/>
           </div>
           <SectionImages/>
           
            <div className="d-flex justify-content-center py-5">
               <BlackButton label="Browse All Templates" />
            </div>
            </div>
    )
}

         