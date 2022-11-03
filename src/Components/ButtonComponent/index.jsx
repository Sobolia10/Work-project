import './styles.scss'; 

const ButtonComponent = (props) => {
    const {
        label,
        btnStyle,
        btnClick,
        disabled,
    } = props;

    return (
        <button 
            className={btnStyle && !disabled ? btnStyle : 'disabledButton'}
            onClick={btnClick}
            disabled={disabled}
        >
            {label}
        </button>
      );
}

export default ButtonComponent;