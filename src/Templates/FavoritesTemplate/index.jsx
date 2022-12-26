import {useDispatch, useSelector} from "react-redux";
import ButtonComponent from "../../Components/ButtonComponent";

const FavoritesTemplate = () => {
    const favorites = useSelector(state => state.favoritesUsersReducer.favorites)
    console.log(favorites);
    const dispatch = useDispatch();

    const deleteFavoriteUser = (user) =>{
        dispatch({type: 'REMOVE_FROM_FAVORITES', payload: user.id})
    }

    return (
        <>
            <h2>FavoritesTemplate</h2>

            {favorites.map((current)=>(
                <div>
                    <div>{current.name}</div>
                    <ButtonComponent btnClick={()=>deleteFavoriteUser(current)}/>
                </div>

                )
            )}
        </>



    )
}

export default FavoritesTemplate;