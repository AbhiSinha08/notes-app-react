import React from 'react';
import DeleteIcon from './DeleteIcon';

const Note = (props) => {
    function handleDelete() {
        props.onDelete((prev) => (
            prev.filter((item, index) => index !== props.id)
        ));
    }

    return (
        <div className='m-4 rounded-lg bg-slate-200/70 inline-block px-3 py-2 relative max-w-md min-w-[12rem] min-h-[5rem]'>
            <button onClick={handleDelete}
            className='absolute -right-2 -top-4 px-2 py-1 scale-75 bg-gray-300 hover:bg-gray-100 transition duration-200 rounded-full'>
                <DeleteIcon />
            </button> 
            <h1 className='font-head text-xl'>
                {props.heading}
            </h1>
            <p className='font-body text-xl leading-6'>
                {props.content}
            </p>
        </div>
    );
}

export default Note;
