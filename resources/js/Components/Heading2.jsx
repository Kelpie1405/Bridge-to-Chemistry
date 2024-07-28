export default function Heading2(props) {
    const { title } = props;
    
    return (
        <h2 className="heading2 mb-4 p-4 pb-2 fs-1">
            {title}
        </h2>
    );
}