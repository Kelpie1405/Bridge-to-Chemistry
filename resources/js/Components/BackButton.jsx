import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleChevronLeft } from '@fortawesome/free-solid-svg-icons';

const BackButton = (props)  => {
    const style = {
        border: '0.1em solid rgb(136, 19, 55)',
    };
    
    return (
        <div className="m-2 d-flex justify-content-center">
            <a href="./">
                <span className="p-2 rounded-pill fs-5 fw-semibold" style={style}>
                    <FontAwesomeIcon icon={faCircleChevronLeft} /> 戻る
                </span>
            </a>
        </div>
    );
};

export default BackButton;