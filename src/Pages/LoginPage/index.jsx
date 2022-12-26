import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { authActionCreator } from '../../favorites/action-creators';

const LoginPage = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const confirmPassword = useSelector(state => state.authReducer.password);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const nameHandler = (e) => {
        setName(e.target.value);
    }

    const passwordHandler = (e) => {
        setPassword(e.target.value);
    }

    const sendData = () => {
        const loginData = {
            name,
            password,
        }
        if (loginData.password === confirmPassword) {
            dispatch(authActionCreator())
            navigate("/users");
        } else {
            alert('Please, enter right password')
        }
    }

    return (
        <Form className='container'>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control onChange={e => nameHandler(e)} defaultValue={name} type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control onChange={e => passwordHandler(e)} defaultValue={password} type="password" placeholder="Password" />
            </Form.Group>
            <Button onClick={() => sendData()} variant="primary">
                Submit
            </Button>
        </Form>
    )
}

export default LoginPage;