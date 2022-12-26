import { useSelector } from 'react-redux';
import NavBarComponent from '../NavBarComponent';
import './styles.scss';

const HeaderComponent = () => {
    const isAuth = useSelector(state => state.authReducer.isAuth);

    return (
        <header className="header">
            <div><h3>LOGO</h3></div>
            <div className="header__nav-bar">
                {isAuth && <NavBarComponent />}
            </div>
        </header>
    )
}

export default HeaderComponent;