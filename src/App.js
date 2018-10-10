import React, { Component } from 'react';
import Person from './Person/Person';


import './App.css';


class App extends Component {

  state = {
    persons: [
      { id: 'w3we3', name: "kashif", age: 28 },
      { id: 'w3we43', name: "Manu", age: 32 },
      { id: 'w3we23', name: "Stephanie", age: 26 }
    ],
    otherState: "Someval",
    showPersons: false
  };
  deletePersonHandler = (index) => {

    let persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({ persons: persons });

  }
  // switchNameHandler = (newName) => {
  //   console.log('Was clicked');
  //   //this.state.persons[1].name = "Maximiliane";
  //   this.setState({
  //     persons: [
  //       { name: newName, age: 28 },
  //       { name: "Manu", age: 32 },
  //       { name: "Stephanie", age: 27 }
  //     ]
  //   });
  // }

  toggleNamesHandler = () => {
    const otherPersons = this.state.showPersons;
    this.setState({ showPersons: !otherPersons });
  }
  nameChangedHandler = (event, id) => {

    const personIndex = this.state.persons.findIndex((person) => person.id === id)
    console.log(personIndex);

    const personCopy = [...this.state.persons];
    personCopy[personIndex].name = event.target.value;

    this.setState({ persons: personCopy });


    // this.setState({
    //   persons: [
    //     { name: "kashif", age: 28 },
    //     { name: event.target.value, age: 32 },
    //     { name: "Stephanie", age: 27 }
    //   ]
    // });
  }
  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      padding: '8px',
      border: '1px solid blue',
      cursor: 'pointer',
      boxshadow: '1px solid #eee',
      // ':hover': {
      //   backgroundColor: 'lightgreen',
      //   color: 'black'
      // }

    }

    let persons = null;
    if (this.state.showPersons) {
      style.backgroundColor = 'red';
      // style[':hover'] = {
      //   backgroundColor: 'salmon',
      //   color: 'black'
      // };
      persons = (

        <div>
          {
            this.state.persons.map((person, index) => {
              return <Person
                key={person.id}
                name={person.name}
                age={person.age}
                click={() => this.deletePersonHandler(index)}
                changed={(event) => this.nameChangedHandler(event, person.id)}
              />
            })
          }



        </div>
      )
    }

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red');
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }
    return (
    
      <div className="App">
        <h1>I am react app</h1>
        <p className={classes.join(' ')}>This is really working</p>
        <button
          style={style}
          onClick={this.toggleNamesHandler}>Toggle Persons</button>
        {persons}
      </div>

    );

  }
}

export default App;
