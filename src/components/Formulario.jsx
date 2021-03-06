import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

const Formulario = ({crearCita}) => {

  //Crear State de Citas
  const [cita, setCita] = useState({
    mascota: '',
    propietario: '',
    fecha: '',
    hora: '',
    sintomas: ''    
  })
  const [error, setError] = useState(false)

  const _handleChange = e => {
    setCita({
      //array destructuring, este es un truco para escribir el valor dentro de la propiedad
      //spread operator , crea una copia
      ...cita,
      [e.target.name]: e.target.value 

    })
  }

  //destructuring , extraer los valores
  const {mascota,propietario,fecha,hora,sintomas} = cita

  //enviar formulario
  const _handleSubmit = (e) => {
    e.preventDefault()

    //Validar para romper el ciclo, agregar return  
    if(mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === '' ){
      setError(true)
      return
    } 
    //eliminar le mensaje previo
    setError(false)

    //Asignar un ID
    cita.id = uuidv4()

    //Crear la cita
    crearCita(cita)

    //Reiniciar el form
    setCita({
      mascota: '',
      propietario: '',
      fecha: '',
      hora: '',
      sintomas: ''
    })

  }

    
  return (
    <>
    <h2>Crear Citas</h2>
    {error ? <p className='alert-error'>Todos los campos son requeridos</p> : null }

    <form
      onSubmit={_handleSubmit}
    >
      <label>Nombre de la mascota</label>
      <input 
        type='text'
        name='mascota'
        className='u-full-width'
        placeholder='Nombre Mascota'
        onChange={_handleChange}
        value={mascota}
        />
      <label>Nombre del dueño</label>
      <input 
        type='text'
        name='propietario'
        className='u-full-width'
        placeholder='Nombre propietario'
        onChange={_handleChange}
        value={propietario}
        />
      <label>Fecha</label>
      <input 
        type='date'
        name='fecha'
        className='u-full-width'
        onChange={_handleChange}
        value={fecha}
        />
      <label>Hora</label>
      <input 
        type='time'
        name='hora'
        className='u-full-width'
        onChange={_handleChange}
        value={hora}
        />
      <label>Sintomas</label>
      <textarea 
        name='sintomas'
        className= 'u-full-width'
        onChange={_handleChange}
        value={sintomas}
      ></textarea>
        <button
          type='submit'
          className='u-full-width button-primary'
        >
          Agregar Cita
        </button>
    </form>

    </>
  )
}
export default Formulario