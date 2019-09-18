import React from 'react';

const Cita = ({cita, eliminarCita}) => (
    <div className="media mt-3">
        <div className="media-body">
            <h3 className="mt-0">{cita.fecha}</h3>
            <p className="card-text"><span>Nombre:</span> {cita.mascota} </p>
            <p className="card-text"><span>Avatar:</span> {cita.propietario} </p>
          <p className="card-text"><span>Tipo:</span><br/> {cita.sintomas} </p>

            <button
                className='btn btn-danger'
                onClick={ () => eliminarCita(cita.id)}
            >Borrar &times;</button>
            

            <button
                className='btn btn-success'
                {...console.log='sds'} 
            >agregar  </button>
        </div>
    </div>
);

//eliminarCita(cita.id)
   
export default Cita;