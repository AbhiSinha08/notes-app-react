import React, { useState, useEffect } from "react";
import Note from "./Note";
import Header from "./Header";
import Footer from "./Footer";
import NewNote from "./NewNote";

let data = JSON.parse(localStorage.getItem("NotesApp_Notes"))
if (data === null) data = [];

const App = () => {
    const [notes, setNotes] = useState([...data]);

    useEffect(() => {
        localStorage.setItem("NotesApp_Notes", JSON.stringify(notes));
    })

    return (
    <div className="h-screen w-screen flex flex-col">
        <Header />
        <NewNote onAdd={setNotes} />
        <div className="flex-grow pt-4">
            <div className="flex flex-wrap align-centre">
                {notes.map((note, index) => (
                    <Note 
                        key = {index}
                        id = {index}
                        onDelete = {setNotes}
                        heading = {note.heading}
                        content = {note.content}
                    />
                ))}
            </div>
        </div>
        <Footer />
    </div>
    );
}

export default App;