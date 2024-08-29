import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <img src="/images/pdf_home.png" className="home-photo" />
      <h1 className='home_title'>Welcome to PDF Fusion</h1>
      <p className='home_description'>PDF Fusion is a tool to manage your PDF files with functionalities to merge, split, and annotate PDFs. Use the navigation bar to explore different features.</p>
    </div>
  );
}

export default Home;
