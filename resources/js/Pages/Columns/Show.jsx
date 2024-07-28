import React, { useState } from "react";
import NormalLayout from '@/Layouts/NormalLayout';
import BackButton from '@/Components/BackButton';
import Quiz from '@/Features/Quiz/Quiz';
import Explanation from '@/Features/Quiz/Explanation';

const Show = ({ post }) => {
    const [isQuizFinish, setIsQuizFinish] = useState(null);
    
    const handleQuizFinish = () => {
        setIsQuizFinish(true);
    };
    
    return (
        <NormalLayout>
            {/*<Quiz quiz={post.quiz} onQuizFinish={handleQuizFinish} />
            
            {isQuizFinish && (
                <div>
                    <Explanation post={post} />
                </div>
            )}
            
            <div dangerouslySetInnerHTML={{ __html: post.body }} />
            */}
            <div>
                    <Explanation post={post} />
                <Quiz quiz={post.quiz} onQuizFinish={handleQuizFinish} />    
                </div>
            <div className="mt-5">
                <BackButton />
            </div>
        </NormalLayout>
    );
}

export default Show;