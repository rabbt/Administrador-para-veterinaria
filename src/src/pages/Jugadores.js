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


<div data-role="page">
  <div data-role="header">
    <h1>Range Slider</h1>
  </div>

  <div data-role="main" class="ui-content">
    <form method="post" action="/action_page_post.php">
      <div data-role="rangeslider">
        <label for="price-min">Price:</label>
        <input type="range" name="price-min" id="price-min" value="200" min="0" max="1000">
        <label for="price-max">Price:</label>
        <input type="range" name="price-max" id="price-max" value="800" min="0" max="1000">
      </div>
        <input type="submit" data-inline="true" value="Submit">
        <p>The range slider can be useful for allowing users to select a specific price range when browsing products.</p>
      </form>
  </div>
</div>