export default function Accordion(props) {
    const { header, children } = props;
    
    return(
        <div className="accordion mb-3" id="accordionWhole">
            <div className="accordion-item">
                <h3 className="accordion-header">
                    <button type="button" className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#accordionContent">
                        <span className="fw-bold fs-5">
                            {header}
                        </span>
                    </button>
                </h3>
                <div className="accordion-collapse collapse" id="accordionContent" data-bs-parent="#accordionWhole">
                    <div className="accordion-body">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}