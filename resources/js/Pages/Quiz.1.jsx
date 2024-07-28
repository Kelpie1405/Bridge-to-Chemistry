import React, { useState, useEffect } from 'react';

const Quiz = (props) => {
    const timeLimit = 3 * 60 * 10**3; // 3分
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [result, setResult] = useState('');
    const [isDisabled, setIsDisabled] = useState(false);
    
    const handleAnswerChange = (e) => {
        setSelectedAnswer(e.target.value);
    };
    
    const handleSubmit = () => {
        if (selectedAnswer) {
            setIsDisabled(true);
            if (selectedAnswer == '2') {
                setResult('〇正解');
            } else {
                setResult('×不正解');
            }
        } else {
            setResult('答えを入力してください！');
        }
    };
    
    const handleTimeout = () =>{
        setIsDisabled(true);
        setResult('時間切れです。。');
    };
    
    return (
        <>
            <h2>問題</h2>
             <Timer timeLimit={timeLimit} onTimeout={handleTimeout}/>
            <p>融点が最も高い金属はどれか？</p>
            <div>
                <QuizChoice id="1" content="レニウム" onChange={handleAnswerChange} disabled={isDisabled} />
                <QuizChoice id="2" content="タングステン" onChange={handleAnswerChange} disabled={isDisabled} />
                <QuizChoice id="3" content="モリブデン" onChange={handleAnswerChange} disabled={isDisabled} />
            </div>
            <button id="btn" onClick={handleSubmit}>答え合わせ</button>
            <div>{result}</div>
           
        </>
    );
}

export default Quiz;

const QuizChoice = (props) => {
    const { id, content, onChange, disabled } = props;
    return (
        <>
            <input
                type="radio"
                name="quiz-answer"
                id={`quiz-answer${id}`}
                value={id}
                onChange={onChange}
                disabled={disabled}
                className=""
            />
            <label for={`quiz-answer${id}`}>{content}</label>
        </>
        
    );
};

const Timer = (props) => {
    const { timeLimit, onTimeout } = props;
    
    const startTime = Date.now();
    const [remainingTime, setRemainingTime]  = useState(timeLimit);
    
    // 初回レンダリング時のみ実行
    useEffect(() => {
        const timerInterval = setInterval(() => {
            const elapsedTime = Date.now() - startTime;
            const remainingTime = timeLimit - elapsedTime;
            
            if (remainingTime <= 0) {
                setRemainingTime(0);
                clearInterval(timerInterval);
                onTimeout();
            } else {
                setRemainingTime(remainingTime);
            }
        }, 500);
        
        return () => clearInterval(timerInterval);
    }, []);
    
    const displayTime = (remainingTime) => {
        const minutes = Math.floor(remainingTime / (60 * 10**3));
        const seconds = Math.floor((remainingTime % (60 * 10**3)) / 10**3);
        return `残り時間：${minutes}分${seconds}秒`;
    };
    
    return (
        <div>{displayTime(remainingTime)}</div>
    );
};