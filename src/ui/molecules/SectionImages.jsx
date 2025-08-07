import { SectionCraftImage } from "../atoms/SectionCraftImage"
import { SectionFrameImage } from "../atoms/SectionFrameImage"
import { SectionLabImage } from "../atoms/SectionLabImage"
import { SectionPlantImage } from "../atoms/SectionPlantImage"

export const SectionImages=()=>{
  return(
    <div className="d-flex justify-content-around align-items-center" style={{width:"120%"}}>
        <SectionPlantImage/>
        <SectionLabImage/>
        <SectionCraftImage/>
        <SectionFrameImage/>
    </div>
  )
}