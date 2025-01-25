// import { useState } from "react";
import React,{useState } from "react";

function Textedit(){
  const [text,setText] = useState("")

  const UpperCase =() => {
    setText(text.toUpperCase());
  };
  const LowerCase =() =>{
    setText(text.toLowerCase());
  };
    const removespecialcharacter =() => {
    const cleanText = text.replace(/[^a-zA-Z0-9]/g,'');
    setText(cleanText);
  };
  const removeExtraSpace = () => {
    console.log("text value",text)
    const space = text.replace(/\s+/g,' ').trim(); 
    setText(space);
};

  
  const Change= (e)=> {
    setText(e.target.value);

  };
  return(
    <div style ={{margin:"20px",backgroundColor:"grey"}}>
      <h2>Text editor</h2>
      <textarea style={{ width:"100%", height:"150px", marginBottom:"10px",backgroundColor:"lightblue", padding:"0px"}}
      value={text}
      onChange={Change}
      placeholder="input a text here........"
      >

      </textarea>
<div>
  <button onClick={UpperCase} style ={{margin:"5px", backgroundColor:"red",color:"white"}}>convert to upper case</button>
  <button onClick={LowerCase} style ={{margin:"5px", backgroundColor:"red",color:"white"}}>convert to lower case</button>
  <button onClick={removespecialcharacter} style ={{margin:"5px", backgroundColor:"red",color:"white"}}>removespecialcharacter</button>
  <button onClick={removeExtraSpace} style ={{margin:"5px", backgroundColor:"red",color:"white"}}>removeextraspace</button>
</div>
    </div>
  );
}

export default Textedit;
