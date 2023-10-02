import './App.css';
import { useState } from 'react';

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
    const [selectedOption, setSelectedOption] = useState()
    const [score, setScore] = useState(0)
    const [quizApp, setQuizApp] = useState(false)

    const option = questions[questionNo].options
    const correctAnswer = questions[questionNo].correctAnswer

    function nextQuestion() {
        updatedScore()
        let tempQuest = questionNo
        setQuestionNo(++tempQuest)
    }

    function updatedScore(){
        
        if (selectedOption === correctAnswer){
            let tempScore = score
            setScore(++tempScore)
        }
    }

    function finish() {
        updatedScore()
        setQuizApp(true)
    }
    function newQuiz(){
        setQuizApp(false)
        setQuestionNo(0)
        setScore(0)
    }
    function selected(e){
       setSelectedOption(e.target.value)
    }
    return (
        <div className="App">
            <header className="App-header">
                {!quizApp ? <div>
                <h2>Quiz App</h2>
                <p>Q {questionNo + 1} ) {questions[questionNo].title}</p>

                {option.map(function (item) {
                    return <div>
                        <input name='inp' checked={selectedOption === item} 
                        onChange={selected} value={item} type='radio' />{item}
                    </div>
                })}

                {questionNo === questions.length - 1 ?
                    <button onClick={finish}>Submit</button> :
                    <button onClick={nextQuestion}>Next</button>
                }
                </div>
                : <div>
                    <p>You have corrected {score} answers from {questions.length} questions.</p>
                    <button onClick={newQuiz}>Restart</button>
                </div>}
            </header>
        </div>
    );
}

export default App;
