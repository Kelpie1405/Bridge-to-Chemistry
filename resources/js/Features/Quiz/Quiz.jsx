import React, { useState } from 'react';
import Heading1 from '@/Components/Heading1';
import SubmitButton from '@/Components/SubmitButton';
import QuizChoice from '@/Features/Quiz/QuizChoice';
import Timer from '@/Features/Quiz/Timer';

const Quiz = (props) => {
    const { quiz, onQuizFinish } = props;
    
    // クイズ関連
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [result, setResult] = useState('');
    const [isDisabled, setIsDisabled] = useState(false); // 回答を送信 or 時間切れで、タイマーと選択肢とボタンの活動を終了
    
    const handleAnswerChange = (e) => {
        setSelectedAnswer(Number(e.target.value));
    };
    
    const processAnswer = () => {
        if (selectedAnswer === quiz.answer) {
            setResult('〇正解');
        } else {
            setResult('×不正解');
        }
        
        setIsDisabled(true);
        onQuizFinish(); 
    };
    
    const handleAnswerSubmit = () => {
        if (selectedAnswer) {
            processAnswer();
        } else {
            setResult('答えを入力してください！');
        }
    };
    
    
    // タイマー機能関連
    const timeLimit = 1.5 * 60 * 10**3; // 1分30秒
    
    const handleTimeout = () =>{
        processAnswer();
    };
    
    return (
        <>
            <Heading1 title='Question' />
            
            <div className="row align-items-center mb-3">
                <div className="col-4"></div>
                
                <div className="col-4 text-center fs-4 fw-bold">{result}</div>
                
                <div className="col-4 d-flex justify-content-end">
                    <Timer timeLimit={timeLimit} onTimeout={handleTimeout} disabled={isDisabled} />
                </div>
            </div>
            
            <div className="p-3">
                <div className="crossing-line">
                    <p className="fs-4">{`　${quiz.problem}`}</p>
                </div>
                
                <div className="row">
                    {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="col-6">
                            <QuizChoice 
                                id={i}
                                content={quiz[`choice${i}`]}
                                onChange={handleAnswerChange}
                                isSelected={selectedAnswer === i}
                                disabled={isDisabled}
                            />
                        </div>
                    ))}
                </div>
            </div>
            
            {/*　後にボタンも押せないように　*/}
            <SubmitButton label='回答' onClick={handleAnswerSubmit} />
        </>
    );
};

export default Quiz;

