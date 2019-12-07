import React, { Component, Fragment } from 'react';
import Header from './components/Header';
import ListaNoticias from './components/ListaNoticias';

class App extends Component {
  state ={
    noticias: []
  }

async componentDidMount(){
  this.consultarNoticias();
}

  consultarNoticias = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=ar&category=business&apiKey=5bdc8077784142db9ac390ab5b8fd753`;
    const respuesta = await fetch(url);
    const noticias = await respuesta.json();

    this.setState({
      noticias: noticias.articles
    })

  }

  render(){
    return(
      <Fragment>
        <Header
        titulo='Noticias React Api'
        />
        <div className="container white contenedor-noticias">
        <ListaNoticias
        noticias={this.state.noticias}
        />
        </div>
      </Fragment>
      );
  }
}

export default App;
