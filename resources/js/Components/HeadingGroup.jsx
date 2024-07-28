import Heading1 from '@/Components/Heading1';

export default function HeadingGroup(props) {
    const { title, children } = props;
    
    return (
        <div className="d-flex flex-column align-items-center text-center">
            <Heading1 title={title} />
            <p className="fs-3 fw-medium">{`～ ${children} ～`}</p>
        </div>
    );
}