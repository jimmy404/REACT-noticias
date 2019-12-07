import React, { Component } from 'react';

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
    return( <h1>Noticias react</h1>
      );
  }
}

export default App;
