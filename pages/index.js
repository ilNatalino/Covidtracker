import Head from 'next/head'
import Ciao from './components/Display_data'
import React from 'react'
import Navbar from './components/Navbar'


class Home extends React.Component {
  
  state = {
    dati: {}
  }

  componentDidMount(){ 
    fetch("https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-andamento-nazionale-latest.json")
    .then(response => response.json())
    .then(data =>{
      this.setState({
        dati: data[0]
      })
    });
  };
    
  
  render(){
    return (
      <div>
        <Head>
          <title>Covid Tracker</title>
          <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        </Head>
        <Navbar/>
        <Ciao casiTot = {this.state.dati.totale_casi} 
              positiviTot = {this.state.dati.totale_positivi} 
              nuoviPositivi = {this.state.dati.nuovi_positivi}
              data ={this.state.dati.data}
              terapiaIntensiva = {this.state.dati.terapia_intensiva}
              deceduti = {this.state.dati.deceduti} />
      </div>
    )
  }
}
export default Home;