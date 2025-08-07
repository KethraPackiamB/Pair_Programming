import SectionImg2 from '../../assets/Section_img2.jpg';
export const SectionLabImage=()=>{
    const imgstyle={
      width: "376px",
    height: "310px",
    borderRadius: "12px",
    }
    return(
        <div>
            <img src={SectionImg2} style={imgstyle}/>
        </div>
    )
}