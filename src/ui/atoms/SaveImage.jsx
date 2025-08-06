import bodyImg2 from '../../assets/body_img2.jpg';
export const SaveImage=()=>{
    const style={
    width: "426px",
    height:"433px",
    borderRadius:"27px",
    }
    return(
        <div>
         <img src={bodyImg2}  style={style}/>
        </div>
    )
}