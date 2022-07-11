import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({backred, btnpink, backpink, backblue, btnblue, backgreen, btngreen,style, modeBtn, changeMode,note,navlink,btnred}) => {
  

    
  return (
    <>
        <div className="nav" style={style}>
            <div className="nav_list">
                <ul>
                    <li><Link className="nav_link" style={navlink} to='/'>Text Transform</Link></li>
                    
                </ul>
            </div>

            <div className="nav_button">
                <button style={btnred} onClick={backred}  className='red'></button>
                
                <button style={btngreen} onClick={backgreen}   className='green'></button>

                <button className='blue' style={btnblue} onClick={backblue}></button>

                <button className='pink' style={btnpink} onClick={backpink}></button>

                <button style={modeBtn} onClick={changeMode}>{note}</button>
            </div>
        </div>
    </>
  );
};

export default Navbar;
