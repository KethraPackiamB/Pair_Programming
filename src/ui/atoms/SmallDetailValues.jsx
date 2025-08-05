export const SmallDetailValues = ({labels,amount}) => {

    return(
        <div style={{ fontSize:'12px',color:'#81836C',}} className="d-flex gap-1">
            <strong><p>{labels}</p></strong>
            <p>{amount}</p>
        </div>
    )
}