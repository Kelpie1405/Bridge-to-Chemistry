import NormalLayout from '@/Layouts/NormalLayout';
import CardGroup from '@/Components/CardGroup';
import Carousel from '@/Components/Carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


const Toppage = (props) => {
    const { posts, articles, columns } = props;
    
    return (
        <>
            <NormalLayout>
                <Carousel posts={posts} />
                
                
                
                <div className="mb-4">
                    <ArticleList title='解説' posts={articles} url='articles' />
                </div>
               
                <div className="">
                    <ArticleList title='コラム' posts={columns} url='columns' />
                </div>
            </NormalLayout>
        </>
    );
};

export default Toppage;

const ArticleList = (props) => {
    const { title, posts, url } = props;
    
    return (
        <>
           <div className="m-3 d-flex justify-content-between">
                <h3 className="fs-2 fw-medium mb-0 align-self-center">{title}</h3>
                <a href={`/${url}`} className="align-self-end me-4">
                    <sapn className="">
                        {`${title}記事一覧へ`} <FontAwesomeIcon icon={faArrowRight} />
                    </sapn>
                </a>
            </div>
            
            <hr className="my-2"/>
            
            <CardGroup posts={posts} /> 
        </>
    );
};