import React from 'react';

const Note = (props) => {
    return (
        <div className='m-4 rounded-lg bg-slate-200/70 inline-block px-3 py-2 max-w-md'>
            <h1 className='font-head text-xl'> {props.heading} </h1>
            <p className='font-body text-xl leading-6'> {props.content} </p>
        </div>
    );
}

export default Note;
