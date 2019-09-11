import React, { Component } from 'react';
import uuid from 'uuid';

const stateInicial = {
    cita : {
        mascota : '',
        propietario : '',
        fecha : '',
        hora : '',
        sintomas : ''
    },
    error: false

}

//crear cita
class NuevaCita extends Component {
    state = { ...stateInicial }

     //cuando el ususario escribe en los inputs
     handleChange = e => {
         console.log (e.target.name + ': ' + e.target.value);

         //colocar lo que el usuario escribe en el state
         //toma copia del state y los va agregando
         this.setState({
             cita:{
                 ...this.state.cita, //copia del state
                [e.target.name] : e.target.value
         }
         })
     }
//cuando envia el formulario
     handleSubmit = e =>{
         e.preventDefault();


         //extraer valores del state
        const {mascota, propietario, fecha, hora, sintomas} = this.state.cita;

         //validar que todos los campos esten llenos

         if(mascota === '' || propietario === '' || fecha === '' || hora === '' || sintomas === '')
         {
            this.setState({
                error:true
            });
            
            //detener ejecucion
            return;
         }
         //generar objeto con los datos
         const nuevaCita = {...this.state.cita};
         nuevaCita.id = uuid();

         //agregar la cita a state la app
         this.props.crearNuevaCita(nuevaCita)

         //Colocar en el state el stateInicial
         this.setState({
             ...stateInicial
         })
     }  


    render() { 

        //extraer valor del stete
        const { error } = this.state;

        return (  
            <div className='card mt-5 py-5'>
                <div className='card-body'>
                    <h2 className='card-title text-ceter mb-5'>
                        Llena el formulario par un anueva Nueva Cita
                    </h2>

                    { error ? <div className="alert alert-danger mt-2 mb-5 text-center">todos los campos son obligatorios</div> : null  }

                    <form
                        onSubmit={this.handleSubmit}>
                        <div className = 'form-group row'>
                            <label className='col-sm-4 col-lg-2 col-form-label'>Nombre
                            Mascota</label>
                            <div className="col-sm-8 col-lg-10">
                                <input 
                                    type='text'
                                    className='form-control'
                                    placeholder='nombre mascota'
                                    name='mascota'
                                    onChange={this.handleChange}
                                    value={this.state.cita.mascota}
                                />
                            </div>
                        </div>
                        <div className = 'form-group row'>
                            <label className='col-sm-4 col-lg-2 col-form-label'>Nombre
                            Dueño</label>
                            <div className="col-sm-8 col-lg-10">
                                <input 
                                    type='text'
                                    className='form-control'
                                    placeholder='nombre Dueño mascota'
                                    name='propietario'
                                    onChange={this.handleChange}
                                    value={this.state.cita.propietario}
                                />
                            </div>
                        </div>
                        <div className = 'form-group row'>
                            <label className='col-sm-4 col-lg-2 col-form-label'>fecha</label>
                            <div className="col-sm-8 col-lg-4">
                                <input 
                                    type='date'
                                    className='form-control'
                                    name='fecha'
                                    onChange={this.handleChange}
                                    value={this.state.cita.fecha}
                                />
                            </div>
                     
                            <label className='col-sm-4 col-lg-2 col-form-label'>hora</label>
                            <div className="col-sm-8 col-lg-4">
                                <input 
                                    type='time'
                                    className='form-control'
                                    name='hora'
                                    onChange={this.handleChange}
                                    value={this.state.cita.hora}
                                />
                            </div>
                        </div>

                        <div className = 'form-group row'>
                            <label className='col-sm-4 col-lg-2 col-form-label'>sintomas</label>
                            <div className="col-sm-8 col-lg-10">
                                <textarea
                                    className='form-control'
                                    name='sintomas'
                                    placeholder='describe los sintomas'
                                    onChange={this.handleChange}
                                    value={this.state.cita.sintomas}
                                ></textarea>
                            </div>
                        </div>
                        <input type='submit'className='py-3 mt-2 btn btn-success
                        btn-block' value='Agregar Nueva Cita'/>

                    </form>
                </div>
            </div>
        );
    }
}
 
export default NuevaCita;