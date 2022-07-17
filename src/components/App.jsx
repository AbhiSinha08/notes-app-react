import React from "react";
import Note from "./Note";
import Header from "./Header";
import Footer from "./Footer";
import notes from "../notes";

const App = () => (
    <div className="h-screen w-screen flex flex-col">
        <Header />
        <div className="flex-grow overflow-y-scroll flex flex-wrap">
            {notes.map(note => (
                <Note 
                    key = {note.id}
                    heading = {note.heading}
                    content = {note.content}
                />
            ))}
        </div>
        <Footer />
    </div>
);

export default App;