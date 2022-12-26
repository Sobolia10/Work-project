import { useEffect, useState, createContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import UsersComponent from "../../Components/UsersComponent";
import SpinnerComponent from "../../Components/SpinnerComponent";
import InputGroupComponent from "../../Components/InputGroupComponent";
import { ToastContainer, toast } from 'react-toastify';
import { TITLE, INPUT_GROUP } from "./constants";
import 'react-toastify/dist/ReactToastify.css';
import { getUserActionCreator } from "../../favorites/action-creators";

export const UserContext = createContext();

const UsersTemplate = () => {
    const dispatch = useDispatch();
    const addUserToFavorites = (user) => {
        dispatch({type: 'ADD_TO_FAVORITES', payload: user})
    }

    const users = useSelector(({getUserReducer}) => getUserReducer.user)
    const isLoading = useSelector(({getUserReducer}) => getUserReducer.loading)

    const [isUpdate, setUpdate] = useState(true);
    const [filteredUsers, setFilteredUsers] = useState('');

    const showToast = (info) => toast(info);
    const deleteUser = (userId) => {
        const filteredUsers = users.filter(item => item.id !== userId);
    }

    useEffect(() => {
        dispatch(getUserActionCreator)
    }, [isUpdate])

    if (isLoading) {
        return (
        <div style={{margin: '0 100px'}}>
                <h2>{TITLE}</h2>
                <SpinnerComponent />
        </div>
        );
    }

    return (
        <UserContext.Provider value={{btnOne: 'outline-secondary', btnTwo: 'danger'}}>
            <div style={{margin: '0 100px'}}>
                <h2>{TITLE}</h2>
                <InputGroupComponent
                    placeholder={INPUT_GROUP.placeholder}
                    labelBtnOne={INPUT_GROUP.labelOne}
                    labelBtnTwo={INPUT_GROUP.labelTwo}
                    onInputChange={(e) => setFilteredUsers(e.target.value)}
                    onBtnOneClick={() => setUpdate(!isUpdate)}
                />
                {!!users.length &&
                    users.filter(user => user.name.toLowerCase().trim().includes(filteredUsers.toLowerCase().trim()))
                    .map((user) => (
                    <div key={user.id}>
                        <UsersComponent
                            user={user}
                            deleteUser={deleteUser}
                            addUserToFavorites={addUserToFavorites}
                        />
                    </div>
                ))}
                {!users.length && <h4>No Users</h4>}
                <ToastContainer />
            </div>
        </UserContext.Provider>
    )
}

export default UsersTemplate;