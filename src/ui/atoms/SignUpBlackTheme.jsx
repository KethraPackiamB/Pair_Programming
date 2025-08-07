import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

export const SignUpBlackTheme = () => {

    return(
        <div>
             <InputGroup  size="lg" >
        <Form.Control 
          placeholder="Email Address"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        style={{borderRadius:"0",  
            background:"#5c5c5cff", 
            border: "2px solid #5c5c5cff",
            fontSize:"17px",
            color:"#ffffff" 
        }}
        />
        <Button variant="secondary" id="button-addon2" 
        style={{background:"#ffffff", 
        color:"#000000",borderRadius:"0",
        fontSize:"14px"
        }}>
          Sign Up
        </Button>
      </InputGroup>
        </div>
    )
}