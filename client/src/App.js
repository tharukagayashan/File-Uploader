import React, { useState } from 'react';
import axios from 'axios';

const App = () => {

  const [file, setFile] = useState(null);

  const formData = new FormData();
  formData.append('file', file);

  const uploadFile = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8000/upload", formData)
      .then((res) => {
        alert(res.data);
      })
      .catch((err) => {
        console.log(err);
      })

  }

  return (
    <div className="App">
      <div className='container'>
        <center>
          <h1 className='mt-4'>FILE UPLOADER</h1>

          <form onSubmit={uploadFile}>

            <div className="col-5 mt-5">
              <label htmlFor="formFile" className="form-label">File Upload</label>
              <input className="form-control" type="file" id="formFile" name='file' onChange={(e) => {
                setFile(e.target.files[0]);
              }} />
            </div>

            <br />
            <input className="btn btn-warning" type="submit" value="Upload" />

          </form>

        </center>

      </div>
    </div>
  );
}

export default App;