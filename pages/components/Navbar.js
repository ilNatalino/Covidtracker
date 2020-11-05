import Link from 'next/link'
const Navbar = () =>{
    let style = {
        backgroundColor: '#96C6ED'
        //0096c7 96C6ED
    }

    return(
        <div className="navbar navbar-expand-lg text-center justify-content-around vw-75" style={style}>
           <h3 className="font-weight-bolder">Covid Tracker</h3>
           <Link href="/">
            <a className="nav-link text-dark font-weight-bolder">Italia</a>
            </Link>
        
            <Link href="/regioni">
            <a className="nav-link text-decoration-none font-weight-bolder text-dark">Regioni</a>
            </Link>
        </div>
    )
}



export default Navbar; 