import { Component } from 'react';

class DisplayThumbnail extends Component {
  render() {
    const selectedFile = this.props.selectedFile;

    return (
      <div>
        File: {
          selectedFile ? (
            <div>
              <p>Filename: {selectedFile.name}</p>
              <p>Filetype: {selectedFile.type}</p>
              <p>Size in bytes: {selectedFile.size}</p>
              <img src={URL.createObjectURL(selectedFile)} className="toast" alt="Thumbnail" />
            </div>
          ) : (
            <p>Select a file to show details</p>
          )
        }
      </div>
    );
  }
}

export default DisplayThumbnail;