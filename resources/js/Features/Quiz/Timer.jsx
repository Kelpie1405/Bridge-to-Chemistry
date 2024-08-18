import React, { useState, useEffect } from 'react';

const Timer = (props) => {
    const { timeLimit, onTimeout, disabled } = props;
    
    const startTime = Date.now();
    const [remainingTime, setRemainingTime]  = useState(timeLimit);
    
    // 初回レンダリング時のtimerIntervalが生成される
    // disabledがtrueになり次第、timerIntervalとタイマーが止まる
    useEffect(() => {
        let startTime = sessionStorage.getItem('startTime');
        
        if (!startTime) {
            startTime = Date.now();
            sessionStorage.setItem('startTime', startTime);
        }
        
        const timerInterval = setInterval(() => {
            const elapsedTime = Date.now() - startTime;
            const remainingTime = timeLimit - elapsedTime;
            
            if (remainingTime >= 0) {
                setRemainingTime(remainingTime);
            } else {
                setRemainingTime(0);
                clearInterval(timerInterval);
                sessionStorage.removeItem('startTime');
                onTimeout();
            }
        }, 500);
        
        if (disabled) {
            clearInterval(timerInterval);
            setRemainingTime(remainingTime);
        }
        
        return () => clearInterval(timerInterval);
    }, [disabled]);
    
    const displayTime = (remainingTime) => {
        const minutes = Math.floor(remainingTime / (60 * 10**3));
        const seconds = Math.floor((remainingTime % (60 * 10**3)) / 10**3);
        return `残り時間：${minutes}分${seconds}秒`;
    };
    
    return (
            <div className="p-1 bg-secondary-subtle rounded-2 fs-5">
                {displayTime(remainingTime)}
            </div>
    );
};

export default Timer;