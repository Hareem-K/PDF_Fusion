import React from 'react';
import './Annotate.css';

function Annotate() {
  return (
    <div className="annotate">
      <h1>Annotate PDFs</h1>
      <p>Upload a PDF file to add comments, highlights, or other markings.</p>
      <input type="file" accept=".pdf" />
      <button>Annotate PDF</button>
    </div>
  );
}

export default Annotate;
