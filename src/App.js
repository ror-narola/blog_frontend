import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Author from './components/Author/Author'
import PrivateText from './components/PrivateText'

const App=()=>{
  const [currAuthor, setCurrAuthor]=useState(null);
  return (
    <div className="App">
      <Author currAuthor={currAuthor} setCurrAuthor={setCurrAuthor} />
    </div>
  );
}
export default App;