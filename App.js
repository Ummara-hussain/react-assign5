import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Result from './views/Result';

const questions = [
    {
        title: 'What is HTML?',
        options: ['hyper text madeup language', 'hello title markup language', 'hyper text markup language', 'none of the above'],
        correctAnswer: 'hyper text markup language'
    },
    {
        title: 'What is CSS?',
        options: ['control style sheet', 'cascading style sheet', 'color style sheet', 'none of the above'],
        correctAnswer: 'cascading style sheet'
    },
    {
        title: 'What is JS?',
        options: ['java script', 'java sheet', 'jack script', 'none of the above'],
        correctAnswer: 'java script'
    },
    {
        title: 'What is IT?',
        options: ['intelligence transcript', 'information technology', 'information transcript', 'none of the above'],
        correctAnswer: 'information technology'
    },
    {
        title: 'What is AI?',
        options: ['artificial information', 'anti information', 'artificial inteligence', 'none of the above'],
        correctAnswer: 'artificial inteligence'
    },
    {
        title: 'What is ML?',
        options: ['machine learning', 'motoro la', 'market language', 'none of the above'],
        correctAnswer: 'machine learning'
    },
]
function App() {
    const [questionNo, setQuestionNo] = useState(0)
    const options = questions[questionNo].options
    const correctAnswer = questions[questionNo].correctAnswer
    const [score , setScore] = useState(0)
    const [correctOption , setCorrectOption] = useState()
    const [showResult , setShowResult] = useState(false)

    function nextQuestion() {
        submit()
        let tempList = questionNo
        setQuestionNo(++tempList)
    }

    function submit(){
        let tempScore = score
        if (correctOption === correctAnswer){
            setScore(++tempScore)
        }
        
    }
    function theEnd(){
        submit()
        setShowResult(true)
    }
    function choose(e){
        setCorrectOption(e.target.value)
    }

    return (
        <div className="App">
            <header className="App-header">
                <h1>Quiz App</h1> 
                <h4> Q{questionNo + 1})
                    {questions[questionNo].title}
                </h4>

                {options.map(function(item){
                    return <div> <input checked={correctOption === item} onChange={choose} value={item} name='inp' type='radio'/> {item}</div>
                })}
                <br/>
                {questionNo === questions.length - 1 ?  <button onClick={() => theEnd('finish')}>Finish</button> :
                <button  onClick={nextQuestion}>Next</button>
                }
                {showResult && <Result finalScore={score} />} 
            </header>
        </div>
    );
}

export default App;
