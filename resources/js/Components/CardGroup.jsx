const Card = (props) => {
    const { post, url } = props;
    
    const formatDate = (timestamp) =>{
        const date = new Date(timestamp);
        const year = date.getFullYear();
        const month = date.getMonth() + 1; // 月は「０」から始まるため、１を足す
        const day = date.getDate();
        
        return `${year}.${month}.${day}`;
    };
    
    return (
        <div class="card">
            <a href={`/${url}/${post.id}`}>
                <img src={post.image} class="card-img-top" alt="アイキャッチ画像" />
                <div class="card-body">
                    <h5 class="card-title">{post.title}</h5>
                    <p class="card-text">{post.lede}</p>
                    <p class="card-text"><small class="text-body-secondary">{formatDate(post.created_at)}</small></p>
                </div>
            </a>
        </div>
    );
};

const CardGroup = (props) => {
    const { posts, url } = props;
    
    return (
        <div class="card-group">
            {posts.map((post) =>(
                <Card key={post.id} post={post} url={url} />
            ))}
        </div>
    );
};

export default CardGroup;