import React, { useState } from 'react'

const Formulario = () => {

  //Crear State de Citas
  const [cita, setCita] = useState({
    mascota: '',
    propietario: '',
    fecha: '',
    hora: '',
    sintomas: ''    
  })

  const handleChange = () => (
    console.log('awaa ...')
  )
  
  
  return (
    <>
    <h2>Crear Citas</h2>

    <form >
      <label>Nombre de la mascota</label>
      <input 
        type='text'
        name='mascota'
        className='u-full-width'
        placeholder='Nombre Mascota'
        onChange={handleChange}
        />
      <label>Nombre del dueño</label>
      <input 
        type='text'
        name='propietario'
        className='u-full-width'
        placeholder='Nombre propietario'
        onChange={handleChange}
        />
      <label>Fecha</label>
      <input 
        type='date'
        name='fecha'
        className='u-full-width'
        onChange={handleChange}
        />
      <label>Hora</label>
      <input 
        type='time'
        name='hora'
        className='u-full-width'
        onChange={handleChange}
        />
      <label>Sintomas</label>
      <textarea 
        name='sintomas'
        className= 'u-full-width'
        onChange={handleChange}
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