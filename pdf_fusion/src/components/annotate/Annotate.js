import React, { useState } from 'react';
import './Annotate.css';

function Annotate() {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    const newFile = event.target.files[0];
    setFile(newFile);
  };

  const handleRemoveFile = () => {
    setFile(null);
  };

  return (
    <div className="annotate">
      <img src="/images/pdf_annotate.webp" className="annotate-photo" alt="Annotate PDFs" />
      <h1 className="annotate_title">Annotate PDFs</h1>
      <p className="annotate_description">Upload a PDF file to add comments, highlights, or other markings.</p>
      
      <div className="file-dropzone">
        <input
          type="file"
          accept=".pdf"
          onChange={handleFileChange}
          disabled={file !== null} /* Disable input if a file is already added */
        />
        <p>Drag and drop a file here, or click to select a file</p>
      </div>
      
      {file && (
        <ul className="file-list">
          <li>
            {file.name}
            <button
              className="remove-file-button"
              onClick={handleRemoveFile}
            >
              X
            </button>
          </li>
        </ul>
      )}
      
      <button 
        className="annotate-button"
        disabled={!file} /* Disable button if no file is added */
      >
        Annotate PDF
      </button>
    </div>
  );
}

export default Annotate;
