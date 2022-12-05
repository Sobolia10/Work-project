import { useEffect, useState } from "react";

import UsersComponent from "../../Components/UsersComponent";
import ButtonComponent from "../../Components/ButtonComponent";
import SpinnerComponent from "../../Components/SpinnerComponent";

import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const UsersTemplate = () => {
    const [users, setUsers] = useState([]);
    const [isUpdate, setUpdate] = useState(true);
    const [isLoading, setLoading] = useState(false);

    const showToast = (info) => toast(info);
    const deleteUser = (userId) => {
        console.log("Delete user");
        const filteredUsers = users.filter(item => item.id !== userId);
        setUsers(filteredUsers);
    }

    useEffect(() => {
        const getUsers = async () => {
            setUsers([]);
            setLoading(true);
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                const data = await response.json();
                if (data) {
                    setUsers(data);
                    showToast('Success')
                }
                else showToast('"Something went wrong!"')
            } catch (error) {
                showToast(error.message);
            }
            setLoading(false);
        }

        getUsers();
    }, [isUpdate])

    return (
        <div style={{margin: '0 100px'}}>
            <h3>Users template</h3>
            {isLoading && <SpinnerComponent />}
            {!isLoading && <ButtonComponent 
                btnStyle='buttonBlack'
                label='Update'
                btnClick={() => setUpdate(!isUpdate)}
                disabled={false}
            />}
            {!isLoading && <ButtonComponent 
                btnStyle='buttonBlack'
                label='Delete All'
                btnClick={() => setUsers([])}
                disabled={users.length ? false : true}
            />}
            {users && users.map(({ id, name, username, phone }) => (
                <div key={id}>
                    <UsersComponent 
                        name={name}
                        username={username}
                        phone={phone}
                        deleteUser={deleteUser}
                        id={id}
                    />
                </div>
            ))}
            {!users.length && !isLoading && <h4>No Users</h4>}
            <ToastContainer />
        </div>
    )
}

export default UsersTemplate;