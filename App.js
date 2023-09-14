import logo from './logo.svg';
import './App.css';
const name = "Hello World";
const obj = {name: "Hello World Object"};
const data = ['We', 'are', 'United'];
const list = [{name: "Hello World 1"}, {name: "Hello World 2"}, {name: "Hello World 3"}];
const complex = [{company: 'XYZ', jobs: ['Javascript', 'React']}, {company: 'ABC', jobs: ['AngularJs' ,'Ionic']}]
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>{name}</h1>
        <h1>{obj.name}</h1>
        <div>
        {data.map(function(item){
          return <p> {item}</p>
        })}
        </div>
            <ul>
        {list.map(function(item){
          return <li>{item.name}</li>
        })}
        </ul>
        <table border='1'>
          <tr>
            <th>Company</th>
            <th>Jobs</th>
          </tr>
          {complex.map(function(item){
            return <tr><td>{item.company}</td> <td>{item.jobs[0]} , {item.jobs[1]}</td></tr>
          })}
        </table>

      </header>
    </div>
  );
}

export default App;
