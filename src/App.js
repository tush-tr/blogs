import './App.css';
import {React} from 'react'
import Home from './homepage'
import FetchImages from './fetchImg'
function App() {
  return (
    <div className="ImageSection">
       <Home />
       <FetchImages />
    </div>
  );
}

export default App;
