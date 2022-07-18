import React, { useState } from "react";
import Note from "./Note";
import Header from "./Header";
import Footer from "./Footer";
import data from "../notes";
import NewNote from "./NewNote";

const App = () => {
    const [notes, setNotes] = useState([...data]);

    return (
    <div className="h-screen w-screen flex flex-col">
        <Header />
        <NewNote onAdd={setNotes} />
        <div className="flex-grow">
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
        <Footer />
    </div>
    );
}

export default App;