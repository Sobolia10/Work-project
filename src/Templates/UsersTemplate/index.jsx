import { useEffect, useState, createContext } from "react";

import UsersComponent from "../../Components/UsersComponent";
import SpinnerComponent from "../../Components/SpinnerComponent";
import InputGroupComponent from "../../Components/InputGroupComponent";

import { ToastContainer, toast } from 'react-toastify';

import { USERS_URL, TOAST_MESSAGES, TITLE, INPUT_GROUP } from "./constants";

import 'react-toastify/dist/ReactToastify.css';

export const UserContext = createContext();

const UsersTemplate = () => {
    const [users, setUsers] = useState([]);
    const [isUpdate, setUpdate] = useState(true);
    const [isLoading, setLoading] = useState(false);
    const [filteredUsers, setFilteredUsers] = useState('');

    const showToast = (info) => toast(info);
    const deleteUser = (userId) => {
        const filteredUsers = users.filter(item => item.id !== userId);
        setUsers(filteredUsers);
    }

    useEffect(() => {
        const getUsers = async () => {
            setUsers([]);
            setLoading(true);
            try {
                const response = await fetch(USERS_URL);
                const data = await response.json();
                if (data) {
                    setUsers(data);
                    showToast(TOAST_MESSAGES.success);
                }
                else showToast(TOAST_MESSAGES.warning)
            } catch (error) {
                showToast(error.message);
            }
            setLoading(false);
        }

        getUsers();
    }, [isUpdate])

    return (
        <UserContext.Provider value={{btnOne: 'outline-secondary', btnTwo: 'danger'}}>
            <div style={{margin: '0 100px'}}>
                <h2>{TITLE}</h2>
                {!isLoading && <InputGroupComponent
                    placeholder={INPUT_GROUP.placeholder}
                    labelBtnOne={INPUT_GROUP.labelOne}
                    labelBtnTwo={INPUT_GROUP.labelTwo}
                    onInputChange={(e) => setFilteredUsers(e.target.value)}
                    onBtnOneClick={() => setUpdate(!isUpdate)}
                    onBtnTwoClick={() => setUsers([])}
                />}
                {isLoading && <SpinnerComponent />}
                {users &&
                    users.filter(user => user.name.toLowerCase().trim().includes(filteredUsers.toLowerCase().trim()))
                    .map(({ id, name, username, phone, company, website, email }) => (
                    <div key={id}>
                        <UsersComponent 
                            name={name}
                            username={username}
                            phone={phone}
                            company={company}
                            website={website}
                            email={email}
                            deleteUser={deleteUser}
                            id={id}
                        />
                    </div>
                ))}
                {!users.length && !isLoading && <h4>No Users</h4>}
                <ToastContainer />
            </div>
        </UserContext.Provider>
    )
}

export default UsersTemplate;