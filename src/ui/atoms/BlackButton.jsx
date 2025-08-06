import { Button } from "react-bootstrap";

export const BlackButton = ({label}) => {

    return(
        <div>
            <Button variant="dark" className="px-5" style={{fontSize:"14px",padding:"7px"}}>{label}</Button>
        </div>
    )
}