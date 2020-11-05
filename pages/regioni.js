import Head from 'next/head'
import Navbar from './components/Navbar'
import Ciao from './components/Display_data'
import React from 'react'
class regioni extends React.Component{
    state = {
      dati: [],
      regioneSelezionata: {}
    }

    componentDidMount(){ 
      let regioni = [];
      fetch("https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-regioni-latest.json")
      .then(response => response.json())
      .then(data =>{
          regioni = data;
          this.ordinaRegioni(regioni,15);
      });
    };

    ordinaRegioni(regioni){
      let regioniOrdinate = [];
      for(let i in regioni){
        regioniOrdinate[regioni[i].codice_regione] = regioni[i];
      }
      this.setState({
        dati: [...regioniOrdinate],
        regioneSelezionata: regioniOrdinate[15]
      })
    }
    selezionaRegione(idRegione){
      this.setState(state =>{
        return{
          dati: [...state.dati],
          regioneSelezionata: state.dati[idRegione]
        }
      })
    }

    render(){
      const style = {
        backgroundColor: '#b9d9f3'  
      }
    return( 
        <div>
        <Head>
          <title>Covid Tracker</title>
          <meta name="viewport" content="width=device-width, initial-scale=0.5"></meta>
        </Head>
        <Navbar/>
        <div className="btn-group vw-75 pt-4 d-flex justify-content-center" role="group" aria-label="Basic example">
            <button type="button" className="btn font-weight-bolder" style={style} onClick={() => this.selezionaRegione(13)}>Abruzzo</button>
            <button type="button" className="btn font-weight-bolder " style={style} onClick={() => this.selezionaRegione(17)}>Basilicata</button>
            <button type="button" className="btn  font-weight-bolder " style={style} onClick={() => this.selezionaRegione(18)}>Calabria</button>
            <button type="button" className="btn  font-weight-bolder " style={style} onClick={() => this.selezionaRegione(15)}>Campania</button>
            <button type="button" className="btn  font-weight-bolder " style={style} onClick={() => this.selezionaRegione(8)}>Emilia Romagna</button>
            <button type="button" className="btn  font-weight-bolder " style={style} onClick={() => this.selezionaRegione(6)}>Friuli-Venezia Giulia</button>
            <button type="button" className="btn  font-weight-bolder " style={style} onClick={() => this.selezionaRegione(12)}>Lazio</button>
        </div>
          <div className="btn-group vw-75 pt-2 d-flex justify-content-center " role="group" aria-label="Basic example">  
            <button type="button" className="btn  font-weight-bolder " style={style} onClick={() => this.selezionaRegione(7)}>Liguria</button>
            <button type="button" className="btn  font-weight-bolder " style={style} onClick={() => this.selezionaRegione(3)}>Lombardia</button>
            <button type="button" className="btn font-weight-bolder " style={style} onClick={() => this.selezionaRegione(11)}>Marche</button>
            <button type="button" className="btn  font-weight-bolder" style={style} onClick={() => this.selezionaRegione(14)}>Molise</button>
            <button type="button" className="btn  font-weight-bolder" style={style} onClick={() => this.selezionaRegione(1)}>Piemonte</button>
            <button type="button" className="btn  font-weight-bolder" style={style} onClick={() => this.selezionaRegione(16)}>Puglia</button>
            <button type="button" className="btn  font-weight-bolder" style={style} onClick={() => this.selezionaRegione(20)}>Sardegna</button>
        </div>
        <div className="btn-group vw-75 pt-2 d-flex justify-content-center" role="group" aria-label="Basic example">
            <button type="button" className="btn  font-weight-bolder" style={style} onClick={() => this.selezionaRegione(19)}>Sicilia</button>
            <button type="button" className="btn  font-weight-bolder" style={style} onClick={() => this.selezionaRegione(9)}>Toscana</button>
            <button type="button" className="btn  font-weight-bolder" style={style} onClick={() => this.selezionaRegione(10)}>Umbria</button>
            <button type="button" className="btn  font-weight-bolder" style={style} onClick={() => this.selezionaRegione(2)}>Valle d'Aosta</button>
            <button type="button" className="btn  font-weight-bolder" style={style} onClick={() => this.selezionaRegione(5)}>Veneto</button>
            <button type="button" className="btn  font-weight-bolder" style={style} onClick={() => this.selezionaRegione(21)}>P.A. Bolzano</button>
            <button type="button" className="btn font-weight-bolder" style={style} onClick={() => this.selezionaRegione(22)}>P.A. Trento</button>
        </div>
        <h2 className="text-center pt-5 font-weight-bold">{this.state.regioneSelezionata.denominazione_regione}</h2>
        <Ciao casiTot = {this.state.regioneSelezionata.totale_casi} 
              positiviTot = {this.state.regioneSelezionata.totale_positivi} 
              nuoviPositivi = {this.state.regioneSelezionata.nuovi_positivi}
              data ={this.state.regioneSelezionata.data}
              terapiaIntensiva = {this.state.regioneSelezionata.terapia_intensiva}
              deceduti = {this.state.regioneSelezionata.deceduti}/>
      
      
      </div>
      
    )
  }  
}
export default regioni;