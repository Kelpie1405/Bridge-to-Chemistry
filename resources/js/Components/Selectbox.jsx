export default function Selectbox(props) {
    const { label, name, options, onChange } = props;
    
    const handleChange = (e) => {
        onChange(e.target.value);
    };
    
    return (
        <>
            <label htmlFor={name}>{`${label}：`}</label>
            <select id={name} name={name} onChange={handleChange}>
                <option value="">未選択</option>
                {options.map((option) => (
                    <option key={option.id} value={option.id}>{option.name}</option>
                ))}
            </select>
        </>
    );
}