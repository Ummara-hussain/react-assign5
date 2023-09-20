import logo from './logo.svg';
import './App.css';
import { useState } from 'react'

function App() {
  const [list, setList] = useState([])
  const [userInput, setUserInput] = useState([])
  const [editMode, setEditMode] = useState(false)
  const [currentIndex, setCurrentIndex] = useState()

  function userInputValue(e) {
    setUserInput(e.target.value)
  }
  function addToDo() {
    const tempList = [...list]
    tempList.push(userInput)
    setList(tempList)
    setUserInput('')
  }
  function dltli(index) {
    const tempList = [...list]
    tempList.splice(index, 1)
    setList(tempList)
    setCurrentIndex('')
  }
  function editBtn(index) {
    const value = list[index]
    setUserInput(value)
    setEditMode(true)
    setCurrentIndex(index)
  }
  function updateBtn() {
    const tempList = [...list]
    tempList[currentIndex] = userInput
    setList(tempList)
    setEditMode(false)
    setUserInput('')
    setCurrentIndex('')
  }
  function dltAll() {
    setList([])
  }

  return (
    <div className="App">
      <header className="App-header">

        <input onChange={userInputValue} placeholder='Enter your todo' value={userInput} /> <br></br>
        {!editMode ?
          <button onClick={addToDo}>Add</button>
          :
          <button onClick={updateBtn}>Update</button>
        }
        <button onClick={dltAll}>Delete All</button>
        <ul>
          {list.map(function (item, index) {
            return <li style={currentIndex === index ? { backgroundColor: 'red' } : {}}>
              {item}
              <button onClick={() => editBtn(index)}>Edit</button>
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
