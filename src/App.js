import React from 'react';
import logo from './logo.svg';
import './App.css';

class Table extends React.Component {
  constructor(props) {
     super(props)
     this.state = {
        students: [
           { id: 1, name: 'Wasif', age: 21, email: 'wasif@email.com', action: 'Add/Delete' },
           { id: 2, name: 'Ali', age: 19, email: 'ali@email.com', action: 'Add/Delete' },
           { id: 3, name: 'Saad', age: 16, email: 'saad@email.com' , action: 'Add/Delete'},
           { id: 4, name: 'Asad', age: 25, email: 'asad@email.com', action: 'Add/Delete' }
        ]
     }
  }

  deleteRow = function(index) {
    var students = [...this.state.students];
    students.splice(index, 1);
    this.setState({students});
  }

  addRow = function() {
    var students = [...this.state.students];
    var newStudent = { id: students.length+1, name: 'Pari', age: 21, email: 'pari@email.com', action: 'Add/Delete' };
    students.push(newStudent);
    this.setState({students});
  }

  renderTableHeader() {
     let header = Object.keys(this.state.students[0])
     return header.map((key, index) => {
        return <th key={index}>{key.toUpperCase()}</th>
     })
  }

  renderTableData() {
     return this.state.students.map((student, index) => {
        const { id, name, age, email } = student //destructuring
        return (
           <tr key={id}>
              <td>{id}</td>
              <td>{name}</td>
              <td>{age}</td>
              <td>{email}</td>
              <td><button onClick ={this.addRow.bind(this)}>Add</button><button onClick ={this.deleteRow.bind(this,index)} index={id}>Delete</button></td>
           </tr>
        )
     })
  }

  render() {
    if(this.state.students.length > 0){
     return (
        <div>
           <h1 id='title'>React Dynamic Table</h1>
           <table id='students'>
              <tbody>
                 <tr>{this.renderTableHeader()}</tr>
                 {this.renderTableData()}
              </tbody>
           </table>
        </div>
     )
    }else{
      return "Table is Empty";
    }
  }
}

export default Table;

/*ReactDOM.render(<Table />, document.getElementById('root'));


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/
