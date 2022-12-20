import React, {useState} from "react";

function CreateArea(props) {
    const [inputNote, setInputNote] = useState({
        title: "",
        content: ""
    });
    
    function handleChange(event){
        const {name, value} = event.target;
        setInputNote((prevValue) => {
            return {
                ...prevValue,
                [name]: value
            };
        });
    }

    function handleSubmit(event){
        props.onAdd(inputNote);
        setInputNote({title: "", content: ""});

        event.preventDefault();
    }

    return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} name="title" placeholder="Title" value={inputNote.title}/>

        <textarea onChange={handleChange} name="content" placeholder="Take a note..." rows="3" value={inputNote.content} />
        
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
