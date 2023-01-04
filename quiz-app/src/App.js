import './App.css';
import Header from './Components/Header/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Home from './Pages/Home/Home';
import Quiz from './Pages/Quiz/Quiz';
import Result from './Pages/Result/Result';
import { useState } from 'react';


function App() {
  const [name, setName] = useState("");
  const fetchQuestions =()=>{

  }
  return (
    <Router>
   <div className="app" style={{backgroundImage:"url(./bg.jpg)"}}>
    <Header/>
    <Routes>
    <Route exact path="/" element={<Home name= {name} setName={setName} fetchQuestions={fetchQuestions}/>}/>
    <Route exact path="/quiz" element={<Quiz/>}/>
    <Route exact path="/result" element={<Result/>}/>
    </Routes>
   </div>
   <Footer/>
   </Router>
   
  );
}

export default App;
