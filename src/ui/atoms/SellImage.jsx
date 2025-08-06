import bodyImg1 from '../../assets/body_img1.jpg';
export const SellImage=()=>{

    const style={
    width: "423px",
    height: "504px",
    borderRadius:"27px",
    }
    return(
        <div>
            <img src={bodyImg1} style={style}/>
        </div>   
         );
};