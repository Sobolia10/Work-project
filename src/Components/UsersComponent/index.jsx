import ButtonComponent from "../ButtonComponent";
import ModalComponent from "../ModalComponent";

const UsersComponent = (props) => {
    const {
        user,
        deleteUser,
        addUserToFavorites,
    } = props;

    return (
        <div style={{
            border: '2px solid lightgrey',
            padding: '15px', 
            marginTop: '5px'
        }}>
            <h3>{ user.name }</h3>
            <p>{ user.username }</p>
            <p>{ user.phone }</p>
            <ButtonComponent
                label='Delete'
                btnStyle='buttonBlack'
                disabled={false}
                btnClick={() => deleteUser(user.userid)}
            />
            <ModalComponent
                user={user}
            />
            <ButtonComponent
                label='Add to favorites'
                btnStyle='buttonBlack'
                disabled={false}
                btnClick={() => addUserToFavorites(user)}
            />
        </div>
    )
}

export default UsersComponent;