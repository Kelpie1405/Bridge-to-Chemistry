const QuizChoice = (props) => {
    const { id, content, onChange, isSelected, disabled } = props;
    return (
        <div className={`my-3 p-3 d-flex align-content-center border rounded ${isSelected ? 'selected-quiz-choice' : ''}`}>
            <input
                type="radio"
                name="quiz-answer"
                id={`quiz-answer${id}`}
                value={id}
                onChange={onChange}
                disabled={disabled}
                className="me-3 quiz-choice"
            />
            <label htmlFor={`quiz-answer${id}`} className="h5 mb-0">{content}</label>
        </div>
        
    );
};

export default QuizChoice;