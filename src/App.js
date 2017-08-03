import React, { Component } from 'react';
import './App.css';
import Projects from './Components/Projects'
import AddProject from './Components/AddProject'
import Toolbar from './Components/Toolbar'
//Import for uuid for each list item
import uuid from 'uuid';

//imports for bootstrap
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

//file upload using FileUpload in redux
import { FileUpload } from 'redux-file-upload';

import CustomDropZone from './Components/CustomDropZone';

import UploadScreen from './Components/UploadScreen'
class App extends Component {

//Only tell the declare the variables
  constructor(){
    super();
    this.state = {
      projects:[]
    }
  }

//fetch data using ajax here or in lifecylcle method componentDidMount
componentWillMount(){
  this.setState({
    projects:[
      {
        id:uuid.v4(),
        title:'Business Website',
        category: 'Web Design'
      },
      {
        id:uuid.v4(),
        title:'Social App',
        category: 'Mobile Development'
      },
      {
        id:uuid.v4(),
        title:'Ecommerce Shopping Cart',
        category: 'Web Development'
      }
    ]
  });
}

handleAddProject(project){
 let projects = this.state.projects;
 projects.push(project);
 this.setState(projects:projects);
}

handleDeleteProject(id){
  let projects  =this.state.projects;
  let index = projects.findIndex(x => x.id === id);
  projects.splice(index,1);
  this.setState(projects:projects);
}
// Only one master div inside each render function
  render() {
    return (
      <div className="App">
      <UploadScreen/>
      <Toolbar/>
      <AddProject addProject={this.handleAddProject.bind(this)}/>
      <Projects onDelete = {this.handleDeleteProject.bind(this)} projects = {this.state.projects} />
      </div>
    );
  }
}

export default App;
