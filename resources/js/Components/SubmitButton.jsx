import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';

const BackButton = (props)  => {
    const { label, onClick } = props;
    const style = {
        color: '#fff',
        backgroundColor: 'rgb(136, 19, 55)',
        border: 'none',
    };
    
    return (
        <div className="m-3 d-flex justify-content-center">
            <button type='button' onClick={onClick} className="px-2 py-1 rounded-3 fs-5 fw-semibold" style={style}>
                <FontAwesomeIcon icon={faCircleChevronRight} /> {label}
            </button>
        </div>
    );
};

export default BackButton;