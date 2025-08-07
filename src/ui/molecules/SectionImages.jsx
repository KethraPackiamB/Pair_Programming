import { SectionCraftImage } from "../atoms/SectionCraftImage"
import { SectionFrameImage } from "../atoms/SectionFrameImage"
import { SectionLabImage } from "../atoms/SectionLabImage"
import { SectionPlantImage } from "../atoms/SectionPlantImage"

export const SectionImages=()=>{
  return(
    <div className="container d-flex gap-3">
        <SectionPlantImage/>
        <SectionLabImage/>
        <SectionCraftImage/>
        <SectionFrameImage/>
    </div>
  )
}

