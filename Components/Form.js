import React, { useState } from 'react'

export default function Form(props) {
    const upClick = () => {
        let newText = text.toLocaleUpperCase();
        setText(newText);
    }
    const LoClick = () => {
        let newText = text.toLocaleLowerCase();
        setText(newText);
    }

    const CopyClick = ()=>{
     let text = document.getElementById("myBox");
     text.select();
     navigator.clipboard.writeText(text.value);
    }
    const clearClick = () => {
        let newText = '';
        setText(newText);
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const exSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }
    const [text, setText] = useState('');
    return (
       <>        <div className="container my-3">
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label"><h1>{props.heading}</h1></label>
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="10"></textarea>
                <button className="btn btn-primary my-3 mx-1" onClick={upClick}>Convert To UpperCase</button>
                <button className="btn btn-primary my-3 mx-1" onClick={LoClick}>Convert To LowerCase</button>
                <button className="btn btn-primary my-3 mx-1" onClick={CopyClick}>Copy Text</button>
                <button className="btn btn-primary my-3 mx-1" onClick={exSpace}>Remove Extra Space</button>
                <button className="btn btn-primary my-3 mx-1" onClick={clearClick}>Clear Text</button>
   </div>
        </div>
        <div className="container my-3">
           <h1>Text Summary</h1>
           <p>{text.split(" ").length} words and {text.length} characters</p>
        <h2>Preview</h2>
        <p>{text}</p>
        </div>
        </>

    )
}
