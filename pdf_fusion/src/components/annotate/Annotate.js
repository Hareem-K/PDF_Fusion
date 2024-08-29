import React from 'react';
import './Annotate.css';

function Annotate() {
  return (
    <div className="annotate">
      <img src="/images/pdf_annotate.webp" className="annotate-photo" />
      <h1 className='annotate_title'>Annotate PDFs</h1>
      <p className='annotate_description'>Upload a PDF file to add comments, highlights, or other markings.</p>
      <input type="file" accept=".pdf" />
      <button>Annotate PDF</button>
    </div>
  );
}

export default Annotate;
