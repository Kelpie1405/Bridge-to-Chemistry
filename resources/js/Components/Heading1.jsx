export default function Heading1(props) {
    const { title } = props;
    
    return (
        <h1 className="mb-0 py-4 display-4 fw-bold text-center" style={{ letterSpacing: '0.05em' }}>
            <span className="" style={{ fontSize: '1.5em', color: 'rgb(254, 169, 16)' }}>
                {title.charAt(0)}
            </span>
            {title.slice(1)}
        </h1>
    );
}