import Dropzone from 'react-dropzone';
import React, {Component} from 'react';

class CustomDropZone extends Component{

  constructor(){
    super()
    this.state = { files: [] }
  }
  onDrop(files) {
      this.setState({
        files: files
      });
    }

    onOpenClick() {
      this.refs.dropzone.open();
    }

    render () {
      let filePreview;

      return (
          <div>
              <Dropzone ref="dropzone" onDrop={this.onDrop.bind(this)} >
                <div>Try dropping some files here, or click to select files to upload.</div>
              </Dropzone>

              <button type="button" onClick={this.onOpenClick.bind(this)}>
                  Open Dropzone
              </button>

              {
                this.state.files ? <div>
              <h2>Uploading {this.state.files.length} files...</h2>
              <div>{
                this.state.files.map((item) => {
                  return (<img src={item.preview} />)
                })
                        }</div>
              </div> : null
              }
          </div>
      );
    }
}

export default CustomDropZone;
