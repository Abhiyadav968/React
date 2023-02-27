import React, { useState } from "react";

export default function TextForm(props) {

    const [text, setText] = useState('');
    const handleupClick = () => {
        console.log("upeercase was clicked");
        let newText = text.toUpperCase();
        setText(newText);
    }

    // 
    const handleloClick = () => {
        console.log("upeercase was clicked");
        let newText = text.toLowerCase();
        setText(newText);
    }
    //
    const handleClearClick = () =>{
        let newText = '';
        setText(newText)
    }
    // 
    const handleOnchange = (e) => {
        console.log("On change");
        setText(e.target.value);
    };
    //
    const handleExtraSpace = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }

    return (
        <>


            <div className="container">
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnchange} id="myBox" rows="10"></textarea>
                </div>
                <div>
                    <button className='btn btn-primary mx-1' onClick={handleupClick}>Convart to Upercase</button>
                    <button className='btn btn-primary mx-1' onClick={handleloClick}>Convart to Lowercase</button>
                    <button className='btn btn-primary mx-1' onClick={handleClearClick}>Clear</button>
                    <button className='btn btn-primary mx-1' onClick={handleExtraSpace}>Remove Extra Space</button>
                </div>
            </div>
            <div className="container">
                <h1>Your text Summary</h1>
                <p>{text.split(" ").length} Words and {text.length} Characters</p>
                <p>{0.008 * text.split(" ").length} Menuts read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    );
}