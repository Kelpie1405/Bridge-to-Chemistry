import Heading2 from '@/Components/Heading2';

const Explanation = (props) => {
    const { post } = props;
    
    return (
        <>
            <Heading2 title={post.title} />
            
            <div>
                <div dangerouslySetInnerHTML={{ __html: post.body }} />
            </div>
        </>
    );
};

export default Explanation;