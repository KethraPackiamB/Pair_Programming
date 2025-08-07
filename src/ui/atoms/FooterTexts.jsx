export const FooterText = ({textone,texttwo,textthree,textfour}) => {

    return(
        <div>
            <p style={{
                fontSize:"17px",
                fontWeight:"bold",
                // marginTop: "20px"
            }}>{textone}</p>
            <p style={{
                fontSize:"17px",
                fontweight:"bold",
                color:"#b1b3a6ff",
            }}><strong>{texttwo}</strong></p>

           
            <h3 style={{
                fontWeight:"bold",
            }}>{textthree}
               </h3>
             <p style={{fontSize:"20px"}}>
                {textfour}
                </p>
        </div>
    )
}