import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import { UserContext } from '../../Templates/UsersTemplate';

function InputGroupComponent(props) {
    const {
        placeholder,
        labelBtnOne,
        labelBtnTwo,
        onInputChange,
        onBtnOneClick,
        onBtnTwoClick,
    } = props;

    const buttonColor = useContext(UserContext);

    return (
        <>
        <InputGroup>
            <InputGroup.Text id="basic-addon1">
                <i className="bi bi-search"></i>
            </InputGroup.Text>
            <Form.Control
                placeholder={placeholder}
                aria-label="Recipient's username with two button addons"
                onChange={onInputChange}
            />
            <Button
                variant={buttonColor.btnOne}
                onClick={onBtnOneClick}
            >
                {labelBtnOne}
            </Button>
            <Button
                variant={buttonColor.btnTwo}
                onClick={onBtnTwoClick}
            >
                {labelBtnTwo}
            </Button>
        </InputGroup>
        </>
    );
}

export default InputGroupComponent;