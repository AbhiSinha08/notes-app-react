import React from "react";
import Note from "./Note";
import Header from "./Header";
import Footer from "./Footer";

const App = () => (
    <div className="h-screen w-screen flex flex-col">
        <Header />
        <div className="flex-grow overflow-y-scroll">
            <Note />
        </div>
        <Footer />
    </div>
);

export default App;