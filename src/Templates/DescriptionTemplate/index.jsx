import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ButtonComponent from "../../Components/ButtonComponent";
import DescriptionComponent from "../../Components/DescriptionComponent";
import { addDataActionCreator, removeDataActionCreator } from "../../favorites/action-creators";

import { DESCRIPTION_DATA } from "./constants";

const DescriptionTemplate = () => {
    // ========== REDUX =============================
    const dispatch = useDispatch();
    const count = useSelector(state => state.countReducer.count);
    const addData = (amount) => {
        dispatch(addDataActionCreator(amount));
    }
    const removeData = (amount) => {
        dispatch(removeDataActionCreator(amount));
    }
    // ========== REDUX =============================

    const [state, setState] = useState(false);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                const dataFromServer = await response.json();
            } catch (error) {
                console.log(error.message);
            }
        }

        fetchData();
    }, [])

    const showAutoDescription = () => {
        setState(!state);
    }

    // const showAnotherInfo = () => {
    //     console.log('Another Info from Description templates');
    // }

    return (
        <>
            <div className="container d-flex">
                <button onClick={() => addData(100)}>ADD</button>
                <h2>{count}</h2>
                <button onClick={() => removeData(100)}>REMOVE</button>
            </div>
            
            <ButtonComponent 
                label={state ? 'Hide' : 'Show info'}
                btnClick={showAutoDescription}
            />
            {/* <ButtonComponent 
                label='Show in console'
                btnClick={showAnotherInfo}
            /> */}
            {state && DESCRIPTION_DATA.map(({ id, title, description }) => (
                <div key={id}>
                    <DescriptionComponent 
                        title={title}
                        description={description}
                    />  
                </div>
            ))}
        </>
    )
}

export default DescriptionTemplate;