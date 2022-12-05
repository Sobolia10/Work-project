import { useEffect, useState } from "react";
import ButtonComponent from "../../Components/ButtonComponent";
import DescriptionComponent from "../../Components/DescriptionComponent";

import { DESCRIPTION_DATA } from "./constants";

const DescriptionTemplate = () => {
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