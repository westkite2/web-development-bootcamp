import React, {useState} from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import CreateArea from "./CreateArea";
// import notes from "../notes";

function App(){
    const [notes, setNotes] = useState([]);

    function addNote(inputNote){
        // console.log(inputNote);
        setNotes(prevNotes => {
            return [...prevNotes, inputNote];
        });
    }  
    function deleteNote(key){
        setNotes(prevNotes => {
            return prevNotes.filter((noteItem, index) => {
                return index !== key;
            })
        });
    }

    return (
        <div>
            <Header />
            <CreateArea onAdd={addNote}/>

            {notes.map((noteItem, index) => (
                <Note
                key={index}
                id={index}
                title={noteItem.title}
                content={noteItem.content}
                onDelete={deleteNote}
                />
            ))}

            {/* {notes.map(note => (
                <Note
                    key={note.key}
                    title={note.title}
                    content={note.content}
                />
            ))} */}
            
            <Footer />
        </div>
    )
}

export default App;