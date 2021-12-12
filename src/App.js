import './App.css';
import HomePage from './Home'
import BlogPost from './BlogPost'
import { HashRouter as Router, Routes, Route } from "react-router-dom"
function App() {
  return (
    <Router>
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route path="/:blogId" element={<BlogPost />} />
    </Routes>
  </Router>

  );
}

export default App;
