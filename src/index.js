import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Estudiante from './Estudiante';
import reportWebVitals from './reportWebVitals';
import 'antd/dist/antd.css'
import Cursos from './Cursos';
import CrearEstudiante from './CrearEstudiante';

/*let obj = {
  legajo: "UNRN-1234",
  nombre: "Franco",
  apellido: "Pichiñan",
};*/

ReactDOM.render(
  <React.StrictMode>
    {/* <Estudiante estudiante={obj} /> */}
    <Cursos /> 
    {/* <CrearEstudiante /> */} 
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
