function RedesSociales({ facebook, github, instagram }) {
    return (
        <>
        <div  className="contenedorRedesSociales">
            <div class="card">
            <i class="fa-brands fa-facebook">{facebook}</i>
            </div>
            <div class="card">
            <i class="fa-brands fa-github">{github}</i>
            </div>
            <div class="card">
            <i class="fa-brands fa-instagram">{instagram}</i>
            </div>
        </div>
        </>
    )
}

export default RedesSociales