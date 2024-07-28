export default function Breadcrumb(props) {
    const { post } = props;
    
    return (
        <nav style={{ "--bs-breadcrumb-divider": 'none' }} aria-label="breadcrumb" className="pb-1">
            <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item"># <a href="">{post.field.name}</a></li>
                <li className="breadcrumb-item"># <a href="">{post.level.name}</a></li>
            </ol>
        </nav>
    );
}