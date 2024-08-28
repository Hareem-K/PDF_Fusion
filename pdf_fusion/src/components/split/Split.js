import React from 'react';
import './Split.css';

function Split() {
  return (
    <div className="split">
      <h1>Split PDFs</h1>
      <p>Upload a PDF file to split it into individual pages or specific parts.</p>
      <input type="file" accept=".pdf" />
      <button>Split PDF</button>
    </div>
  );
}

export default Split;
