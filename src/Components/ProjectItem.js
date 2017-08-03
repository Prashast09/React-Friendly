import React, { Component } from 'react';

class ProjectItem extends Component {

  deleteItem(projectId){
     this.props.onDelete(projectId);

  }
  render() {
    return (
      <div className="ProjectItem">
        <li>
          <b>{this.props.project.title}</b> : {this.props.project.category} <a href="#" onClick={this.deleteItem.bind(this,this.props.project.id)}>X</a>        </li>
        <br/>
      </div>
    );
  }
}

export default ProjectItem;
