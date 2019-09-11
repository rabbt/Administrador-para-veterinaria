import React from 'react';

const Cita = ({cita, eliminarCita}) => (
    <div className="media mt-3">
        <div className="media-body">
            <h3 className="mt-0">{cita.fecha}</h3>
            <p className="card-text"><span>Nombre mascota:</span> {cita.mascota} </p>
            <p className="card-text"><span>Nombre Dueño:</span> {cita.propietario} </p>
            <p className="card-text"><span>fecha:</span> {cita.fecha} </p>
            <p className="card-text"><span>hora: </span>{cita.hora}</p>
            <p className="card-text"><span>sintomas:</span><br/> {cita.sintomas} </p>

            <button
                className='btn btn-danger'
                onClick={ () => eliminarCita(cita.id)}
            >Borrar &times;</button>
        </div>
    </div>
);

//eliminarCita(cita.id)
   
export default Cita;