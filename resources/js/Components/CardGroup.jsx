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
        <div class="card">
            <img src={post.image} class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 class="card-title">{post.title}</h5>
                <p class="card-text">{post.lede}</p>
                <p class="card-text"><small class="text-body-secondary">{formatDate(post.created_at)}</small></p>
            </div>
        </div>
    );
};

const CardGroup = (props) => {
    const { posts } = props;
    
    return (
        <div class="card-group">
            {posts.map((post) =>(
                <Card key={post.id} post={post} />
            ))}
        </div>
    );
};

export default CardGroup;