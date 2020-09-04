import React, { useState, useEffect } from 'react'
import Formulario from './components/Formulario'
import Cita from './components/Cita'


function App() {

  //citas en local storage base de datos que almacena solo string
  let citasInicialtes = JSON.parse(localStorage.getItem('citas'))
  if(!citasInicialtes){
    citasInicialtes = []
  }
  //arreglo de cita
  const [citas, setCitas] = useState(citasInicialtes)
  //Funcion que tome las citas de actuales de form y agrege la nueva
  const crearCitas = cita => {
    setCitas([
      ...citas,
      cita
    ])
  }
  const eliminarCita = (id) => { 
    setCitas(citas.filter(cita => cita.id !== id))
  }

  //mensaje condicional
  const titulo = citas.length === 0 ? 'No hay citas' : 'Administra tus citas'

  //useEfect se ejecuta cuando el componente se renderiza nuevamente
  useEffect(() =>{
    if(citasInicialtes){
      localStorage.setItem('citas', JSON.stringify(citas))
    }else{
      localStorage.setItem('citas', JSON.stringify([]))
    }
  },[citas])

  return (
    <div className="container">
    <h1>Administrador de pacientes</h1>

    <div className="row">
      <div className="one-half column">
        <Formulario
          crearCita={crearCitas}
        />
      </div>
      <div className="one-half column">
        <h2>{titulo}</h2>
        {citas.map(cita => (
          <Cita
            key={cita.id}
            cita = {cita}
            eliminarCita={eliminarCita}
          />
        ))}
      </div>  
    </div>  
      

    </div>
  );
}

export default App;
