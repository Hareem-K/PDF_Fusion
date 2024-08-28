import React from 'react';
import './Merge.css';

function Merge() {
  return (
    <div className="merge">
      <h1>Merge PDFs</h1>
      <p>Upload two or more PDF files to merge them into a single document.</p>
      <input type="file" multiple accept=".pdf" />
      <button>Merge PDFs</button>
    </div>
  );
}

export default Merge;
