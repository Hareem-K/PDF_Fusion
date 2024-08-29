import React from 'react';
import './Split.css';

function Split() {
  return (
    <div className="split">
      <img src="/images/pdf_split1.png" className="split-photo" />
      <h1 className='split_title'>Split PDFs</h1>
      <p className='split_description'>Upload a PDF file to split it into individual pages or specific parts.</p>
      <input type="file" accept=".pdf" />
      <button>Split PDF</button>
    </div>
  );
}

export default Split;
