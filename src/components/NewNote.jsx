import React, { useState } from 'react';

const NewNote = (props) => {
    const [note, setNote] = useState({
        heading: "",
        content: ""
    });

    function handleChange(event) {
        const {name, value} = event.target;
        setNote((prev) => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

    function addNote() {
        props.onAdd((prev) => {
            return [note, ...prev]
        });
        setNote({
            heading: "",
            content: ""
        });
    }

    return (
        <div className='group flex flex-col mx-auto rounded-md my-2 border-gray-600 border-[1.5px] px-4 py-1 w-[50%] focus-within:border-blue-500 focus-within:border-2'>
            <input placeholder='Title' name='heading' type='text'
            onChange={handleChange} value={note.heading}
            className='focus:outline-none w-full' />
            <hr />
            <textarea placeholder='Content' name='content' type='text'
            rows={3}
            onChange={handleChange} value={note.content}
            className='mt-1 focus:outline-none w-full mb-4 hidden group-focus-within:block' />
            <button onClick={addNote}
            className='bg-blue-500 hover:bg-blue-400 transition duration-200 px-2 text-xl rounded-lg text-white mx-[40%] mt-1'>
                Add Note
            </button>
        </div>
    );
}

export default NewNote;
