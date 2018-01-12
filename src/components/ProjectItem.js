import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProjectItem extends Component {
    deleteProject(id){
        // console.log('delete project is')
        this.props.onDelete(id)
    }

  render() {
    console.log(this.props)
    return (
      <li className="Project">
      <strong> {this.props.project.title} </strong>: {this.props.project.category} <strong></strong><a herf="#" onClick={this.deleteProject.bind(this, this.props.project.id)}>[Delete]</a>
      </li>
    );
  }
}

ProjectItem.propTypes = {
    project:PropTypes.object,
    onDelete:PropTypes.func
  }

export default ProjectItem;
