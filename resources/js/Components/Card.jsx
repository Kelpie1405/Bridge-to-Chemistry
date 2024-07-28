import Breadcrumb from '@/Components/Breadcrumb';

const Card = (props) => {
    const { post } = props;
    
    const formatDate = (timestamp) =>{
        const date = new Date(timestamp);
        const year = date.getFullYear();
        const month = date.getMonth() + 1; // 月は「０」から始まるため、１を足す
        const day = date.getDate();
        
        return `${year}.${month}.${day}`;
    };
    
    return (
        <div className="card mb-2">
            <div className="row g-0">
                <div className="col-md-3">
                    <a href={`/articles/${post.id}`}>
                        <div className="ratio ratio-4x3">
                            <img src={post.image} className="w-100" />
                        </div>
                    </a>
                </div>
                <div className="col-md-9 ps-5 pe-3 py-3">
                    <div classsName="card-body">
                        <Breadcrumb post={post} />
                        <h3 className="card-title">
                            <a href={`/articles/${post.id}`}>{post.title}</a>
                        </h3>
                        <p className="card-text">{`　${post.lede}`}</p>
                        <p className="card-text"><small className="text-body-secondary">{formatDate(post.created_at)}</small></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;