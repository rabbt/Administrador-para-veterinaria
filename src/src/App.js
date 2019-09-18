import React, { Component } from 'react';
import './bootstrap.min.css';
import Header from './components/Header';
import NuevaCita from './components/NuevaJugador';
import ListaCitas from './components/ListaJugador';


import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';


import Menu from './pages/Menu'

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
//import { Link } from 'react-router-dom';

class App extends Component {
  state = { 
    citas: []
  }

  //local storage
//cuando la aplicacion carge
  componentDidMount(){
    const citasLS = localStorage.getItem('citas');
    if (citasLS) {
      this.setState({
        citas: JSON.parse(citasLS)
      })
    }
  }

  //cuando eliminamos o agregamos una nueva cita

  componentDidUpdate(){
    localStorage.setItem('citas', JSON.stringify(this.state.citas))
  }

  crearNuevaCita = datos => {
    //copiar el state actual
    const citas =[...this.state.citas,datos];

    //agregar el nuevo state
    this.setState({
      citas
    })
  }

  //eliminar las citas del state
  eliminarCita = id => {
    //tomar una copia del state
    const citasActuales = [...this.state.citas ];


    //utilizar filter para sacar el elemento @id del arrgelo
    const citas = citasActuales.filter(cita => cita.id !== id) //borrar deifernetes alos que de click
    //actualizar el state
    this.setState({
      citas
    })

  }

  


////////////////////




  render() {

    

    return (

      
      
      <div class='container'>
       
        <Header
        titulo ="Tournament"
        />


      <div className="row">
        
        <div className="col-md-10 mx-auto">
        <Router>
        <div>
          <Menu />
 
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </div>
      </Router>
          <NuevaCita 
          crearNuevaCita= {this.crearNuevaCita}/>
        </div>

        <div className='mt-5 col-md-10 mx-auto'>
          <ListaCitas
            citas={this.state.citas}
            eliminarCita={this.eliminarCita}
          />

        </div>
      </div>

      </div> 
    );

  }
  }

export default App;
