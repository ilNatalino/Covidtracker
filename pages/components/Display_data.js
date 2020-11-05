import 'bootstrap/dist/css/bootstrap.min.css'
const Ciao = (props) =>{
    return(
        <div className="vh-100 d-flex align-items-center 
        justify-content-center flex-column">
            <div className="rounded-lg shadow-lg w-75 h-75 text-center 
                            d-flex flex-column justify-content-around">
                <h3>Nuovi positivi: <i style={{color: "green"}}>+{props.nuoviPositivi}</i></h3>
                <h3>Positivi attuali: <i style={{color: "red"}}>{props.positiviTot}</i></h3>
                <h3>Casi totali: <i style={{color: "red"}}>{props.casiTot}</i></h3>
                <h3>Deceduti: {props.deceduti}</h3>
                <h3>Terapia intensiva: {props.terapiaIntensiva} </h3>
                <div>
                    <h4>Ultimo Aggiornamento: </h4>
                    <h6>{props.data}</h6>
                </div>    
            </div>
        </div>
    )
}

export default Ciao;