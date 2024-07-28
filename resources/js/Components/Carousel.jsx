export default function Carousel({ posts }) {
    console.log(posts);
    return (
        <div id="carousel" className="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
                {posts.map((_, index) => (
                    <button
                        key={index}
                        type="button"
                        data-bs-target="#carousel"
                        data-bs-slide-to={index}
                        className={index === 0 ? 'active' : ''}
                        aria-current={index === 0 ? 'true' : ''}
                        aria-label={`Slide ${index + 1}`}
                    ></button>
                ))}
            </div>
            
            <div className="carousel-inner">
                {posts.map((post, index) => (
                    <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                        <a href={post.category_id === 1 ? `/articles/${post.id}` : `/columns/${post.id}`}>
                            <img src={post.image} className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h3>{post.title}</h3>
                                <p>{post.lede}</p>
                            </div>
                        </a>
                    </div>
                ))}
            </div>
            
            <button className="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}