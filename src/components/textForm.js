import React , {useState} from "react"
export default function TextForm(props) {

const UpClick = ()=>{
    const newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Text into UpperCase","success");
};    
const UplClick = ()=>{
    const newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Text into LowerCase","success");
};    
const UpCopyClick = ()=>{
    const text = document.getElementById("mytext");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text Copied","success");
};
const UpextraspaceClick = ()=>{
    const newText = text.split(/[" "]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces cleared","success");
};
const uponChange = (event)=>{
    setText(event.target.value)
};    

const UpclearClick = ()=> {
    const newText = "";
    setText(newText);    
};

const [text , setText] = useState("Enter Text");      

return(
    <>
    <div className="container">
        <div class="mb-3">
        <label for="mytext" className={`form-label text-${props.mode==="light"?"dark":"light"}`}>Text areas</label>
        <textarea class="form-control" value={text} onChange={uponChange} id="mytext" rows="3"></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={UpClick}>Convert to UpperCase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={UplClick}>Convert to LowerCase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={UpCopyClick}>Copy Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={UpextraspaceClick}>Clear Extra Spaces</button>
        <br/>
        <button className="btn btn-primary mx-1 my-2" onClick={UpclearClick}>Clear Text</button>    
    </div>
    <div className={`container my-3 text-${props.mode==="light"?"dark":"light"}`}>
        <h1>Your Text Summary</h1>
        <p>{text.split(/s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} chars</p>
        <p>{0.08 * text.split(" ").length} minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something to Preview"}</p>
    </div>
    </>
)

}
