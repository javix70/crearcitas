import React, { useState } from 'react'
import Formulario from './components/Formulario'
import Cita from './components/Cita'


function App() {
  //arreglo de cita
  const [citas, setCitas] = useState([])

  //Funcion que tome las citas de actuales de form y agrege la nueva
  const crearCitas = cita => {
    setCitas([
      ...citas,
      cita
    ])
  }
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
        <h2>Administra tus citas</h2>
        {citas.map(cita => (
          <Cita
            key={cita.id}
            cita = {cita}
          />
        ))}
      </div>  
    </div>  
      

    </div>
  );
}

export default App;
