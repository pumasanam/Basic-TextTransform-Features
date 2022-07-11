import React, {useState} from 'react'

const Text = ({textCss}) => {
    const [textarea, setTextArea] = useState("");
    const uppercase =()=>{
        let upcase = textarea.toUpperCase();
        setTextArea(upcase);
    };

    const lowercase =()=>{
        let lowcase = textarea.toLowerCase();
        setTextArea(lowcase);
    };

    const clear =()=>{
        let cler = "";
        setTextArea(cler);
    };

    
  return (
    <>
      <div className="text ">

            <h1 className='text-center'>Basic Text Transform Features</h1>
            <textarea name="" style={textCss} value={textarea} onChange={(e)=>{
                setTextArea(e.target.value);
            }} placeholder='Enter Your Text Here' id="" cols="30" rows="10"></textarea>

            <button className='btn btn-primary mt-2' onClick={uppercase}>Uppercase</button>
            <button className='btn btn-primary mt-2 mx-2' onClick={lowercase}>Lowercase</button>
            <button className='btn btn-primary mt-2 mx-2' onClick={clear}>Clear</button>
      </div>

      <div className="text_list">
        <p className=' m-0 mt-2'>{textarea.length} Characters {textarea.split(" ").length} Words</p>

        <p className='m-0 my-2'>{textarea===""? null:0.008 * textarea.split(" ").length} Minutes Will Take To Read This</p>

        <h3 className='m-0'>Preview</h3>
        
        <p>{textarea==="" ? 'Please Fill Above TextArea To Preview' : textarea}</p>
      </div>
    </>
  );
};

export default Text;
