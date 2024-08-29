import React from 'react';
import './Merge.css';

function Merge() {
  return (
    <div className="merge">
      <img src="/images/pdf_merge1.png" className="merge-photo" />
      <h1 className='merge_title'>Merge PDFs</h1>
      <p className='merge_description'>Upload two or more PDF files to merge them into a single document.</p>
      <input type="file" multiple accept=".pdf" />
      <button>Merge PDFs</button>
    </div>
  );
}

export default Merge;
