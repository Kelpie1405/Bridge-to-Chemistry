export default function Searchbox(props) {
    const { name, onChange, placeholder } = props;
    
    const handleChange = (e) => {
        onChange(e.target.value);
    };
    
    return (
        <div className="input-group input-group-lg mb-3">
                <input
                    type="text"
                    name={name}
                    onChange={handleChange}
                    placeholder={placeholder}
                    className="form-control"
                />
        </div>
    );
}