import "./App.css";

import {Routes,Route} from 'react-router-dom';
import Home from "./pages/home/Home";
import Notes from "./pages/NotesPage/Notes";
function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/notes" element={<Notes />} />
      </Routes>
      
    </div>
  );
}

export default App;
