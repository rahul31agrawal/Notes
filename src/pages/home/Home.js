import React from 'react'
import {Link} from "react-router-dom";
import boyimg from "../../Assets/Notesboy.jpg";
import "./home.css";

function Home() {
  return (
    <div className='container'>
            <div className="landing-page">
                <div className="header">
                    <h1 className='header_title'><span className='black-text'>Note</span>Book</h1>
                    <div className='header_text'>
                        <h3>Take Notes With NoteBook <br /> A Note Taking app</h3>
                        <p>Increase your productivity with the help of Notebook, Just write what ever you need to to achieve.</p>
                    </div>
                    <Link className='header_btn' to="/notes">Start Now</Link>
                </div>
                <div className="hero-image">
                    <img src={boyimg} alt="hero" />
                </div>
            </div>
        </div>
  )
}

export default Home