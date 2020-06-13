import React, { Component } from 'react';
import classes from './App.module.css';
//import Radium, { StyleRoot } from 'radium';
//import styled from 'styled-components';
import Person from './Person/Person';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

import Validation from './Validation/Validation';
import Char from './Char/Char';

// const StyledButton = styled.button`
//   background-color: ${props => props.na ? 'red':'blue'};
//   color: white;
//   font: inherit;
//   border: 1px solid blue;
//   padding: 8px;
//   cursor: pointer;
  
//   &:hover {
//     background-color: ${props => props.na ? 'orange' : 'green'};
//     color: white;
//   }
// `;
class App extends Component {
  

  state = {
    persons: [
      { id:"asfa1" , name: "nams", age: 22 },
      { id:"vasdf1" , name: "bina", age: 32 },
      { id:"asdf11" , name: "neha", age: 24 }
    ]
  }

  clickButton = (newName) => {
    console.log("clicked");
    this.setState(
      {
        persons: [
          { id: 'asfa1', name: 'Max', age: 28 },
          { id: 'vasdf1', name: 'Manu', age: 29 },
          { id: 'asdf11', name: 'Stephanie', age: 26 }
        ]
      }
    )
  }

  // nameChanged = (event) => {
  //   this.setState(
  //     {
  //       persons: [
  //         { id: "111", name: "nama", age: 22 },
  //         { id: "112", name: event.target.value, age: 32 },
  //         { id: "113", name: "neha", age: 44 }
  //       ],
  //       showPersons: true
  //     }
  //   )
  // }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  }

  // state = {
  //   username: 'nams',
  //   userinput: ''
  // }


  usernameChangedHandler = (event) => {
    this.setState({ username: event.target.value });
  }
  togglePerson = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }
  deletePerson = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }
  ipChangedHandler = (event) => {
    this.setState({ userinput: event.target.value });
  }
  charDelete = (index) => {
    const text = this.state.userinput.split('');
    text.splice(index, 1);
    const updateText = text.join('');
    this.setState({ userinput: updateText })
  }
  render() {

    // const charList= this.state.userinput.split('').map( (ch, index) =>{
    //     return <Char character={ch} 
    //     key={index}
    //     clicked={()=> this.charDelete(index)}
    //     />;
    // });

    // const styleButton = {
    //   backgroundColor: 'red',
    //   color: 'white',
    //   paading: '30px',
    //   cursor: 'pointer',
    //   border: '1px solid blue',
    //   margin: '20px',
    //   ':hover': {
    //     backgroundColor: 'blue',
    //     color: 'white'
    //   }
    // }

    let persons = null;
    let btnClass='';


    if (this.state.showPersons) {
      persons = (

        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePerson(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)} />
          })
          }
          {/* <Person name={this.state.persons[0].name}
            age={this.state.persons[0].age}
            click={this.clickButton.bind(this, 'namsid p')}
          />
          <Person name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            changed={this.nameChanged}
          >
            Hobby: painting
        </Person>
          <Person name={this.state.persons[2].name}
            age={this.state.persons[2].age}
          /> */}

        </div>

      );
      // styleButton.backgroundColor = 'green';
      // styleButton[':hover'] = {
      //   backgroundColor: 'orange',
      //   color: 'black'
      // }
      btnClass = classes.Red;

    }
    const assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red); // classes = ['red']
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold); // classes = ['red', 'bold']
    }

    return (
      // <StyleRoot>
        <div className={classes.App}>
          <p className={assignedClasses.join(' ')}> Workin Fine </p>
          <button className={btnClass} onClick={this.togglePerson}>toggle Person</button>

          {persons}

{/*           
        <UserInput 
          changed={this.usernameChangedHandler} 
          currentName={this.state.username} />
        <UserOutput userName={this.state.username}/>
        <UserOutput userName={this.state.username}/>
        <UserOutput userName="nn"/>

        <hr/>
        <input type = "text" 
        onChange={this.ipChangedHandler}
        value ={this.state.userinput}/>
        <p >{this.state.userinput}</p>
        <Validation inputLength= {this.state.userinput.length} />
      {charList}  */}
        </div>
      // </StyleRoot>
    );
  }
}

export default App;
