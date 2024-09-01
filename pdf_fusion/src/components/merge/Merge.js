import React, { useState } from 'react';
import './Merge.css';

function Merge() {
  const [files, setFiles] = useState([]);
  const [mergedFileUrl, setMergedFileUrl] = useState(null);

  const handleFileChange = (e) => {
    setFiles([...e.target.files]);
  };

  const handleRemoveFile = (index) => {
    const newFiles = [...files];
    newFiles.splice(index, 1);
    setFiles(newFiles);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (files.length < 2) {
      alert("Please upload at least 2 PDF files to merge.");
      return;
    }

    const formData = new FormData();
    files.forEach((file) => formData.append('files[]', file));

    try {
      const response = await fetch('http://127.0.0.1:5000/merge', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        setMergedFileUrl(url);
      } else {
        alert('Failed to merge PDFs.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="merge">
      <img src="/images/pdf_merge1.png" className="merge-photo" alt="Merge PDFs" />
      <h1 className='merge_title'>Merge PDFs</h1>
      <p className='merge_description'>Upload two or more PDF files to merge them into a single document.</p>
      
      <input 
        type="file" 
        multiple 
        accept=".pdf" 
        onChange={handleFileChange} 
      />

      <ul>
        {files.map((file, index) => (
          <li key={index}>
            {file.name}
            <button onClick={() => handleRemoveFile(index)}>X</button>
          </li>
        ))}
      </ul>

      <button 
        onClick={handleSubmit} 
        disabled={files.length < 2}
      >
        Merge PDFs
      </button>

      {mergedFileUrl && (
        <div>
          <h2>Merged PDF</h2>
          <a href={mergedFileUrl} download="merged.pdf">Download Merged PDF</a>
        </div>
      )}
    </div>
  );
}

export default Merge;
