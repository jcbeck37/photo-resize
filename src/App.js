import { useState } from 'react';

import './App.css';
import PhotoUpload from './components/PhotoUpload';
import DisplayThumbnail from './components/DisplayThumbnail';

const App = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Upload a photo to see the thumbnail.</h1>
        <PhotoUpload setSelectedFile={setSelectedFile} />
        <DisplayThumbnail selectedFile={selectedFile} />
      </header>
    </div>
  );
}

export default App;
