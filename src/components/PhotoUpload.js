import { Component } from 'react';

class PhotoUpload extends Component {
  render() {
    const setSelectedFile = this.props.setSelectedFile;

    return (
      <form>
        <input
          type="file"
          onChange={
            (e) => setSelectedFile(e.target.files[0])
          }
        />
      </form>
    );
  }
}

export default PhotoUpload;