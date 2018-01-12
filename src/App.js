import React, { Component } from 'react';
import uuid from 'uuid';
import Projects from './components/Projects';
import AddProject from './components/AddProject';
import Todos from './components/Todos';
import $ from 'jquery';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      projects: [],
      todos: []
    }
  }
  // life cycle method - everytime the component is re-rendered

  getToDos() {
    $.ajax({
      url: 'https://jsonplaceholder.typicode.com/todos',
      dataType: 'json',
      cache: false,
      success: function(data){
        this.setState({todos: data}, function(){
          console.log('this.state is', this.state)
        })
      }.bind(this),
      error: function(xhr, status, error){
        console.log(error)
      }
    })
  }

  getProjects() {
    this.setState({
      projects: [
        {
          id: uuid.v4(),
          title: 'Business Website',
          category: 'Web Design'
        },
        {
          id: uuid.v4(),
          title: 'Social App',
          category: 'Mobile Development'
        },
        {
          id: uuid.v4(),
          title: 'E-Commerce Shopping Cart',
          category: 'Web Development'
        }
      ]
    });
  }

  componentWillMount() {
    this.getProjects();
    this.getToDos();
  }

  componentDidMount() {
    this.getToDos();
  }

  handleAddProject(project) {
    // console.log('handleAddProject is', project)
    let projects = this.state.projects;
    projects.push(project)
    this.setState({ projects: projects })
  }

  handleDeleteProject(id) {
    let projects = this.state.projects;
    let index = projects.findIndex(x => x.id === id);
    projects.splice(index, 1);
    this.setState({ projects: projects })
  }

  render() {
    return (
      <div className="App">
        <AddProject addProject={this.handleAddProject.bind(this)} />
        <br />
        <Projects projects={this.state.projects} onDelete={this.handleDeleteProject.bind(this)} />
        <hr />
        <Todos todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
