import React from "react";
import { Link } from "react-router-dom";


class Jugador extends React.Component {
  render() {

    

    return (

      
      
      <div class='container'>
        
        <Header
        titulo ="Administrador de veterinaria"
        />


      <div className="row">
        <div className="col-md-10 mx-auto">
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

export default Jugador;