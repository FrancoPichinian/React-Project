import React, { Component } from 'react'
import "./Estudiante.css"
import { Table, Button } from 'antd';

const listadoCursos = [
  {nombre: "Docker", cantidadHs: 20},
  {nombre: "Python", cantidadHs: 10},
  {nombre: "Css", cantidadHs: 15},
  {nombre: "Php", cantidadHs: 30},
]

const columns = [
  {title: "Curso", dataIndex: 'nombre', key: 'nombre'},
  {title: "Cantidad de Hs", dataIndex: 'cantidadHs', key: 'cantidadHs'},
]

export default class Estudiante extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cursos: [
        {nombre: "Angular", cantidadHs: 10},
        {nombre: "React js", cantidadHs: 15},
      ]      
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    e.preventDefault();
    let cursoRandom = listadoCursos[Math.floor(Math.random()*listadoCursos.length)];
    console.log(cursoRandom);
    this.setState((state) => ({
      cursos: [...state.cursos, cursoRandom]
    }))
  }

  render() {
     return (
      <>
        <div>
          <h1 align="center">Estudiante</h1>
          <p className='estilo'>{"Legajo: " + this.props.estudiante.legajo}</p>
          <p className='estilo'>{"Nombre: " + this.props.estudiante.nombre}</p>
          <p className='estilo'>{"Apellido: " + this.props.estudiante.apellido}</p>
        </div>

        <div>
        <Table className='table' dataSource={this.state.cursos} columns={columns}
        pagination={{
          defaultPageSize: 3}}>
        </Table>
        <Button className='button' type="primary" onClick={this.handleClick}>
          Inscribirme
        </Button>
        </div>
      </>
    )
  }
}
