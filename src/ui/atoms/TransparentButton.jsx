import { Button } from "react-bootstrap";

export const TransparentButton = ({label}) => {

    return(
        <div>
            <Button style={{
                background: "transparent", 
                border:"1px solid #e8e5e480", 
                color:"#000000",

                }}>{label}</Button>
        </div>
    )
}