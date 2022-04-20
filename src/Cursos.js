import React, { Component } from 'react'

export default class Cursos extends Component {

  constructor(props){
    super(props);
    this.listarCursos = this.listarCursos.bind(this);
    this.limpiarCursos = this.limpiarCursos.bind(this);
    this.listarPorApellido = this.listarPorApellido.bind(this);
    this.limpiar = this.limpiar.bind(this);
    this.state = {
        estudiantes: [],
        cursos: [],
    };
  }

  listarCursos () {
    fetch("http://localhost:1234/cursos")
    .then((resp) => resp.json())
    .then((json) => {
        this.setState({
            cursos: json.cursos,
            resultado: json.result, 
        });
    });
  }

  limpiarCursos () {
    this.setState({
      cursos: [],
    });
  }

  listarPorApellido () {
    fetch("http://localhost:1234/estudiantes?apellido=Martinez")
    .then((resp) => resp.json())
    .then((json) => {
        this.setState({
            estudiantes: json.estudiantes,
            resultado: json.result, 
        });
    });
  }

  limpiar () {
    this.setState({
      estudiantes: [],
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.listarCursos}>Listar todo</button>
        <button onClick={this.limpiarCursos}>Limpiar</button>
        <table>
            <thead>
                <tr>
                    <th>Cursos</th>
                </tr>
            </thead>
            <tbody>
                {this.state.cursos.map((c, index) => (
                    <tr>
                        <td>{c.nombre}</td>
                    </tr>
                ))}
            </tbody>
        </table>

        <button onClick={this.listarPorApellido}>Listar los cursos del estudiante X</button>
        <button onClick={this.limpiar}>Limpiar</button>
        <table>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Curso</th>
                </tr>
            </thead>
            <tbody>
              {this.state.estudiantes.map((e, index) => (
                  <tr>
                      <td>{e.nombre}</td>
                      <td>{e.apellido}</td>
                      <td>{e.cursos && e.cursos[0].nombre}</td>
                  </tr>
              ))}
            </tbody>
        </table>
      </div>
    )
  }
}
