import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <div className='my-5'>
      <div className=' bg-#28282B'>
        <div className='justify-center flex gap-5 my-auto mx-auto'>
          <Link to="/" className='font-sans text-xl text-gray-400 hover:drop-shadow-[0_0_10px_rgba(0,255,255,0.9)]'>Home</Link>
          <Link to="/blog" className='font-sans text-xl text-gray-400 hover:drop-shadow-[0_0_10px_rgba(0,255,255,0.9)]'>About</Link>
          <Link to="/projects" className='font-sans text-xl text-gray-400 hover:drop-shadow-[0_0_10px_rgba(0,255,255,0.9)]'>Projects</Link>
          <Link to="/contact" className='font-sans text-xl text-gray-400 hover:drop-shadow-[0_0_10px_rgba(0,255,255,0.9)]'>Contact</Link>
        </div>
      </div>
    </div>
  );
}

