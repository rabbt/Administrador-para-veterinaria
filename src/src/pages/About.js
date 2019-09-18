import React from "react";
import './bootstrap.min.css';

 



class Menu extends React.Component {




    
  render() {
    return (
        <div className='card mt-4 mb-4 py-5'>
        <div className='card-body'>
        <div class="container">
    <div class="row">
    <div class="col">Torneo
   
    <div class="input-group mb-3">
  <input type="text" class="form-control" placeholder="Nombre Torneo" aria-label="Nombre de torneo" aria-describedby="basic-addon2"/>
  <div class="input-group-append">
    <button class="btn btn-outline-secondary" type="button">agregar</button>
  </div>
</div>



      </div>
    


    <div class="col">
       
    </div>
    <div class="w-100"></div>
    <div class="col">
    <p>Jugadores:</p>
    
    <br/>
    <p>Jugadores1</p>

        <button>agregar</button>

    <p>Jugadores2</p>

        <button>agregar</button>

    <p>Jugadores3</p>

        <button>agregar</button>

    <p>Jugadores4</p>

        <button>agregar</button>

    </div>
  
    <div class="col">
        <h3>Torneo:</h3>
    </div>
  </div>
</div>
            </div>
            </div>


        
    );
  }
}
 
export default Menu;