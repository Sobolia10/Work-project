import './styles.css';

const DescriptionComponent = (props) => {
    const {
        title,
        description,
    } = props;

    return (
        <>
            <div className="description-block">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>  
        </>
      );
}

export default DescriptionComponent;