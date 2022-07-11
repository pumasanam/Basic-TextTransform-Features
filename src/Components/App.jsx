import React, {useState} from 'react';
import Navbar from './Text Transform/Navbar';
import "./App.css";
import Text from './Text Transform/Text';

const App = () => {

    const [style, setStyle] = useState({ // useState for main nav
      backgroundColor:"#ecf0f1",
  });

  const changeMode =()=>{
      if(style.backgroundColor === "#ecf0f1"){
        setStyle({
          backgroundColor:"#2c3e50",
        });

        setNote("Enable Light Mode");

        setModeBtn({
          backgroundColor:"white",
          color:"black",
          padding:"8px 10px",
          borderRadius:"5px",
          border:"none",
        });

        setNavlink({
          color:"white",
        });

        document.body.style.backgroundColor="#1e3799";
        document.body.style.color="white";

        setTextCss({
          backgroundColor:"lightgray",
        });

      }

// else part


      else{
        setStyle({
          backgroundColor:"#ecf0f1",
        });

        setNote("Enable Dark Mode");

        setModeBtn({
          backgroundColor:"black",
          color:"white",
          padding:"8px 10px",
          borderRadius:"5px",
          border:"none",
        });

        setNavlink({
          color:"purple",
        });

        document.body.style.backgroundColor="#fff";
        document.body.style.color="black";

        setTextCss({
          backgroundColor:"white",
        });

      }
  };

  // end of changeMode section

  const [note, setNote] = useState('Enable Dark Mode'); // note section

  const [modeBtn, setModeBtn] = useState({ // Enable Mode Button Section
    border:"none",
    backgroundColor:"black",
    color:"white",
    padding:"8px 10px",
    borderRadius:"5px",
  });


  const [navlink, setNavlink] = useState({  // Navbar Link Section <Link></Link>
    color:"purple",
  });


  const [textCss, setTextCss] = useState({  // usestate of textarea section 
    backgroundColor:"white",
  });



  // background button section
let btnred = {
backgroundColor:"red"
};

const backred =()=>{
  if(btnred.backgroundColor === "red"){
    setStyle({
      backgroundColor:"red",
    });

    setNavlink({
      color:"white",
    });
  }
};
// ..................................red button section

let btngreen = {
  backgroundColor:"green",
};

const backgreen =()=>{
  if(btngreen.backgroundColor === "green"){
    setStyle({
      backgroundColor:"green",
    });

    setNavlink({
      color:"white",
    });
  }
}

// ..................................green button section


let btnblue ={
  backgroundColor:"blue",
}

const backblue =()=>{
  if(btnblue.backgroundColor === "blue"){
    setStyle({
      backgroundColor:"blue",
    });

    setNavlink({
      color:"white",
    });
  }
}
// ..................................blue button section


let btnpink ={
  backgroundColor:"pink",
}

const backpink =()=>{
  if(btnpink.backgroundColor ==="pink"){
    setStyle({
      backgroundColor:"pink",
    });

    setNavlink({
      color:"white",
    });
  }
};





   
  return (
    <>
      <Navbar backpink={backpink} btnpink={btnpink} backblue={backblue} btnblue={btnblue} backgreen={backgreen}  btngreen={btngreen} backred={backred} btnred={btnred} setStyle={setStyle}  note={note} navlink={navlink} changeMode={changeMode} modeBtn={modeBtn} style={style}/>

      <Text textCss={textCss}/>
    </>
  );
};

export default App;
