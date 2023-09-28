export const RedesSociales = ({ facebook, github, instagram }) => {
    const onClick = () => {
        alert('En Construcción');
    }
    return (
        <>
            <div className="redes">
                <div className="card">
                    <i className="fa-brands fa-facebook" onClick={onClick}>{facebook}</i>
                </div>
                <div className="card">
                    <i className="fa-brands fa-github" onClick={onClick}>{github}</i>
                </div>
                <div className="card">
                    <i className="fa-brands fa-instagram" onClick={onClick}>{instagram}</i>
                </div>
            </div>
        </>
    );
}

export default RedesSociales