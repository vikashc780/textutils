import React, { useState } from 'react'

export default function TextUtilsBody() {
    const [text, settext] = useState("");
    const handOnChange = (e) =>{
        settext(e.target.value)
    }
    const handleUpper = () => {
        let newText = text.toUpperCase()
        settext(newText)
    }
    const handleLower = () => {
        let newText = text.toLowerCase()
        settext(newText)
    }
    const handleCopy = () =>{
        navigator.clipboard.writeText(document.getElementById("textArea").value)
    }
    const handleSpace = () => {
        let newText =text.split(/[ ]+/)
        settext(newText.join(" "))
    }
    return (
        <>
            <div className="container-fluid d-flex row gx-5 mt-3 mx-auto">
                <h4 className="mb-3">Write your text here...</h4>
                <div className="col">
                    <div className="mb-3">
                        <textarea className="form-control" rows="10" id="textArea" placeholder="Enter text here" value={text} onChange={handOnChange}></textarea>
                    </div>
                    <div className="">
                        <label className="form-label">{text.split(" ").filter((e)=>{ return e.length!== 0}).length} words and {text.length} characters</label>
                    </div>
                    <div className="">
                        <button type="button" className="btn btn-sm btn-primary m-1" onClick={handleUpper}>Convert to Uppercase</button>
                        <button type="button" className="btn btn-sm btn-secondary m-1" onClick={handleLower}>Convert to Lowercase</button>
                        <button type="button" className="btn btn-sm btn-success m-1" onClick={handleSpace}>Remove Extra Spaces</button>
                        <button type="button" className="btn btn-sm btn-danger m-1" onClick={handleCopy}>Copy Text</button>
                        <button type="button" className="btn btn-sm btn-dark m-1" onClick={()=>{settext("")}}>Clear Text</button>
                    </div>
                </div>
                <div className="col">
                    <label className="form-label">Preview </label>
                    <div id="preview">{text}</div>
                </div>
            </div>
        </>
    )
}

