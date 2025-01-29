import "./Panel.css";
function Panel({className, children}) {
    return (

        <div
            className={`panel-container ${className}`}
        >
            {children}
        </div>
    );
}

export default Panel;