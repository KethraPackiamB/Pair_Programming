import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import SplitButton from 'react-bootstrap/SplitButton';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

export const DropUpButton = () => {

    return(
        <div>
             {['up'].map(
        (direction) => (
          <DropdownButton
            // as={ButtonGroup}
            key={direction}
            id={`dropdown-button-drop-${direction}`}
            drop={direction}
            variant="dark"
            title={"India - English"}
          >
            <Dropdown.Item value="1">India - English</Dropdown.Item>
            <Dropdown.Item value="2">Australia - English</Dropdown.Item>
            <Dropdown.Item value="3">Brasil - Português</Dropdown.Item>
            <Dropdown.Item value="3">Danmark - Dansk</Dropdown.Item>
            <Dropdown.Item value="3">Ireland - English</Dropdown.Item>
            <Dropdown.Item value="3">India - हिंदी</Dropdown.Item>
            <Dropdown.Item value="3">Suisse - Français</Dropdown.Item>
            <Dropdown.Item value="3">Pakistan - English</Dropdown.Item>
            <Dropdown.Item value="3">Türkiye - Türkçe</Dropdown.Item>
            <Dropdown.Item value="3">México - Español</Dropdown.Item>
            <Dropdown.Item value="3">Estados Unidos - Español</Dropdown.Item>
            <Dropdown.Item value="3">Colombia - Español</Dropdown.Item>
            <Dropdown.Item value="3">België - Nederlands</Dropdown.Item>
           
          </DropdownButton>
        ),
      )}
        </div>
    )
}