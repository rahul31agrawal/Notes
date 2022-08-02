import React from 'react';
import "./NotesCard.css";


function NotesCard({notesTitle,notesTask,cardColor}) {
  console.log(cardColor);
  return (
    <div className="card" style={{backgroundColor:cardColor}}>
            <div>
            <h2>{notesTitle}</h2>
            </div>

            <div>
            <span>{notesTask}</span>
            </div>

           

            
            
            
          
        </div>
  )
}

export default NotesCard