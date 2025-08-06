export const SmallDetailValues = ({text,amount}) => {

    return(
        <div style={{ fontSize:'13px',color:'#81836C',}} className="d-flex gap-1">
            <strong><p>{text}</p></strong>
            <p>{amount}</p>
        </div>
    )
}