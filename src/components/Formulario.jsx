import React from 'react'

const Formulario = () => {
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
        />
      <label>Nombre del dueño</label>
      <input 
        type='text'
        name='dueño'
        className='u-full-width'
        placeholder='Nombre Dueño'
        />
      <label>Fecha</label>
      <input 
        type='date'
        name='fecha'
        className='u-full-width'
        />
      <label>Hora</label>
      <input 
        type='time'
        name='hora'
        className='u-full-width'
        />
           <label>Sintomas</label>
           <textarea 
            name='sintomas'
            className= 'u-full-width'
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