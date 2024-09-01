import React, { useState } from 'react';
import './Split.css';

function Split() {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    const newFile = event.target.files[0];
    setFile(newFile);
  };

  const handleRemoveFile = () => {
    setFile(null);
  };

  return (
    <div className="split">
      <img src="/images/pdf_split1.png" className="split-photo" alt="Split PDFs" />
      <h1 className="split_title">Split PDFs</h1>
      <p className="split_description">Upload a PDF file to split it into individual pages or specific parts.</p>
      
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
        className="split-button"
        disabled={!file} /* Disable button if no file is added */
      >
        Split PDF
      </button>
    </div>
  );
}

export default Split;
