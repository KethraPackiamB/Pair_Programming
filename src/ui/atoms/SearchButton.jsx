import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

export const SearchButton = () => {

return(
        <div>
        <InputGroup className="container my-2" size="lg" >
        <Form.Control 
          placeholder="Type the Domain you want"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        style={{borderRadius:"0",  
            background:"#e8e5e480", 
            border: "2px solid #e8e5e480",
            fontSize:"17px" 
        }}
        />
        <Button variant="secondary" id="button-addon2" 
        style={{background:"#09757A", 
        color:"#ffffff",borderRadius:"0",
        fontSize:"14px"
        }}>
          Search Domain
        </Button>
      </InputGroup>
        </div>
    )
}