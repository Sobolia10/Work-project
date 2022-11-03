import ButtonComponent from "../ButtonComponent";

const UsersComponent = (props) => {
    const {
        name,
        username,
        phone,
        deleteUser,
        id,
    } = props;

    return (
        <div style={{
            border: '2px solid lightgrey',
            padding: '15px', 
            marginTop: '5px'
        }}>
            <h3>{ name }</h3>
            <p>{ username }</p>
            <p>{ phone }</p>
            <ButtonComponent
                label='Delete'
                btnStyle='buttonBlack'
                disabled={false}
                btnClick={() => deleteUser(id)}
            />
        </div>
    )
}

export default UsersComponent;