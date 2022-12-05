import ButtonComponent from "../ButtonComponent";
import ModalComponent from "../ModalComponent";

const UsersComponent = (props) => {
    const {
        name,
        username,
        phone,
        deleteUser,
        website,
        company,
        email,
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
            <ModalComponent
                name={name}
                company={company}
                website={website}
                email={email}
                id={id}
            />
        </div>
    )
}

export default UsersComponent;