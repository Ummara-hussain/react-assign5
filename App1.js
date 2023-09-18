import logo from './logo.svg';
import './App.css';
import {useState} from 'react'

function App() {
const [list,setList] = useState([])
const [userInput,setUserInput] = useState([])

function userInputValue(e){
  setUserInput(e.target.value)
}
function addToDo(){
  const tempList = [...list]
  tempList.push(userInput)
  setList(tempList)
}
function dltli(index){
  const tempList = [...list]
  tempList.splice(index, 1)
  setList(tempList)
}
function editBtn(index){
const tempList = [...list]
const abc = prompt('Update your todo')
tempList.splice(index,1,abc)
setList(tempList)
}

    return (
      <div className="App">
        <header className="App-header">

            <input onChange={userInputValue} placeholder='Enter your todo'/> <br></br>
            <button onClick={addToDo}>Add</button>
            <ul>
            {list.map(function(item, index){
            return <li>{item}
            <button onClick={editBtn}>Edit</button>
            <button onClick={() => dltli(index)}>Delete</button>
            </li>
          }
            )}
            </ul>


        </header>
    </div>
  );
}
export default App;
