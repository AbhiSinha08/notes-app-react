import React from 'react';

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
    
    return (
        <div className='bg-gray-100 text-center py-2 text-gray-600'>
            A Simple Notes App made with React
            {/* Copyright &copy; {year} */}
        </div>
    );
}

export default Footer;
