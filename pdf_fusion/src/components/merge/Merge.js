import React, { useState } from 'react';
import './Merge.css';

function Merge() {
  const [files, setFiles] = useState([]);

  const handleFileChange = (event) => {
    const newFiles = Array.from(event.target.files);
    setFiles((prevFiles) => [...prevFiles, ...newFiles]);
  };

  const handleRemoveFile = (index) => {
    setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  return (
    <div className="merge">
      <img src="/images/pdf_merge1.png" className="merge-photo" alt="Merge PDFs" />
      <h1 className="merge_title">Merge PDFs</h1>
      <p className="merge_description">Upload two or more PDF files to merge them into a single document.</p>
      <div className="file-dropzone">
        <input
          type="file"
          multiple
          accept=".pdf"
          onChange={handleFileChange}
        />
        <p>Drag and drop files here, or click to select files</p>
      </div>
      <ul className="file-list">
        {files.map((file, index) => (
          <li key={index}>
            {file.name}
            <button
              className="remove-file-button"
              onClick={() => handleRemoveFile(index)}
            >
              X
            </button>
          </li>
        ))}
      </ul>
      <button className="merge-button" disabled={files.length < 2}>
        Merge PDFs
      </button>
    </div>
  );
}

export default Merge;
