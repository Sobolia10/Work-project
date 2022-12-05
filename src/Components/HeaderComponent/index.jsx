import NavBarComponent from '../NavBarComponent';
import './styles.scss';

const HeaderComponent = () => {
    return (
        <header className="header">
            <div><h3>LOGO</h3></div>
            <div className="header__nav-bar">
                <NavBarComponent />
            </div>
        </header>
    )
}

export default HeaderComponent;